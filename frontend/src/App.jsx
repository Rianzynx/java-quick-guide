import { useState, useEffect, useContext } from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './Contexts/AuthContext.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';

// Fontes
import "@fontsource/jetbrains-mono"; 
import "@fontsource/jetbrains-mono/400.css";

// Estilos
import './style/Home.css'
import './style/SearchResult.css'
import './style/TopicDetails.css'


// componente interno para as Rotas
const AppRoutes = ({ 
  sidebarOpen, setSidebarOpen, search, setSearch, 
  activeSection, setActiveSection, loading, selectedTopic, 
  setSelectedTopic, categories, filterCategory, setFilterCategory, filteredTopics 
}) => {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          token ? (
            <Home
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              search={search}
              setSearch={setSearch}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              loading={loading}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
              categories={categories}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              filteredTopics={filteredTopics}
            />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('Início');
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filterCategory, setFilterCategory] = useState("Todos");
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Só tenta buscar se o token existir!
    if (token) {
      fetchTopics(token);
    }
  }, []);

  // Carregamento de dados da API (Fetch)
  const fetchTopics = async () => {
    try {
      setLoading(true);
      // Pega o token que acabou de salvar no localStorage
      const token = localStorage.getItem('token');

      // faz a requisição se o token existir
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await fetch("api/topics", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Envia o token no cabeçalho Authorization
          'Authorization': `Bearer ${token}`
        }
      });

      // Tratamento para token expirado ou inválido
      if (response.status === 401 || response.status === 403) {
        console.warn("Sessão expirada. Redirecionando...");
        localStorage.removeItem('token');
        window.location.href = '/login'; // Força o redirecionamento
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setTopics(data); // tópicos vão preencher a tela
      }
    } catch (error) {
      console.error("Erro ao carregar tópicos:", error);
    } finally {
      setLoading(false);
    }
  };


  // Normaliza texto removendo acentos para busca
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  // Filtra tópicos por busca e categoria
  const filteredTopics = topics.filter(topic => {
    const matchesSearch = normalizeText(topic.title).includes(normalizeText(search));
    const matchesCategory = filterCategory === 'Todos' || topic.category === filterCategory;
    return matchesSearch && matchesCategory;
  })
    .sort((a, b) => a.title.localeCompare(b.title));

  // Extrai categorias únicas dos tópicos
  const categories = ['Todos', ...new Set(topics.map(t => t.category))];

  return (
    <AuthProvider> 
      <BrowserRouter>
        <AppRoutes 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          search={search}
          setSearch={setSearch}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          loading={loading}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          categories={categories}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          filteredTopics={filteredTopics}
        />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
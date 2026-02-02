import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './Contexts/AuthContext.jsx';
import { Home } from './pages/Home.jsx';
import api from './services/api';
import { AuthPage } from './pages/AuthPage';

// Fontes e Estilos
import "@fontsource/jetbrains-mono";
import "@fontsource/jetbrains-mono/400.css";
import './style/Home.css'
import './style/SearchResult.css'
import './style/TopicDetails.css'

// 1. O AppRoutes DEVE receber fetchTopics como prop para não dar "not defined"
const AppRoutes = (props) => {
  const { token } = useContext(AuthContext);

  // Desestruturando as props para facilitar o uso
  const {
    fetchTopics, sidebarOpen, setSidebarOpen, search, setSearch,
    activeSection, setActiveSection, loading, selectedTopic,
    setSelectedTopic, categories, filterCategory, setFilterCategory, filteredTopics
  } = props;

  return (
    <Routes>
      {/* Passamos fetchTopics para o Login como onLoginSuccess */}
      <Route path="/login" element={<AuthPage onLoginSuccess={fetchTopics} />} />
      <Route path="/register" element={<AuthPage onLoginSuccess={fetchTopics} />} />
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

  // função de buscar de tópicos
  const fetchTopics = async () => {
    const currentToken = localStorage.getItem('token'); // Pega direto do storage
    if (!currentToken) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await api.get('topics');
      setTopics(response.data);
    } catch (error) {
      console.error("Erro ao carregar tópicos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      fetchTopics();
    } else {
      setLoading(false);
    }
  }, []);

  // Normalização para busca
  const normalizeText = (text) => {
    return text ? text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
  }

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = normalizeText(topic.title).includes(normalizeText(search));
    const matchesCategory = filterCategory === 'Todos' || (topic.category) === filterCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => (a.title || "").localeCompare(b.title || ""));

  const categories = ['Todos', ...new Set(topics.map(t => t.category).filter(Boolean))];

  return (
    <BrowserRouter>
      <div className="app-main-wrapper">
        <AppRoutes
          fetchTopics={fetchTopics}
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
      </div>
    </BrowserRouter>
  );
}

export default App;
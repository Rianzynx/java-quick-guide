import { useState } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import TopicList from './components/TopicList';
import Sidebar from './components/Sidebar'
import TopicDetails from './components/TopicDetails.jsx';
import { javaTopics } from './data/topics.js';
import './style/Home.css'
import './style/SearchResult.css'
import './style/TopicDetails.css'
import { FaCalendarAlt, FaCode, FaStream, FaUserCircle } from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  // Estados principais da aplicação
  const [activeSection, setActiveSection] = useState('Início');
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filterCategory, setFilterCategory] = useState("Todos");

  // Normaliza texto removendo acentos para busca
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  // Filtra tópicos por busca e categoria
  const filteredTopics = javaTopics.filter(topic => {
    const matchesSearch = normalizeText(topic.title).includes(normalizeText(search));
    const matchesCategory = filterCategory === 'Todos' || topic.category === filterCategory;
    return matchesSearch && matchesCategory;
  })
    .sort((a, b) => a.title.localeCompare(b.title));

  // Extrai categorias únicas dos tópicos
  const categories = ['Todos', ...new Set(javaTopics.map(t => t.category))];

  return (
    <div className={`app-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>

      <div className="header-container">
        <div className="header-row">
          <Header />
          <SearchBar search={search} onSearchChange={setSearch} />
          <FaUserCircle size={32} color="#c9c9c9" cursor="pointer" />
        </div>
      </div>

      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} onNavigate={setActiveSection} />

      <main className="main-content">
        {/* Exibe detalhes de um tópico selecionado */}
        {selectedTopic ? (
          <TopicDetails 
            topic={selectedTopic} 
            onBack={() => setSelectedTopic(null)} 
          />
        ) : (search.trim() !== '' || activeSection === 'Tópicos') ? (
          // Exibe lista de tópicos com filtros
          <>
            <div className="filter-bar">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${filterCategory === cat ? 'active' : ''}`}
                  onClick={() => setFilterCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <TopicList
              topics={filteredTopics}
              onTopicClick={(topic) => setSelectedTopic(topic)}
            />
          </>

        ) : (
          // Exibe página inicial com destaques
          <>
            <section className="welcome-section">
              <h1>Bem-vindo</h1>
              <p>
                Aprenda Java de forma prática e direta. Explore tópicos, veja exemplos de código e teste suas habilidades.
              </p>
            </section>

            <section className="highlights">
              <h2>Destaques</h2>
              <div className="cards-container">
                <div className="card">
                  <FaCalendarAlt size={32} color="#f59e0b" />
                  <div>
                    <h3>LocalDate → String</h3>
                    <p>Aprenda a converter datas em Java com exemplos práticos.</p>
                  </div>
                </div>

                <div className="card">
                  <FaCode size={32} color="#10b981" />
                  <div>
                    <h3>Optional em Java</h3>
                    <p>Evite NullPointerException usando Optional de forma prática.</p>
                  </div>
                </div>

                <div className="card">
                  <FaStream size={32} color="#3b82f6" />
                  <div>
                    <h3>Streams vs ForEach</h3>
                    <p>Manipule coleções de forma eficiente com exemplos claros.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="call-to-action">
              <p>
                Comece agora! Pesquise um tópico na barra acima e veja exemplos práticos de Java.
              </p>
            </section>
          </>
        )}
      </main>
    </div>
  )
}

export default App;
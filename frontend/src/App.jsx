import { useState } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import TopicList from './components/TopicList';
import Sidebar from './components/Sidebar'
import { javaTopics } from './data/topics.js';
import './style/Home.css'
import './style/SearchResult.css'
import './style/TopicDetails.css'
import { FaCalendarAlt, FaCode, FaStream, FaUserCircle } from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  }

  const filteredTopics = javaTopics.filter(topic => {
    const normalizedTitle = normalizeText(topic.title);
    const normalizedSearch = normalizeText(search);
    return normalizedTitle.includes(normalizedSearch);
  });

  return (
    <div className={`app-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>

      <div className="header-container">
        <div className="header-row">
          <Header />
          <SearchBar search={search} onSearchChange={setSearch} />
          <FaUserCircle size={32} color="#c9c9c9" cursor="pointer" />
        </div>
      </div>

      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />


      <main className="main-content">
        {selectedTopic ? (

          <div className="topic-detail-container">
            <button className="back-button" onClick={() => setSelectedTopic(null)}>
              ← Voltar
            </button>

            <div className="detail-header">
              <span className="category-tag">{selectedTopic.category}</span>
              <h1>{selectedTopic.title}</h1>
            </div>

            <div className="detail-content">
              <p>{selectedTopic.description}</p>

              <div className="use-case-box">
                <strong>Quando usar:</strong>
                <p>{selectedTopic.useCase}</p>
              </div>

              {/* Renderiza o código apenas se ele existir no objeto */}
              <div className="code-section">
                <SyntaxHighlighter
                  language="java"
                  style={vscDarkPlus}
                  customStyle={{ borderRadius: '8px', padding: '20px' }}
                >
                  {selectedTopic.code}
                </SyntaxHighlighter>
              </div>
            </div>


          </div>
        ) : search ? (

          <TopicList
            topics={filteredTopics}
            onTopicClick={(topic) => {
              console.log('Tópico clicado:', topic.title);
              setSelectedTopic(topic);
            }}
          />

        ) : (
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

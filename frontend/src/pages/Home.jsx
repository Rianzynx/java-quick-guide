import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaCode, FaStream, FaUserCircle } from 'react-icons/fa';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import TopicList from '../components/TopicList';
import TopicDetails from '../components/TopicDetails';
import { AuthContext } from '../Contexts/AuthContext.jsx'; 

export const Home = ({
    sidebarOpen, setSidebarOpen,
    search, setSearch,
    activeSection, setActiveSection,
    loading, selectedTopic, setSelectedTopic,
    categories, filterCategory, setFilterCategory,
    filteredTopics
}) => {

    const [showUserMenu, setShowUserMenu] = useState(false);
    const { logout } = useContext(AuthContext);

    // referência para o container do menu
    const menuRef = useRef(null);

    // efeito para monitorar cliques na tela
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Se o menu estiver aberto e o cliquen não for dentro do menuRef
            if (showUserMenu && menuRef.current && !menuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };

        // Adiciona o evento ao carregar
        document.addEventListener('mousedown', handleClickOutside);
        
        // Limpa o evento ao destruir o componente 
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showUserMenu]); // Re-executa sempre que o estado do menu mudar

    return (
        <div className={`app-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="header-container">
                <div className="header-row">
                    <Header />
                    <SearchBar search={search} onSearchChange={setSearch} />

                    <div className="user-menu-wrapper" ref={menuRef} style={{ position: 'relative' }}>
                        <FaUserCircle
                            size={32}
                            color="#e7e7e7"
                            cursor="pointer"
                            onClick={() => setShowUserMenu(!showUserMenu)} 
                        />

                        {showUserMenu && (
                            <div className="user-dropdown">
                                <ul>
                                    <li onClick={() => alert('Perfil em desenvolvimento')}>Meu Perfil</li>
                                    <li onClick={() => alert('Configurações em desenvolvimento')}>Configurações</li>
                                    <hr />
                                    <li onClick={logout} className="logout-option">Sair</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} onNavigate={setActiveSection} />

            <main className="main-content">
                {loading ? (
                    <div className="loading-container">Carregando tópicos...</div>
                ) : selectedTopic ? (
                    <TopicDetails
                        topic={selectedTopic}
                        onBack={() => setSelectedTopic(null)}
                    />
                ) : (search.trim() !== '' || activeSection === 'Tópicos') ? (
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
                    <>
                        <section className="welcome-section">
                            <h1>Bem-vindo</h1>
                            <p>Aprenda Java de forma prática e direta. Explore tópicos, veja exemplos de código e teste suas habilidades.</p>
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
                            <p>Comece agora! Pesquise um tópico na barra acima e veja exemplos práticos de Java.</p>
                        </section>
                    </>
                )}
            </main>
        </div>
    );
};
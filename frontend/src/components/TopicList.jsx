// Componente que exibe uma lista de tópicos pesquisáveis
// Props:
//   - topics: array de objetos tópico a renderizar
//   - onTopicClick: callback executado quando um tópico é clicado
const TopicList = ({ topics, onTopicClick }) => {
    return (
        <div className="search-results-container">
            {topics.length > 0 ? (
                // Renderiza cada tópico como um card clicável
                topics.map((topic) => (
                    <div 
                        key={topic.id} 
                        className="search-result-card" 
                        // Chama a função callback ao clicar no tópico
                        onClick={() => onTopicClick(topic)}
                    >
                        {/* Container com informações do tópico */}
                        <div className="result-info">
                            <span className={`result-category tag-${topic.category.toLowerCase()}`}>
                                {topic.category}
                            </span>
                            <h3 className="result-title">{topic.title}</h3>
                        </div>
                        <div className="result-arrow">→</div>
                    </div>
                ))
            ) : (
                <p>Nenhum tópico encontrado.</p>
            )}
        </div>
    );
};

export default TopicList;
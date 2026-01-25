const TopicList = ({ topics, onTopicClick }) => {
    return (
        <div className="search-results-container">
            {topics.length > 0 ? (
                topics.map((topic) => (

                    <div key={topic.id} className="search-result-card" onClick={() => onTopicClick(topic)}>

                        <div className="result-info">
                            <span className="result-category">{topic.category}</span>
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
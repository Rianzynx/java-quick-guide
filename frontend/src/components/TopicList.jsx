const TopicList = ({ topics }) => {
  return (
    <div className="search-results-container">
      {topics.map((topic) => (
        <div key={topic.id} className="search-result-card">
          <div className="result-info">
            <h3 className="result-title">{topic.title}<span className="result-category">{topic.category}</span></h3>
            <p className="result-description">{topic.description}</p>
          </div>
          <div className="result-arrow">→</div>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
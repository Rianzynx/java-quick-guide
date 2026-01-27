import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TopicDetails = ({ topic, onBack }) => {
  if (!topic) return null;

  return (
    <div className="topic-detail-container">
      <button className="back-button" onClick={onBack}>
        ← Voltar
      </button>

      <div className="detail-header">
        <span className={`category-tag tag-${topic.category.toLowerCase()}`}>
          {topic.category}
        </span>
        <h1>{topic.title}</h1>
      </div>

      <div className="detail-content">
        <p>{topic.description}</p>

        <div className="use-case-box">
          <strong>Quando usar:</strong>
          <p>{topic.useCase}</p>
        </div>

        <div className="code-section">
          <SyntaxHighlighter
            language="java"
            style={vscDarkPlus}
            customStyle={{
              backgroundColor: '#1a1a1a',
              padding: '20px',
              borderRadius: '8px',
              borderLeft: '4px solid #f59e0b',
              fontSize: '14px',
              lineHeight: '1.5',
              marginBottom: '40px'
            }}
          >
            {topic.code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default TopicDetails;
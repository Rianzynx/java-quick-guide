import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

function SearchBar({ search, onSearchChange }) {
  const [displayValue, setDisplayValue] = useState(search);

  // Debounce: Só envia a busca após o usuário parar de digitar por 300ms
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(displayValue);
    }, 300);

    return () => clearTimeout(handler);
  }, [displayValue, onSearchChange]);

  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Buscar tópico..."
        value={displayValue}
        onChange={(e) => setDisplayValue(e.target.value)}
      />
      
      {displayValue && (
        <FaTimes 
          className="clear-icon" 
          onClick={() => {
            setDisplayValue('');
            onSearchChange('');
          }} 
        />
      )}
    </div>
  );
}
export default SearchBar;
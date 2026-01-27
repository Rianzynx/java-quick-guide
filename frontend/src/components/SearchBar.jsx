import { FaTimes } from 'react-icons/fa';

function SearchBar({ search, onSearchChange }) {
  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Buscar tópico (ex: LocalDate, Enum, Stream...)"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      
      {search && (
        <FaTimes 
          className="clear-icon" 
          onClick={() => onSearchChange('')} 
        />
      )}
    </div>
  );
}

export default SearchBar;
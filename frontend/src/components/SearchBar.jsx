function SearchBar({ search, onSearchChange }) {
    return (
        <input
      type="text"
      placeholder="Buscar tópico (ex: LocalDate, Enum, Stream...)"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
    )
}

export default SearchBar;
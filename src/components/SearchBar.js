function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Rechercher une recette..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;

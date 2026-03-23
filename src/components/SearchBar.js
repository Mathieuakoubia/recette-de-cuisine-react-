import './SearchBar.css';


function SearchBar({ value, onChange }) {
  return (
    <input
      className="SearchBar"
      type="text"
      placeholder="Rechercher une recette..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;

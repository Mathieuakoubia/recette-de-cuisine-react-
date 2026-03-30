import './SearchBar.css';


function SearchBar({ value, onChange }) {
  return (
    <input
      className="SearchBar"
      type="text"
      placeholder="Rechercher une recette..."
      value={value} //props qui fait réference au contenu du champs
      onChange={(event) => onChange(event.target.value)} //props qui recupere evenement "e" quandon écrit dans la barre de recherche 
    />
  );
}

export default SearchBar;

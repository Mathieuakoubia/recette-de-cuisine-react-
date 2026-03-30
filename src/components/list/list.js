import { useState, useEffect } from "react";
import Card from "../Cards/Card";
import SearchBar from "../SearchBar/SearchBar";
import './list.css';

function RecipeList() {

    //tout les variables dont on a besoin 
  const [meals, setMeals] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [search, setSearch] = useState("bonjour");

  useEffect(() => {
    setIsloading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a") // requete vers l'api
      .then((r) => r.json()) // on transforme la response en json 
      .then((data) => { 
        setMeals(data.meals);
        setIsloading(false);
      })
      .catch((err) => {
        setError(err.message); // si le fetch ne focntionne pas il faut afficher le message d'erreur 
        setIsloading(false);
      });
  }, []);

  if (isLoading) return <p>Chargement...</p>; // si le isloading est "true" il faut affichier "chargement" et ne pas poursuive le code 
  if (error) return <p>Erreur : {error}</p>;// si il ya une erreur afficher le message d'erreur 


  // filtrer parmis les repas 
  const filteredMeals = meals?.filter((meal) => 
    meal.strMeal.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      {filteredMeals?.length === 0 && <p>Aucun résultat trouvé.</p>}
      <ul className="recipe-grid">
        {filteredMeals?.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;

import { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

function RecipeList() {
  const [meals, setMeals] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsloading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((r) => r.json())
      .then((data) => {
        setMeals(data.meals);
        setIsloading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsloading(false);
      });
  }, []);

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  const filteredMeals = meals?.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      {filteredMeals?.length === 0 && <p>Aucun résultat trouvé.</p>}
      <ul>
        {filteredMeals?.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;

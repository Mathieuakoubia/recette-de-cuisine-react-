import './Card.css';

function Card({ meal }) {
  return (
    <li className="card">
      <h3>{meal.strMeal}</h3>
      <p>Catégorie : {meal.strCategory}</p>
      <p>Origine : {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </li>
  );
}

export default Card;

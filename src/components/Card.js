import './Card.css';

function Card({ meal }) {
  return (
    <li className="card">
      <h3>{meal.strMeal}</h3>
      <p>Catégorie : {meal.strCategory}</p>
      <p>Origine : {meal.strArea}</p>
    </li>
  );
}

export default Card;

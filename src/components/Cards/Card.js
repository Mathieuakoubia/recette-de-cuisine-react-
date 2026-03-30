import './Card.css';

function Card({ meal }) {
  return (
    <li className="card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="card-body">
        <h3>{meal.strMeal}</h3>
        <p className="card-meta">{meal.strCategory} · {meal.strArea}</p>
        <p className="card-instructions">{meal.strInstructions}</p>
      </div>
    </li>
  );
}

export default Card;

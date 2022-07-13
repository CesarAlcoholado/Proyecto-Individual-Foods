import { Link } from "react-router-dom";

export default function RecipeCard({ image, name, id }) {
  return (
    <div>
      <Link to={`/recipes/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt="recipe" />
    </div>
  );
}

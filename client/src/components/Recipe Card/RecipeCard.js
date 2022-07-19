import { Link } from "react-router-dom";
import "../../styleSheets/RecipeCard.css"

export default function RecipeCard({ image, name, id, diet_type }) {
  return (
    <div className="cards">
      <Link className="linkname" to={`/recipes/${id}`}>
        <h2>{name}</h2>
      </Link>
      <div>
      <img className="image" src={image} alt="recipe" />
      </div>
      <div className="diets">
        {diet_type?.map((d) => {
          return (
            <h5 className="dieth">
              {d}
            </h5>
          );
        })
        
        }
      </div>
    </div>
  );
}

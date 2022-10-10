import { Link } from "react-router-dom";
import styles from "../../styleSheets/RecipeCard.module.css";

export default function RecipeCard({ image, name, id, diet_type }) {
  return (
    <div className={styles.cards}>
      <Link className={styles.linkname} to={`/recipes/${id}`}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt="recipe" />
        </div>
        <div className={styles.recipeInfo}>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.diets}>
            {diet_type?.map((d) => {
              return <h5 className={styles.dieth}>{d}</h5>;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}

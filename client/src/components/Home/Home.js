import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../actions/index.js";
import { Paginacion } from "../Paginacion/Paginacion.js";
import { Link } from "react-router-dom";
import RecipeCard from "../Recipe Card/RecipeCard.js";
import Nav from "../Nav/Nav.js";
import Order from "../Order/Order";
import styles from "../../styleSheets/Home.module.css";
import filter from "../../media/filterbutton.png";
import menu from "../../media/list.png";

export default function Recipes() {
  let recipes = useSelector((state) => state.recipesLoaded);
  let dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const max = Math.ceil(recipes.length / perPage);
  const [display, setDisplay] = useState(false);

  function setView() {
    setDisplay(!display);
  }

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

  return (
    <div className={styles.Home}>
      <div className={styles.Nav}>
        <Nav setPage={setPage} />
        <input type="checkbox" id={styles["check"]} />
        <label htmlFor={styles["check"]} className={styles.menu}>
          <img className={styles.burguer} src={menu} alt="app logo" />
        </label>
        <ul className={styles.menuItems}>
          <li className={styles.li}>
            <Link className={styles.linknav} to="/post">
              <div className={styles.NavButton}>Create Recipe</div>
            </Link>
          </li>
          <li className={styles.li}>
            <Order />
          </li>
        </ul>
      </div>
      <div className={styles.orderIcon}>
        <button className={styles.filterButton} onClick={setView}>
          Filter
          <img className={styles.filtericon} src={filter} alt="filter-icon" />
        </button>
        {display ? <Order /> : ""}
      </div>
      <div className={styles.recipes}>
        {recipes
          .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          .map((r) => {
            return (
              <RecipeCard
                name={r.name}
                image={
                  r.image
                    ? r.image
                    : "https://media.istockphoto.com/photos/culinary-background-with-spices-and-recipe-book-picture-id607299402?b=1&k=20&m=607299402&s=612x612&w=0&h=VWEfmWEwxgzIgiFrztEbq73g4t-bCnWj4G9OFPQY054="
                }
                id={r.id}
                diet_type={
                  r.diet_type ? r.diet_type : r.diets.map((d) => d.name)
                }
              />
            );
          })}
      </div>
      <div className={styles.Paginado}>
        <Paginacion page={page} setPage={setPage} max={max} />
      </div>
    </div>
  );
}

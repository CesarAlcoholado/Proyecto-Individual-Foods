import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../actions/index.js";
import { Paginacion } from "../Paginacion/Paginacion.js";
import { Link } from "react-router-dom";
import RecipeCard from "../Recipe Card/RecipeCard.js";
import Nav from "../Nav/Nav.js";
import Order from "../Order/Order.js";
import styles from "../../styleSheets/Home.module.css";
import filter from "../../media/filterbutton.png";
import menu from "../../media/list.png";
import default_image from "../../media/default_image.jpg";

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
        {recipes.length ? (
          recipes
            .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
            .map((r) => {
              return (
                <RecipeCard
                  name={r.name}
                  image={r.image ? r.image : { default_image }}
                  id={r.id}
                  diet_type={
                    r.diet_type ? r.diet_type : r.diets.map((d) => d.name)
                  }
                />
              );
            })
        ) : (
          <span className={styles.loader}></span>
        )}
      </div>
      <div className={styles.Paginado}>
        <Paginacion page={page} setPage={setPage} max={max} />
      </div>
    </div>
  );
}

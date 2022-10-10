import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../actions";
import SearchBar from "../SearchBar/SearchBar";
import receta from "../../media/home.png";
import styles from "../../styleSheets/Nav.module.css";

export default function NavBar({ setPage }) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(getAllRecipes());
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.NavBarButtons}>
        <Link className={styles.linknav} exact to="/home" onClick={onClick}>
          <img className={styles.logo} src={receta} alt="app logo" />
        </Link>
        
      </div>
      <div className={styles.SearchAdd}>
        <SearchBar setPage={setPage} />
        <Link className={styles.linknav} to="/post">
          <div className={styles.NavButton}>Create Recipe</div>
        </Link>
      </div>
    </nav>
  );
}

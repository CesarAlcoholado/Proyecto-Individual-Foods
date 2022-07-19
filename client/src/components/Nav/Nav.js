import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../actions";
import SearchBar from "../SearchBar/SearchBar";
import "../../styleSheets/Nav.css";

export default function NavBar() {

  const dispatch = useDispatch();
  
  function onClick(){
    dispatch(getAllRecipes());
  }

  return (
    <nav className="nav">
      <div className="links">
        <Link className="linkhome" exact to="/home" onClick={onClick}>Home</Link>
        <Link className="linkrecipe" to="/post">Create Recipe</Link>
      </div>
      <SearchBar />
    </nav>
  );
}

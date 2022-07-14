import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../actions";
import Order from "../Order/Order";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {

  const dispatch = useDispatch();
  
  function onClick(){
    dispatch(getAllRecipes());
  }

  return (
    <nav >
      <SearchBar/>
      <Order/>
      <ul>
        <li>
          <NavLink exact to="/home" onClick={onClick}>
            Home
          </NavLink>
          <NavLink to="/post">
            Create Recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

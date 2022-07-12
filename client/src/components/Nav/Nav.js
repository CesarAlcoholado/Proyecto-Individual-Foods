import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav >
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/create">
            Create Recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

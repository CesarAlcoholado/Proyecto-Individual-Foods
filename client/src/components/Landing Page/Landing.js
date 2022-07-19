import React from 'react';
import { Link } from "react-router-dom";
import "../../styleSheets/Landing.css";

export default function Landing() {
  return (
    <div className='Landing'>
      <h1 className='Message'>Looking for a new recipe?</h1>
      <Link className="LinkHome"to="/home">
      <button className='WButton'>Let's find it!</button>
      </Link>
    </div>
  )
}

import React from 'react';
import { Link } from "react-router-dom";
import styles from "../../styleSheets/Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.Landing}>
      <h1 className={styles.Message}>Looking for a new recipe?</h1>
      <Link className={styles.LinkHome} to="/home">
      <button className={styles.WButton} >Let's find it!</button>
      </Link>
    </div>
  )
}

import { useDispatch } from "react-redux";
import { useState } from "react";
import { sort, typeFilter, sortByScore } from "../../actions";
import styles from "../../styleSheets/Order.module.css";
const ASCENDENTE = "ASCENDENTE";
const DESCENDENTE = "DESCENDENTE";

export default function Order() {
  const dispatch = useDispatch();
  const [choice, setChoice] = useState();
  const [choiceName, setChoiceName] = useState();
  const [choiceScore, setChoiceScore] = useState();

  function onSelectChange(e) {
    dispatch(sort(e.target.value));
    setChoiceName("default");
  }

  function filterType(e) {
    dispatch(typeFilter(e.target.value));
    setChoice("default");
  }

  function onSelectHealthscore(e) {
    dispatch(sortByScore(e.target.value));
    setChoiceScore("default");
  }

  return (
    <div className={styles.selects}>
      <select
        className={styles.Selector}
        value={choiceName}
        name="select"
        defaultValue={"default"}
        onChange={onSelectChange}
      >
        <option value={"default"} disabled>
          order by name
        </option>
        <option value={ASCENDENTE}>ascendente</option>
        <option value={DESCENDENTE}>descendente</option>
      </select>

      <select
        className={styles.Selector}
        value={choice}
        name="select"
        defaultValue={"default"}
        onChange={filterType}
      >
        <option value={"default"} disabled>
          order by diet
        </option>
        <option value="GLUTEN FREE">gluten free</option>
        <option value="DAIRY FREE">dairy free</option>
        <option value="LACTO OVO VEGETARIAN">lacto ovo vegetarian</option>
        <option value="VEGAN">vegan</option>
        <option value="VEGETARIAN">vegetarian</option>
        <option value="WHOLE 30">whole 30</option>
        <option value="PALEOLITHIC">paleolithic</option>
        <option value="PRIMAL">primal</option>
        <option value="PESCATARIAN">pescatarian</option>
        <option value="KETOGENIC">ketogenic</option>
        <option value="FODMAP FRIENDLY">fodmap friendly</option>
      </select>

      <select
        className={styles.Selector}
        value={choiceScore}
        name="select"
        defaultValue={"default"}
        onChange={onSelectHealthscore}
      >
        <option value={"default"} disabled>
          order by score
        </option>
        <option value={ASCENDENTE}>ascendente</option>
        <option value={DESCENDENTE}>descendente</option>
      </select>
    </div>
  );
}

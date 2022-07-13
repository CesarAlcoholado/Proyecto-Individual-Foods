import { useDispatch } from "react-redux";
import { useState } from "react";
import { sort, typeFilter } from "../../actions";
const ASCENDENTE = "ASCENDENTE";
const DESCENDENTE = "DESCENDENTE";


export default function Order (){

  const dispatch = useDispatch();
  const [choice, setChoice] = useState();
  
  function onSelectChange (e){
    dispatch(sort(e.target.value))
  }

  function filterType (e){
    dispatch(typeFilter(e.target.value));
    setChoice("default")
  }

  return (
    <>
      <select name="select" onChange={onSelectChange}>
        <option value={ASCENDENTE}>ascendente</option>
        <option value={DESCENDENTE}>descendente</option>
      </select>
      <select value={choice} name="select" defaultValue={"default"} onChange={filterType}>
        <option value={"default"} disabled>selecciona una opción</option>
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
    </>
  );
}
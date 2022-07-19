import {useState} from 'react';
import { getRecipes } from '../../actions/index.js';
import { useDispatch } from 'react-redux';
import "../../styleSheets/SearchBar.css";

export default function SearchBar(){
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  function onSubmit(e){
    e.preventDefault();
      dispatch(getRecipes(search));
  }

  function inputChange(e){
    e.preventDefault();
    setSearch(e.target.value)
  }

  return <div>
    <form onSubmit={onSubmit}>
      <input className='Input-Search' type='text' onChange={inputChange} value={search} placeholder="Search Recipe" />
      <input className="SearchButton" type='submit' value='Buscar'/>
    </form>
  </div>
}
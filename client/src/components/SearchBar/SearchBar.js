import {useState} from 'react';
import { getRecipes } from '../../actions/index.js';
import { useDispatch } from 'react-redux';

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
      <input type='text' onChange={inputChange} value={search}/>
      <input type='submit' value='Buscar'/>
    </form>
  </div>
}
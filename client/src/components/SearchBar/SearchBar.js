// import {useState} from 'react';
// import { getRecipes } from '../../actions/index.js';
// import { useDispatch } from 'react-redux';
// import "../../styleSheets/SearchBar.css";

// export default function SearchBar(){
//   const [search, setSearch] = useState('');
//   const dispatch = useDispatch();

//   function onSubmit(e){
//     e.preventDefault();
//       dispatch(getRecipes(search));
//   }

//   function inputChange(e){
//     e.preventDefault();
//     setSearch(e.target.value)
//   }

//   return <div>
//     <form onSubmit={onSubmit}>
//       <input className='Input-Search' type='text' onChange={inputChange} value={search} placeholder="Search Recipe" />
//       <input className="SearchButton" type='submit' value='Buscar'/>
//     </form>
//   </div>
// }



import React,{Component} from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../../actions/index.js';
import "../../styleSheets/SearchBar.css";

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      search: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e){
    e.preventDefault();
    this.setState({...this.state.search, search: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    this.props.getRecipes(this.state.search)
  }

  render(){
    return(
      <form onSubmit={(e)=> this.onSubmit(e)}>
      <input className='Input-Search' type='text' onChange={this.inputChange} value={this.state.search} placeholder="Search Recipe" />
      <input className="SearchButton" type='submit' value='Buscar'/>
    </form>
    )
  }
}

export default connect(null, { getRecipes })(SearchBar)


import React,{Component} from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../../actions/index.js';
import styles from "../../styleSheets/SearchBar.module.css";

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
    this.props.getRecipes(this.state.search);
    this.props.setPage(1)
  }

  render(){
    return(
      <form onSubmit={(e)=> this.onSubmit(e)}>
      <input className={styles.InputSearch} type='text' onChange={this.inputChange} value={this.state.search} placeholder="Search Recipe" />
      <input className={styles.SearchButton} type='submit' value='Buscar'/>
    </form>
    )
  }
}

export default connect(null, { getRecipes })(SearchBar)


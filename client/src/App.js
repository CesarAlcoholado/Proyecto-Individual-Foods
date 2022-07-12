import './App.css';
import { Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;

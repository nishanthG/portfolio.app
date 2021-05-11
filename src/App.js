import { Component } from 'react';
import './App.css';
import PortfolioApp from './portfolio/PortfolioApp';

class App extends Component{
  render(){
    return(
      <div className="App">
        <PortfolioApp/>
      </div>
    )
  }
}

export default App
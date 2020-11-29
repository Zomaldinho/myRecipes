import React, { Component } from 'react';
import './App.css';
import Recipes from './components/recipes/recipes';
import OneRecipe from './components/oneRecipe/oneRecipe';


class App extends Component {
  constructor(){
    super()
    this.state={
      route: '',
      handeledReipeId: null
    }
  }
  Routing = (route) => {
    this.setState({ route: route });
  };
  handeldRecipe = (id) => {
    this.setState({ handeledReipeId: id });
  };

  render(){
    return (
      <div className="App container">
        <h1>Hello</h1>
        {this.state.route === 'one' ? (
          <OneRecipe routeChange={this.Routing} id={this.state.handeledReipeId} />
        ) : (
          <Recipes routeChange={this.Routing} handeldRecipe={this.handeldRecipe} />
        )}
      </div>
    );
  }
}

export default App;

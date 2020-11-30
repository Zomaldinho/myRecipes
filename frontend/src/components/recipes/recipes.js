import React, { Component } from 'react';

class Recipes extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }
  // componentDidUpdate(){
  //   fetch('http://localhost:5000/')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ data }));
  // }

  showOne(i){
    this.props.handeldRecipe(i)
    this.props.routeChange('one')
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="d-flex flex-wrap">
        {this.state.data.map((recipe, i) => {
          return (
            <div className="card m-3" style={{width: '18rem'}}>
              <img
                className="card-img-top"
                src={'http://localhost:5000/' + recipe.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.ingredients}</p>
                <p className="card-text">{recipe.recipe}</p>
                <button onClick={()=>this.showOne(recipe._id)} className="btn btn-primary">
                  More Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Recipes;

import React, { Component } from 'react';

class OneRecipe extends Component {
  constructor(props) {
    super();
    this.state = {
      recipe: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/recipe/${this.props.id}`)
      .then((response) => response.json())
      .then((recipe) => this.setState({ recipe }));
  }
  delete = () => {
    let confirm = window.confirm('Are you sure you want to delete this recipe?');
    if (confirm) {
      console.log(this.props.id)
      fetch(`http://localhost:5000/delete/${this.props.id}`, {
        method: 'delete',
      }).then(setTimeout(()=>{},2000))
        .then(this.props.routeChange('recipes'))
        .catch((err) => console.log(err));
    }
  };
  render() {
    let { recipe } = this.state;
    return (
      <div>
        <div className="card mb-3">
          <img
            className="card-img-top"
            src={'http://localhost:5000/' + recipe.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">{recipe.recipe}</p>
            <p className="card-text">
              <small className="text-muted">{recipe.ingredients}</small>
            </p>
          <button className="btn btn-primary m-3">Edit</button>
          <button className="btn btn-primary m-3" onClick={()=>this.delete()}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OneRecipe;
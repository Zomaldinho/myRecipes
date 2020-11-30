import React, { Component } from 'react';

class NewRecipe extends Component {
  constructor(props) {
    super();
    this.state={
      title: '',
      ingredients: '',
      recipe: '',
      image: null
    }
  }

  onSubmit=()=>{
    let data = new FormData
    data.append('file', this.state.image)
    console.log(this.state)
    console.log(data)
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Title</label>
            <input
              name="title"
              className="form-control"
              onChange={(txt) => this.setState({title: txt.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Ingredients</label>
            <input
              name="ingredients"
              className="form-control"
              onChange={(txt) => this.setState({ingredients: txt.target.value})}
            />
          </div>
          <div className="form-group">
            <label>recipe</label>
            <input
              name="recipe"
              className="form-control"
              onChange={(txt) => this.setState({recipe: txt.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              name="image"
              className="form-control"
              type="file"
              onChange={(event) => this.setState({image: event.target.files[0]})}
            />
          </div>

          <button
            type="button"
            onClick={() => this.onSubmit()}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewRecipe;

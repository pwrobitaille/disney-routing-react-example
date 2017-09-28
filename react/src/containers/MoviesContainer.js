import React, { Component } from 'react';
import MoviesIndex from '../components/MoviesIndex'
import FormContainer from './FormContainer'
import ShowContainer from './ShowContainer'



class MoviesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
    this.addNewMovie = this.addNewMovie.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:4567/api/v1/movies')
    .then(response => response.json())
    .then(body => {
      // let selectedMovies = allMovies.filter(movie => {
      //   return movie.release_year < 1960

      this.setState({movies: body.movies})
      })
  }

  addNewMovie(formPayLoad){
    fetch('/api/v1/movies', {
      method: 'POST',
      body: JSON.stringify(formPayLoad)
    })
    .then(response => response.json())
    .then(body => {
      let newMoviesArray = this.state.movies.concat(body)
      this.setState({movies: newMoviesArray})
    })
  }

  render() {
    let handleSubmit = (formPayLoad) => {

      this.addNewMovie(formPayLoad)
    }
    return(
      <div className="container">
        <h1>My Favorite Disney Movies</h1>
        <hr />
        <MoviesIndex
          movies={this.state.movies}
        />
        <FormContainer
          handleSubmit={handleSubmit}
        />
        <ShowContainer
          
        />
      </div>
    )
  }
}

export default MoviesContainer;

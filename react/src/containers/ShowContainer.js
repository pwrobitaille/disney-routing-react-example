import React, { Component } from 'react'
import Movie from '../components/Movie'

class ShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
    }
  }

  componentDidMount() {
    let itemId = document.getElementById('show').dataset.id
    console.log(itemId)

    fetch(`http://localhost:4567/api/v1/movies/${itemId}`)
    .then(response => { return response.json() })
    .then(data => {
      this.setState({ body: data.body }) })
;
  }

  render() {
    console.log("test");
    return(
      <div>
        <Movie
          movie={this.state.body}
        />
      </div>
    )
  }
}

export default ShowContainer

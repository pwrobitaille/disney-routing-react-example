import React, {Component} from 'react'
import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: '',
      movieReleaseYear: '',
      movieRunTime: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name

    this.setState({ [name]: value})
  }

  handleClearForm() {
    this.setState({
      movieTitle: '',
      movieReleaseYear: '',
      movieRunTime: '',
      errorMessage: ''
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let formPayLoad = {
      title: this.state.movieTitle,
      release_year: parseInt(this.state.movieReleaseYear, 10),
      runtime: parseInt(this.state.movieRunTime, 10)
    }
    if (this.state.movieTitle=== '' || this.state.movieReleaseYear=== '' || this.state.movieRunTime=== '') {
      this.setState({errorMessage: "Please enter all fields"})
      } else {
      this.props.handleSubmit(formPayLoad)
      this.handleClearForm()
    }
  }



  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <TextInputField
          label='Movie Title'
          value={this.state.movieTitle}
          name='movieTitle'
          handleChange={this.handleChange}
        />
        <TextInputField
          label='Movie Release Year'
          value={this.state.movieReleaseYear}
          name='movieReleaseYear'
          handleChange={this.handleChange}
        />
        <TextInputField
          label='Movie Run Time'
          value={this.state.movieRunTime}
          name='movieRunTime'
          handleChange={this.handleChange}
        />
        <input type='submit' value='Submit' />
        <p>
          <h1>{this.state.errorMessage}</h1>
        </p>
      </form>

    )

  }
}

export default FormContainer

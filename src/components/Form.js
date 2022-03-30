import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    name: '',
    URL: '',
  }
  state = this.initialState

  handleChange = (event) => {
    /*
        TODO - Logic for changing state based on form changes
    */
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
      TODO - Logic for calling props to handle submission and setting state changes
    */
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, URL } = this.state
    return (
      <form>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <label htmlFor='name'>Enter name:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor='url'>Enter URL:</label>
        <input
          type='url'
          name='URL'
          id='url'
          value={URL}
          placeholder='https://google.com'
          pattern='https://.*'
          size='30'
          onChange={this.handleChange}
          required
        />
        <input type='button' value='Submit' onClick={this.onFormSubmit} />
      </form>
    )
  }
}

export default Form

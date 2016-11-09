import React, { Component } from 'react';
import '../App.css';
import Quiz from './Quiz';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      quizzes: []
    }
  }

  componentWillMount() {
    this.getQuizzes()
  }

  getQuizzes() {
    axios.get('/quizzes', {})
      .then((response) => {
        this.setState({ quizzes: response.data.quizzes })
      })
      .catch(() => {
        console.log('request failed')
      })
  }

  render() {
    return (
      <div className="App">
        <Quiz
          quizzes={this.state.quizzes}
        />
      </div>
    )
  }
}

export default App;

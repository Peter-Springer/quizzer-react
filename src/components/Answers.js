import React, { Component } from 'react';

class Answers extends Component {
  constructor() {
    super()
    this.loadAnswers = this.loadAnswers.bind(this)
  }

  loadAnswers() {
    return this.props.answers.map((answer, index) => {
      return(
        <div key={index}>
          <h5>{answer.title}</h5>
        </div>
      )
    })
  }

  render() {
    return(
      <div className="question-answers">
        {this.loadAnswers()}
      </div>
    )
  }
}

export default Answers

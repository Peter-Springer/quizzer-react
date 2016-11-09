import React, { Component } from 'react'
import Answers from './Answers'

class Questions extends Component {
  constructor() {
    super()
    this.loadQuestions = this.loadQuestions.bind(this)
  }

  loadQuestions() {
    return this.props.questions.map(question => {
      return(
        <article
          className='question-header'
          key={question.id}>
          <h3>{question.title}</h3>
          <Answers answers={question.answers} />
        </article>
      )
    })
  }

  render() {
    return (
      <div>
        {this.loadQuestions()}
      </div>
    );
  }
}

export default Questions;

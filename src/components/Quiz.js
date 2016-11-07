import React, { Component } from 'react';
import axios from 'axios';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      questions: [],
    };
  }

  componentDidMount() {
    axios.get('/quizzes', {
    })
    .then((response) => {
      this.setState({
        quizzes: response.data.quizzes,
        questions: response.data.quizzes[0].questions,
      });
    })
    .catch(function () {
      console.log('request failed');
    });
   }

  renderQuizTitleToPage(state) {
    return state.map(q => <article className='quiz-title' key={q.id}>
                          <h1>{q.title}</h1>
                        </article>)
  }

  renderQuestionsToPage(state) {
    return state.map(q => <article className='question-answers' key={q.id}>
                            <h3 className='question-header'>
                              {q.title}
                            </h3>
                            {q.answers.map((q, i) =>
                            <p key={i}>☐{q.title}</p>
                            )}
                          </article>)
  }

  render() {
    return (
      <div className='questions-container'>
      <section>{this.renderQuizTitleToPage(this.state.quizzes)}</section>
      <section>{this.renderQuestionsToPage(this.state.questions)}</section>
      </div>
    );
  }
}

export default Quiz;

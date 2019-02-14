import React, { Component } from 'react';

import TriviaList from './TriviaList.js';
import Controls from './Controls.js'

export default class App extends Component {
  constructor () {
    super();

    this.state = {
      triviaQuestions: [],
      selectedLimit: 5
    }

    this.setLimit = this.setLimit.bind(this);
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10')
      .then(response => response.json())
      .then(questions => {
        this.setState({
          triviaQuestions: questions.results
        })
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  setLimit(limit) {
    this.setState({
      selectedLimit: limit
    })
  }

  render () {
    return (
      <div>
        <h1>Trivia!</h1>
        <Controls setLimit={this.setLimit} />
        <TriviaList 
          triviaQuestions={this.state.triviaQuestions}
          questionCount={this.state.selectedLimit} />
      </div>
    )
  }
}
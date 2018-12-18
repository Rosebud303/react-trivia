import React, { Component } from 'react';

import { triviaQuestions, categories } from './api.js';
import TriviaList from './TriviaList.js';
import Controls from './Controls.js'

export default class App extends Component {
  constructor () {
    super();

    this.state = {
      triviaQuestions: triviaQuestions,
      selectedLimit: 5
    }

    this.setLimit = this.setLimit.bind(this);
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
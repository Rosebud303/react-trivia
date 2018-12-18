import React, { Component } from 'react';

import { triviaQuestions, categories } from './api.js';
import TriviaList from './TriviaList.js'
//import Controls Component Here

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      //set TriviaQuestions in state
      //initialize selectedQuestionLimit to value of 5 (to show 5 questions)
    }
    // this.setLimit = this.setLimit.bind(this);
  }

  //method `setLimit`
    // updates state for Question Limit to
    // new limit passed in as parameter

  render () {
    return (
      <div>
        <h1>Trivia!</h1>
        {/*Add Controls Component, make sure pass down necessary props*/}
        {/*Add your TriviaList Component to pass down your questions*/}
      </div>
    )
  }
}
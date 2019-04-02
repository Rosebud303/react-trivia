import React, { Component } from 'react';

export default class Question extends Component {
  constructor() {
    super();
  // initialize state = showAnswer (whether to show trivia answer-default to false)
  }
  

  // Method `toggleAnswer`
  // toggles the state to show/hide answer

  render() {
    let icon = ' + ';

    //**Bonus**
    //Create a conditional that changes our icon from 
    // `+` to `-` based on whether we are showing the answer

    return (
      <li onClick={this.toggleAnswer}>
        <p>
          {icon}
          {/*dispay title of question here*/}
          {
            //Add conditional rendering
            //If showAnswer is true && there is a correct answer, display the answer
          }
        </p>
      </li>
    );
  }
}
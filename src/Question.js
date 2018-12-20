import React, {Component} from 'react';

export default class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false
    }
    
    this.toggleAnswer = this.toggleAnswer.bind(this);
  }
  
  toggleAnswer() {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }

  render() {
    let icon = ' + ';

    if(this.state.showAnswer) {
      icon = ' - ';
    }

    return (
      <li onClick={this.toggleAnswer}>
        <p>
          {icon}
          {this.props.question.title}
          {
            this.state.showAnswer && 
            <span>{this.props.question.correct_answer}</span>
          }
        </p>
      </li>
    );
  }
}
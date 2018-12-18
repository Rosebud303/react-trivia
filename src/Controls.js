import React, {Component} from 'react';

export default class Controls extends Component {
  constructor() {
    super();

    this.state = {
      questionCount: 0
    }

    this.updateCount = this.updateCount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateCount(e){
    this.setState({
      questionCount: parseInt(e.target.value)
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.props.setLimit(this.state.questionCount);
  }

  render() {
    return(
      <form>
        <input  type="number" 
                value={this.state.questionCount}
                onChange={this.updateCount} />
        <button onClick={this.handleClick}>FILTER QUESTIONS</button>
      </form>
    )
  }
}
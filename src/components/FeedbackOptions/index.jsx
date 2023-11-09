import { Component } from 'react';

export class FeedbackOptions extends Component {
  state = {
    good: 0,
    neytral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  handleFeedback = () => {
    // this.setState(prevState => {
    //   return {
    //     [options]: prevState[options] + 1,
    //   };
    // });
  };

  render() {
    return (
      <div>
        <span>Please leave feedback</span>
        <button type="button" onClick={this.handleFeedback}>
          Good
        </button>
        <button type="button" onClick={this.handleFeedback}>
          Neytral
        </button>
        <button type="button" onClick={this.handleFeedback}>
          Bad
        </button>
        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neytral: {this.state.neytral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

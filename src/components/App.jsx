import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState((state, props) => ({
//       value: state.value + props.step,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState((state, props) => ({
//       value: state.value - props.step,
//     }));
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>{this.state.value}</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }


class FeedbackOptions extends Component {
  state = {
    good: 0,
    neytral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  handleFeedback = () => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };


  render() {
    const { step } = this.props;

    return (
      <div>
        {/* <span>Please leave feedback</span> */}
        <button type="button" onClick={this.handleFeedback()}>
          Good
        </button>
        <button type="button" onClick={this.onLeaveFeedback()}>
          Neytral
        </button>
        <button type="button" onClick={this.onLeaveFeedback()}>
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

export const App = () => {
  return (
    <div>
      {/* <Counter step={5} /> */}
      {/* <Section title=""> */}
        <FeedbackOptions options={["good", "neytral", "bad"]} onLeaveFeedback={ } />
      {/* </Section> */}
    </div>
  );
};

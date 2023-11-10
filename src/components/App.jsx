// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { FeedbackOptions } from '../components/FeedbackOptions';
import { Component } from 'react';

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

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return;
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
        />
        <h3>Statistics</h3>
        <span>Good:{this.state.good}</span>
        <span>Neutral:{this.state.neutral}</span>
        <span>Bad:{this.state.bad}</span>
      </div>
    );
  }
}

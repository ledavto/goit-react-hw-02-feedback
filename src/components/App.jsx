// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { FeedbackOptions } from '../components/FeedbackOptions';

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

export const App = () => {
  return (
    <div>
      <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.handleFeedback}
      />
    </div>
  );
};

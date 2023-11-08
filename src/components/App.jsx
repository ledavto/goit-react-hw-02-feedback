import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

class Feedback extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neytral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  //   handleIncFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       [option]: prevState[option] + 1,
  //     };
  //   });
  // }

  handleIncGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };

  handleIncNeytral = () => {
    this.setState((state, props) => ({
      neytral: state.neytral + props.step,
    }));
  };
  handleIncBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>Please leave feedback</span>
        <button type="button" onClick={this.handleIncGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncNeytral}>
          Neytral
        </button>
        <button type="button" onClick={this.handleIncBad}>
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
      <Counter step={5} />
      <Feedback step={1} />
    </div>
  );
};

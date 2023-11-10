import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <h3>Please leave feedback</h3>
        {this.props.options.map(elem => (
          <button key={elem}> {elem}</button> //onClick={this.props.onLeaveFeedback(elem) }   onClick(()=>onLeaveFeedback(option))
        ))}
      </div>
    );
  }
}

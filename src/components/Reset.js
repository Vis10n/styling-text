import React, { Component } from 'react';

class Reset extends Component {
  
  onRsDefault = () => {
    this.props.onSetDefault(true);
  }
  
  render() {
    return (
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onRsDefault}>Default</button>
    );
  }
}

export default Reset;

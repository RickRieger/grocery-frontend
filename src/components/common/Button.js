import React, { Component } from 'react';

export class Button extends Component {
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.handleClickFunction()}
          className={this.props.className}
        >
          {this.props.buttonName}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;

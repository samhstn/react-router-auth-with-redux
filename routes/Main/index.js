import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <div>
        <h3>Navbar Here</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Main;

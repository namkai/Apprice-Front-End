import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <div id="zero">
        <Nav/>
            {/* <div className="container"> */}
                {this.props.children}
            {/* </div> */}
      </div>
    );
  }
}

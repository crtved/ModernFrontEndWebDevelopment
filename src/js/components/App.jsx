import React, { Component } from 'react';

class App extends Component {
  state = {
    intro: 'modern web dev',
  };
  render() {
    const { intro } = this.state;
    return <React.Fragment>{intro}</React.Fragment>;
  }
}

export default App;

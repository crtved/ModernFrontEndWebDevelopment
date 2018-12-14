import React, { Component } from 'react';

class App extends Component {
  state = {
    sub: `Let's talk about the`,
    title: 'Modern Web Dev',
  };
  render() {
    let { sub, title } = this.state;
    return (
      <React.Fragment>
        <p className='_init_sub'>{sub}</p>
        <h1 className='_init_title'>{title}</h1>
        <p className='_init_description'>
          I'm <span id='description' />
        </p>
        <a href='#best_practices' className='_init_button'>
          Let's Start
        </a>
      </React.Fragment>
    );
  }
}

export default App;

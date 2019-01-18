import React, { Component } from 'react';

class BuildTools extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id='build_tools' className='_init_build_tools _init_container'>
          <div className='_init_inner_build_tools container'>
            <p className='_init_title'>{this.props.title}</p>
            <div className='_init_build_side'>
              <img
                className='_init_terminal'
                src='./assets/images/Terminal.png'
                alt='terminal'
              />
            </div>
            <div className='_init_build_content'>
              <p>Gulp js</p>
              <p>Webpack</p>
              <p>Babel</p>
              <p>Node js</p>
              <p>Packages</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BuildTools;

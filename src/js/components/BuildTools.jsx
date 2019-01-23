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
              <a href='https://gulpjs.com/' target='_blank' rel='noopen'>
                Gulp js
              </a>
              <a href='https://webpack.js.org/' target='_blank' rel='noopen'>
                Webpack
              </a>
              <a href='https://babeljs.io/' target='_blank' rel='noopen'>
                Babel
              </a>
              <a href='https://nodejs.org/en/' target='_blank' rel='noopen'>
                Node js
              </a>
              <a href='' target='_blank' rel='noopen'>
                Packages
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BuildTools;

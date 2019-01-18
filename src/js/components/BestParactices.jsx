import React, { Component } from 'react';

class BestPractices extends Component {
  state = {
    video: './assets/images/coding.mp4',
    bp: [
      { name: 'GIT' },
      { name: 'Preprocessor | Transpiler' },
      { name: 'Semantic Markup' },
      { name: 'SEO' },
      { name: 'Google Analytics' },
      { name: 'SemVer' },
      { name: 'Mobile Responsiveness' },
      { name: 'Code Minification' },
      { name: 'Directory Structure' },
      { name: 'Descriptive Comments' },
    ],
  };
  render() {
    const bp = [...this.state.bp];
    return (
      <React.Fragment>
        <div
          id='best_practices'
          className='_init_best_practices _init_container'>
          <div className='_init_inner_best_practices container'>
            <p className='_init_title'>{this.props.title}</p>
            <div className='_init_best_practices_content'>
              {bp.map(bpitem => {
                return <p key={bpitem.name}>{bpitem.name}</p>;
              })}
            </div>
            <div className='_init_video_side'>
              <div className='_init_video_content'>
                <video src={this.state.video} autoPlay loop />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BestPractices;

import React, { Component } from 'react';

class BestPractices extends Component {
  state = {
    video: './assets/images/coding.mp4',
    bp: [
      { name: 'GIT', link: 'https://github.com/' },
      { name: 'Preprocessor', link: 'https://sass-lang.com/' },
      { name: 'Semantic Markup', link: 'https://html.com/semantic-markup/' },
      { name: 'SEO', link: 'https://moz.com/learn/seo/what-is-seo' },
      {
        name: 'Google Analytics',
        link: 'https://marketingplatform.google.com/about/analytics/',
      },
      { name: 'SemVer', link: 'https://semver.org/' },
      {
        name: 'Mobile Responsiveness',
        link: 'https://www.studiopress.com/beginners-guide-responsive-design/',
      },
      { name: 'Code Minification', link: 'http://minifycode.com/' },
      {
        name: 'Directory Structure',
        link:
          'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files',
      },
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
                return (
                  <a
                    key={bpitem.name}
                    href={bpitem.link}
                    target='_blank'
                    rel='noopen'>
                    {bpitem.name}
                  </a>
                );
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

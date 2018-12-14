import React, { Component } from 'react';

class BestPractices extends Component {
  state = {
    title: 'Best Practices',
    items: [
      { name: 'GIT' },
      { name: 'Preprocessor / Transpiler' },
      { name: 'Semantic Markup' },
      { name: 'SEO' },
      { name: 'Google Analytics' },
      { name: 'Semantic Versioning' },
      { name: 'Mobile Responsiveness' },
      { name: 'Code Optimization (Minify)' },
      { name: 'Directory Structure' },
      { name: 'Descriptive Comments' },
    ],
  };
  render() {
    let { title } = this.state;
    const items = [...this.state.items];
    return (
      <React.Fragment>
        <p className='_init_title'>{title}</p>
        <div className='_init_best_practices_content'>
          {items.map(i => (
            <p key={i.name}>{i.name}</p>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default BestPractices;

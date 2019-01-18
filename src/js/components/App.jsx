import React, { Component } from 'react';
import Header from './Header';
import BestPractices from './BestParactices';
import BuildTools from './BuildTools';
import Frameworks from './Frameworks';

class App extends Component {
  state = {
    stack: [
      {
        id: 'nav_intro',
        name: 'Introduction',
        link: '#introduction',
        active: true,
      },
      {
        id: 'nav_bp',
        name: 'Best Practices',
        link: '#best_practices',
        active: false,
      },
      {
        id: 'nav_bt',
        name: 'Build Tools',
        link: '#build_tools',
        active: false,
      },
      {
        id: 'nav_f',
        name: 'Frameworks',
        link: '#frameworks',
        active: false,
      },
    ],
  };
  render() {
    const section = [...this.state.stack];
    const getSection = sid => {
      const result = section.filter(s => s.id === sid)[0];
      return result.name;
    };

    return (
      <React.Fragment>
        <Header navigation={this.state.stack} />
        <BestPractices title={getSection('nav_bp')} />
        <BuildTools title={getSection('nav_bt')} />
        <Frameworks title={getSection('nav_f')} />
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Indicator extends Component {
  state = {
    items: [
      {
        id: 'intro',
        class: '_init_indicators_item active',
        link: 'introduction',
        name: 'Introduction',
      },
      {
        id: 'bp',
        class: '_init_indicators_item',
        link: 'best_practices',
        name: 'Best Practices',
      },
      {
        id: 'bt',
        class: '_init_indicators_item',
        link: 'build_tools',
        name: 'Build Tools',
      },
      {
        id: 'f',
        class: '_init_indicators_item',
        link: 'frameworks',
        name: 'Frameworks',
      },
      {
        id: 'a',
        class: '_init_indicators_item',
        link: 'activity',
        name: 'Activity',
      },
    ],
  };
  render() {
    const items = [...this.state.items];
    return (
      <React.Fragment>
        {items.map(i => (
          <a key={i.id} id={i.id} className={i.class} href={'#' + i.link}>
            {i.name}
          </a>
        ))}
      </React.Fragment>
    );
  }
}

export default Indicator;

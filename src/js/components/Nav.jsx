import React, { Component } from 'react';

class Nav extends Component {
  state = {
    items: [
      {
        id: 'nav_intro',
        class: '_init_nav_item active',
        link: 'introduction',
        name: 'Introduction',
      },
      {
        id: 'nav_bp',
        class: '_init_nav_item',
        link: 'best_practices',
        name: 'Best Practices',
      },
      {
        id: 'nav_bt',
        class: '_init_nav_item',
        link: 'build_tools',
        name: 'Build Tools',
      },
      {
        id: 'nav_f',
        class: '_init_nav_item',
        link: 'frameworks',
        name: 'Frameworks',
      },
      {
        id: 'nav_a',
        class: '_init_nav_item',
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

export default Nav;

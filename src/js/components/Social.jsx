import React, { Component } from 'react';

class Social extends Component {
  state = {
    items: [
      { name: 'website', value: 'https://artisawesm.com' },
      { name: 'dev', value: 'https://dev.to/artisawesm' },
      { name: 'github', value: 'https://github.com/artisawesm' },
    ],
  };
  render() {
    const items = [...this.state.items];
    return (
      <React.Fragment>
        {items.map(i => (
          <a
            key={i.name}
            className='_init_social_item'
            target='_blank'
            href={i.value}>
            {i.name}
          </a>
        ))}
      </React.Fragment>
    );
  }
}

export default Social;

import React, { Component } from 'react';

class BuildTools extends Component {
  state = {
    title: 'Build Tools',
    items: [
      { name: 'Gulp JS' },
      { name: 'Webpack' },
      { name: 'Babel' },
      { name: 'Node Js' },
      { name: 'Packages' },
    ],
  };
  render() {
    let { title } = this.state;
    const items = [...this.state.items];
    return (
      <React.Fragment>
        <p className='_init_title'>{title}</p>
        <div className='_init_build_content'>
          {items.map(i => (
            <p key={i.name}>{i.name}</p>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default BuildTools;

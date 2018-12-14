import React, { Component } from 'react';

class Frameworks extends Component {
  state = {
    title: 'Frameworks',
    items: [
      { id: 'Angular', class: '_init_angular', img: 'angular.png' },
      { id: 'React', class: '_init_react', img: 'react.png' },
      { id: 'Vue', class: '_init_vue', img: 'vue.png' },
    ],
  };
  render() {
    let { title } = this.state;
    const items = [...this.state.items];
    return (
      <React.Fragment>
        <p className='_init_title'>{title}</p>
        <div className='_init_frameworks_content'>
          {items.map(i => (
            <div key={i.id} className={i.class}>
              <img src={'./assets/images/' + i.img} alt={i.id} />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Frameworks;

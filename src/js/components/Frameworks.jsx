import React, { Component } from 'react';

class Frameworks extends Component {
  state = {
    frameworks: [
      { image: './assets/images/angularjs.png', name: 'angular' },
      { image: './assets/images/reactjs.png', name: 'react' },
      { image: './assets/images/vuejs.png', name: 'vue' },
    ],
  };
  render() {
    const frameworks = [...this.state.frameworks];
    return (
      <React.Fragment>
        <div id='frameworks' className='_init_frameworks _init_container'>
          <div className='_init_inner_frameworks container'>
            <p className='_init_title'>{this.props.title}</p>
            <div className='_init_frameworks_content'>
              {frameworks.map(framework => {
                return (
                  <div
                    key={framework.name}
                    className={`_init_${framework.name}`}>
                    <img src={framework.image} alt={framework.name} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Frameworks;

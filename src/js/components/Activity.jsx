import React, { Component } from 'react';
import axios from 'axios';

class Activity extends Component {
  state = {
    name: [],
  };

  componentDidMount() {
    axios.get('get.php').then(res => {
      this.setState({ name: res.data });
    });
  }

  render() {
    const names = [...this.state.name];
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='name' onChange={this.handleChange} />
          <button type='submit'>Add</button>
        </form>

        <ul>
          {names.map(name => (
            <li key={name.id} style={{ color: 'white' }}>
              {name.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Activity;

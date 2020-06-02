/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import Table from '../../components/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      droplets: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json.droplets)
    .then(droplets => this.setState({ 'droplets': droplets }))
  }

  render() {
    return (
      <div className="App">
        <Table droplets={ this.state.droplets } />
      </div>
    );
  }
}

export default App;



import React, { Component } from 'react';
import Section from './Section/Section';

class App extends Component {
  state = {
    title: 'sdfdbfsd',
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <Section title={this.state.title} />
      </div>
    );
  }
}

export default App;

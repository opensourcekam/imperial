import React, { Component } from 'react';
import { Button } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Button>Click</Button>
        <Button disabled>Click</Button>
      </div>
    );
  }
}

export default App;

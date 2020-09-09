import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonC from "./components/ButtonC";
import ButtonSC from "./components/ButtonSC";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ButtonC title="Component" />
          <ButtonSC texto="Styled-component"></ButtonSC>
          <Button variant="primary">Bootstrap</Button>{' '}
      </div>
    );
  }
}

export default App;

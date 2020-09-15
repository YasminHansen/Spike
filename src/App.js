import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonC from "./components/ButtonC";
import ButtonSC from "./components/ButtonSC";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ButtonC title="Component" />
        <ButtonSC texto="Styled-component"></ButtonSC>
        <br/>
        <Button variant="primary">Bootstrap</Button>{' '} */}

        <h3>Exemplo 1</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> 

        <hr></hr>
        <h3>Exemplo 2</h3>
        <Form.Group>
          <Form.Control size="lg" type="text" placeholder="Large text" />
          <br />
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Control size="sm" type="text" placeholder="Small text" />
        </Form.Group>

        <hr></hr>
        <h3>Exemplo 3</h3>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
        </Form>

        <hr></hr>
        <h3>Exemplo 4</h3>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
        </Form>
        <Form>
          {['checkbox', 'radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
              <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
              <Form.Check
                inline
                disabled
                label="3 (disabled)"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Form>

      </div>
    );
  }
}

export default App;

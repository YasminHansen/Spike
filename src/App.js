import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonC from "./components/ButtonC";
import ButtonSC from "./components/ButtonSC";

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormText from 'react-bootstrap/FormText';
import FormCheck from 'react-bootstrap/FormCheck';
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
          <FormGroup controlId="formBasicEmail">
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" placeholder="Enter email"/>
            <FormText className="text-muted">
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>

          <FormGroup controlId="formBasicPassword">
            <FormLabel>Password</FormLabel>
            <FormControl type="password" placeholder="Password" />
          </FormGroup>
          <FormGroup controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> 

        <hr></hr>
        <h3>Exemplo 2</h3>
        <FormGroup>
          <FormControl size="lg" type="text" placeholder="Large text" />
          <br />
          <FormControl type="text" placeholder="Normal text" />
          <br />
          <FormControl size="sm" type="text" placeholder="Small text" />
        </FormGroup>

        <hr></hr>
        <h3>Exemplo 3</h3>
        <Form>
          <Row>
            <Col>
              <FormControl placeholder="First name" />
            </Col>
            <Col>
              <FormControl placeholder="Last name" />
            </Col>
          </Row>
        </Form>

        <hr></hr>
        <h3>Exemplo 4</h3>
        <Form>
          <Row>
            <Col>
              <FormControl placeholder="First name" />
            </Col>
            <Col>
              <FormControl placeholder="Last name" />
            </Col>
          </Row>
        </Form>
        <Form>
          {['checkbox', 'radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <FormCheck inline label="1" type={type} id={`inline-${type}-1`} />
              <FormCheck inline label="2" type={type} id={`inline-${type}-2`} />
              <FormCheck
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

import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class R042_Collapse extends Component {
    render() {
        return (
          <div>
            <Button color="warning" id="toggle">
              버튼1
            </Button>
            <Button color="light" id="toggle2">
              버튼2
            </Button>
            <UncontrolledCollapse toggler="#toggle">
              <Card>
                <CardBody>REACT 200</CardBody>
                <CardBody>REACT 200</CardBody>
                <CardBody>REACT 200</CardBody>
                <CardBody>REACT 200</CardBody>
                <CardBody>REACT 200</CardBody>
                <CardBody>REACT 200</CardBody>
                <CardBody>REACT 200</CardBody>
                <CardBody>REACT 200</CardBody>
                <CardBody>REACT 200</CardBody>
                <CardBody>REACT 200</CardBody>
              </Card>
            </UncontrolledCollapse>
            <UncontrolledCollapse toggler="#toggle2">
              <Card>
                <CardBody>REACT 300</CardBody>
                <CardBody>REACT 300</CardBody>
               
              </Card>
            </UncontrolledCollapse>
          </div>
        );
    }
}

export default R042_Collapse;
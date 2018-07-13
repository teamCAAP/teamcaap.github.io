import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './Homepage.css';
import crossPlatformLogo from './cross-platform.svg';
import { Container, Row, Col } from 'reactstrap';

class Homepage extends Component {
  render() {
    return (
      
      <div className="homepage">
        <Header />

        <div className="banner">
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <h1>Build it once then share it with everyone.</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Replicate good practice, reduce wasted cost.</p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <img src={crossPlatformLogo} />
              </Col>
            </Row>

          </Container>
        </div>

        <Container className="mt-5">
          <Row>
            <Col>
              <h1>
                  Welcome
              </h1>                
              <p>
                Charity as a Platform is a new way of building digital services. We’re creating a set of shared components, service designs, platforms, data and hosting, that every charity service can use.
              </p>
              <p>
                This saves time and money for charities to spend their efforts on providing charitable services.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      
    );
  }
}

export default Homepage;

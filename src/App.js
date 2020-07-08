import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { Menu, HamburgerMenu, Footer } from './components';
import { Home, Projects, Contact } from './pages';
import { Displayment } from './assets/functions';

import Styles from './App.styles';

import { Logo } from './assets/img';

export default function App() {
  const [styles] = Styles();

  return (
    <Router>
      <Container fluid style={styles.root}>
        <Container>
          <Row>
            <Col>
              <img src={Logo} alt='Logo' style={styles.logo} />
            </Col>
            <Col style={styles.menu}>
              {Displayment(<HamburgerMenu />, <Menu />, 1024)}
            </Col>
          </Row>
        </Container>
      </Container>

      <Route path='/' exact component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />

      <Footer />
    </Router>
  );
}

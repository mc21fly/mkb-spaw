import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; // IMPORT REACT COMPONENTS

import { Menu, HamburgerMenu, Footer } from './components'; // IMPORT APP COMPONENTS
import { Home, Projects, Contact } from './pages'; // IMPORT APP PAGES
import { Displayment } from './assets/functions'; // IMPORT APP FUNCTIONS

import { AppStyles as Styles } from './pages/styles'; // IMPORT COMPONENT STYLE

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss'; // IMPORT CSS FILES

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

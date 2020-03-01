// IMPORT REACT COMPONENTS
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// IMPORT APP COMPONENTS
import { Menu, HamburgerMenu, Footer } from './components';

// IMPORT APP PAGES
import { Home, Projects, Contact } from './pages';

// IMPORT APP FUNCTIONS
import { Displayment } from './assets/functions'

// IMPORT CSS FILES
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';

// IMPORT IMAGE SOURCE
import logo from './assets/img/logo.png';


function App() {

  return (
    <Router>
      <Container fluid={true} style={{padding: Displayment('10px 0px 10px 0px', 30), borderBottom: '1px solid #ececec', marginBottom: 20}}>
        <Container>
          <Row>
            <Col>
              <img src={logo} alt='Logo' style={{maxHeight: Displayment(40, 50)}} />
            </Col>
            <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
              {Displayment(<HamburgerMenu />, <Menu />)}
            </Col>
          </Row>
        </Container>
      </Container>

      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      
      <Footer />
    </Router>
  );
}

export default App;

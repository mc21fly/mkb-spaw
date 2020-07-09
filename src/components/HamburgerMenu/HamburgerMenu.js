import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import Styles from './HamburgerMenu.styles';

export default function HamburgerMenu() {
  const [styles] = Styles();

  const buttons = {
    home: useRef(),
    projects: useRef(),
    contact: useRef(),
  };

  const options = useRef();

  function changeDisplay() {
    const style = getComputedStyle(options.current);
    const display = style.display;

    if (display === 'none') {
      options.current.style.display = 'flex';
    } else {
      options.current.style.display = 'none';
    }
  }

  return (
    <Row style={styles.root}>
      <i
        onClick={changeDisplay}
        className='fas fa-bars'
        style={{ fontSize: '40px', marginRight: 15 }}
      ></i>

      <div ref={options} className='hamburgerMenuOptions'>
        <Container>
          <Row style={styles.times}>
            <i
              onClick={changeDisplay}
              className='fas fa-times'
              style={{ fontSize: '40px' }}
            ></i>
          </Row>
          <Row style={styles.options}>
            <Link ref={buttons.home} to='/' onClick={changeDisplay}>
              Strona główna
            </Link>
            <Link ref={buttons.projects} to='/projects' onClick={changeDisplay}>
              Projekty
            </Link>
            <Link ref={buttons.contact} to='/contact' onClick={changeDisplay}>
              Kontakt
            </Link>
            <div>
              <a href='https://www.facebook.com/MKB-SPAW-647334855612910/'>
                <i className='fab fa-facebook-square'></i>
              </a>
              <a style={{ marginLeft: 30 }} href='https://m.me/647334855612910'>
                <i className='fab fa-facebook-messenger'></i>
              </a>
              <a style={styles.root.ml} href='https://mkb-spaw.olx.pl/'>
                <img
                  className='menu-img_hb'
                  src='https://static.olx.pl/static/olxpl/naspersclassifieds-regional/olxeu-atlas-web/static/img/redesign/favicon.ico?v=2'
                  alt='OLX'
                />
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </Row>
  );
}

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Styles from './Menu.styles';

export default function Menu() {
  const [styles] = Styles();

  const buttons = {
    home: useRef(),
    projects: useRef(),
    contact: useRef(),
  };

  return (
    <Row style={styles.root.mr}>
      <Link ref={buttons.home} to='/'>
        Strona główna
      </Link>
      <Link ref={buttons.projects} to='/projects'>
        Projekty
      </Link>
      <Link ref={buttons.contact} to='/contact'>
        Kontakt
      </Link>
      <a href='https://www.facebook.com/MKB-SPAW-647334855612910/'>
        <i className='fab fa-facebook-square'></i>
      </a>
      <a style={styles.root.ml} href='https://m.me/647334855612910'>
        <i className='fab fa-facebook-messenger'></i>
      </a>
      <a style={styles.root.ml} href='https://mkb-spaw.olx.pl/'>
        <img
          src='https://static.olx.pl/static/olxpl/naspersclassifieds-regional/olxeu-atlas-web/static/img/redesign/favicon.ico?v=2'
          style={{ width: 16, height: 16 }}
          alt='OLX'
        />
      </a>
    </Row>
  );
}

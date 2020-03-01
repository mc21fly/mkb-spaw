import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

function Menu() {

    const buttons = {
        home: useRef(),
        projects: useRef(),
        contact: useRef()
    }

    return (
        <Row style={{marginRight: 0}}>
            <Link ref={buttons.home} to="/">Strona główna</Link>
            <Link ref={buttons.projects} to="/projects">Projekty</Link>
            <Link ref={buttons.contact} to="/contact">Kontakt</Link>
            <a href="https://www.facebook.com/MKB-SPAW-647334855612910/"><i className="fab fa-facebook-square"></i></a>
            <a style={{marginLeft: 10}} href="https://m.me/647334855612910"><i className="fab fa-facebook-messenger"></i></a>
        </Row>
    )
}

export default Menu;
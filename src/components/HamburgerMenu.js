import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';

function HamburgerMenu() {

    const buttons = {
        home: useRef(),
        projects: useRef(),
        contact: useRef()
    }

    const options = useRef();

    function changeDisplay() {
        const style = getComputedStyle(options.current);
        const display = style.display;
        
        if (display === 'none') {
            options.current.style.display = 'flex'
        } else {
            options.current.style.display = 'none'
        }
    }

    return (
        <Row style={{marginRight: 0}}>
            <i onClick={changeDisplay} className="fas fa-bars" style={{fontSize: '40px'}}></i>

            <div ref={options} className='hamburgerMenuOptions'>
                <Container>
                    <Row style={{padding: '10px 15px 10px 15px', justifyContent: 'flex-end'}}>
                        <i onClick={changeDisplay} className="fas fa-times" style={{fontSize: '40px'}}></i>
                    </Row>
                    <Row style={{height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Link ref={buttons.home} to="/" onClick={changeDisplay}>Strona główna</Link>
                        <Link ref={buttons.projects} to="/projects" onClick={changeDisplay}>Projekty</Link>
                        <Link ref={buttons.contact} to="/contact" onClick={changeDisplay}>Kontakt</Link>
                        <div>
                            <a href="https://www.facebook.com/MKB-SPAW-647334855612910/"><i className="fab fa-facebook-square"></i></a>
                            <a style={{marginLeft: 10}} href="https://m.me/647334855612910"><i className="fab fa-facebook-messenger"></i></a>
                        </div>
                    </Row>
                </Container>
            </div>
        </Row>
    )
}

export default HamburgerMenu;
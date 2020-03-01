import React from 'react';
import { Container } from 'react-bootstrap';
import { Displayment } from '../assets/functions'

const currentYear = new Date().getFullYear();

const styles = {
    root: {
        background: 'white',
        borderTop: '1px solid #ececec',
        padding: Displayment(20, 30),
        marginTop: 20
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.8rem'
    }
}

function Footer() {
    return (
        <Container fluid style={styles.root}>
            <Container style={styles.description}>
                <div>Copyright © {currentYear}</div>
                <div>project and development <a style={{marginLeft: 0}} href="http://github.com/mc21fly">mcfly</a></div>
            </Container>
        </Container>
    )
}

export default Footer;
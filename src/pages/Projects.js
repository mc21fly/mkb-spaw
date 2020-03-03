import React, { useState, useEffect } from 'react';
import { Container, Image, Col, Modal } from 'react-bootstrap';

import { ProjectsStyles as Styles } from './styles';

export default function Projects() {

    const [styles, setStyles] = Styles();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        setStyles({
            ...styles,
            header: {
                ...styles.header,
                opacity: 1,
                transform: 'translateY(0%)'
            },
            gallery: {
                ...styles.gallery,
                opacity: 1,
                transform: 'translateY(0%)'
            }
        });
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        fetch('https://www.mkb-spaw.pl/api/index.php')
            .then(resp => resp.json())
            .then(res => setPhotos(res.photos));
    }, []);

    function MyImage(props) {
        
        const [show, setShow] = useState(false);
        
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
        <>
            <Image style={styles.image} onClick={handleShow} src={`https://mkb-spaw.pl/img/${props.source}`} thumbnail/>
            
            <Modal size="lg" centered show={show} onHide={handleClose}>
                <img style={{height: 'auto', maxWidth: '100%'}} src={`https://mkb-spaw.pl/img/${props.source}`} alt={`${props.source}`} />
            </Modal>
        </>
        );
    }

    return (
        <Container fluid style={styles.root}>
            <Container>
                <p style={styles.header}>Nasze projekty</p>
                    <Container style={styles.root}>
                        <Col style={styles.gallery}>
                            {photos.map((photo, index) => <MyImage key={index} source={photo.url} />)}
                        </Col>
                    </Container>
            </Container>
        </Container>
    );
}
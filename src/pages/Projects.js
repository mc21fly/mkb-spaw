import React, { useState, useEffect } from 'react';
import { Container, Image, Col } from 'react-bootstrap';

export default function Projects() {

    const [styles, setStyles] = useState({
        root: {
            padding: 0
        },
        header: {
            fontWeight: '700',
            fontSize: '2.5rem',
            opacity: 0,
            transform: 'translateY(100%)',
            transition: 'transform 1s, opacity 1s'
        },
        gallery: {
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            opacity: 0,
            transform: 'translateY(100%)',
            transition: 'transform 1s, opacity 1s'
        },
        image: {
            flexBasis: '24%',
            margin: '10px 0px',
            maxHeight: 250,
            objectFit: 'cover'
        }
    })

    //eslint-disable-next-line
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        setStyles({
            root: {
                ...styles.root
            },
            header: {
                ...styles.header,
                opacity: 1,
                transform: 'translateY(0%)'
            },
            gallery: {
                ...styles.gallery,
                opacity: 1,
                transform: 'translateY(0%)'
            },
            image: {
                ...styles.image,
            }
        })
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        fetch('https://www.mkb-spaw.pl/api/index.php')
            .then(resp => resp.json())
            .then(res => setPhotos(res.photos))
    }, [])

    function MyImage(props) {
        return (
            <Image style={styles.image} src={`https://mkb-spaw.pl/img/${props.source}`} thumbnail/>
        )
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
    )
}
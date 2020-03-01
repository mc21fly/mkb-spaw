import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Displayment } from '../assets/functions';

function Article(props) {

    const [styles, setStyles] = useState({
        root: {
            background: '#ffffff',
            transition: 'background 1s',
            padding: '30px 0px'
        },
        article: {
            transform: 'translateY(100%)',
            opacity: 0,
            display: 'flex',
            flexDirection: alignment('row-reverse', 'row'),
            transition: 'transform 1s, opacity 1s'
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
                header: {
                    flexGrow: 0,
                    fontWeight: '700',
                    fontSize: '2.5rem',
                    display: 'flex',
                    marginBottom: '10px',
                    justifyContent: alignment('flex-start', 'flex-end', 'center')
                },
                description: {
                    textAlign: 'justify',
                    fontSize: '1.1rem',
                    width: '100%'
                },
        },
        image: {
            display: Displayment('none', 'flex'),
            paddingRight: alignment(15, 0),
            paddingLeft: alignment(0, 15),
            marginLeft: alignment(0, 10),
            marginRight: alignment(10, 0),
            maxHeight: 350,
            maxWidth: 300,
        }
    });

    useEffect(() => {
        setStyles({
            root: {
                ...styles.root,
                background: props.dark ? '#ececec' : "#ffffff",
            },
            article: {
                ...styles.article,
                opacity: '1',
                transform: 'translateY(0%)'
            },
            section: {...styles.section},
            image: {...styles.image}
        })
        //eslint-disable-next-line
    }, [])

// CHECK FOR ALIGNMENT
function alignment(left, right, center) {
    return props.right
                ? right
                : props.center
                    ? center
                    : left
}

function Header() {
    return (
        <Col style={styles.section.header}>
            {props.title}
        </Col>
    )
}

function Description() {
    return (
        <Col style={styles.section.description}>
            {props.children}
        </Col>
    )
}

function Image() {
    return (
        <Col style={styles.image}>
            <img style={{objectFit: 'cover'}} src={props.image} alt={props.image} />
        </Col>
    )
}

    return (
        <Container fluid style={styles.root}>
            <Container style={styles.article}>
                <Row style={styles.section}>
                    <Header />
                    <Description />
                </Row>
                {alignment(props.image ? <Image /> : null, props.image ? <Image /> : null, null)}
            </Container>
        </Container>
    );
}

export default Article;
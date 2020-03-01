import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import { Displayment } from '../assets/functions'

export default function Contact() {

    const [styles, setStyles] = useState({
        root: {
            padding: 0,
        },
        form: {
            opacity: 0,
            transform: 'translateY(100%)',
            transition: 'transform 1s, opacity 1s'
        },
        details : {
            flexDirection: Displayment('column', 'row'),
        },
        message: {
            marginBottom: 10
        },
        control: {
            marginBottom: 10
        },
        header: {
            fontWeight: '700',
            fontSize: '2.5rem',
        },
        map: {
            opacity: 0,
            border: 0,
            marginTop: 50,
            transition: 'opacity 5s'
        }
    })

    useEffect(() => {
        setStyles({
            root: {
                ...styles.root,
            },
            form: {
                ...styles.form,
                opacity: 1,
                transform: 'translateY(0%)'
            },
            details: {
                ...styles.details,
            },
            message: {
                ...styles.message
            },
            control: {
                ...styles.control
            },
            header: {
                ...styles.header
            },
            map: {
                ...styles.map,
                opacity: 1,
            }
        })
        //eslint-disable-next-line
    }, [])

    return (
        <Container fluid style={styles.root}>
            <Container>
                <Form style={styles.form}>
                    <p style={styles.header}>Skontaktuj się z nami!</p>
                        <Form.Row style={styles.details}>
                            <Col lg={6}>
                                <Form.Control style={styles.control} placeholder="Imię i nazwisko" />
                            </Col>
                            <Col>
                                <Form.Control style={styles.control} placeholder="Numer telefonu" />
                            </Col>
                            <Col>
                                <Form.Control style={styles.control} placeholder="E-mail" />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Control style={styles.message} placeholder="Temat wiadomości" />
                                <Form.Control style={styles.message} as='textarea' row="3" placeholder="Wiadomość.."/>
                            </Col>
                        </Form.Row>
                        <Form.Row style={{justifyContent: 'center'}}>
                            <Button>Wyślij wiadomość</Button>
                        </Form.Row>
                </Form>
            </Container>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.1022934891944!2d20.623918016085096!3d50.00943787941694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716294b174304d3%3A0x25bb0a9a1f046a69!2sMKB-Spaw!5e0!3m2!1spl!2spl!4v1583052848609!5m2!1spl!2spl" width="100%" height="450" frameBorder="0" style={styles.map} allowFullScreen=""></iframe>
        </Container>
    )
}
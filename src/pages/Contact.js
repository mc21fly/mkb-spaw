import React, { useEffect, useRef, useState } from 'react';
import { Container, Col, Row, Form, Button, Modal } from 'react-bootstrap';
import { ContactStyles as Styles } from './styles';
import { Displayment } from '../assets/functions';

export default function Contact() {

    const [styles, setStyles] = Styles();

    useEffect(() => {
        setStyles({
            ...styles,
            form: {
                ...styles.form,
                opacity: 1,
                transform: 'translateY(0%)'
            },
            map: {
                ...styles.map,
                opacity: 1,
            }
        });
        //eslint-disable-next-line
    }, [])

    function MyForm() {

        const [show, setShow] = useState(false);
        
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const refs = {
            name: useRef(),
            phone: useRef(),
            mail: useRef(),
            subject: useRef(),
            message: useRef()
        };

        function handleSubmit() {
            if (!refs.name.current.value || !refs.phone.current.value || !refs.mail.current.value || !refs.subject.current.value || !refs.message.current.value) {
                handleShow();
            } else {
                window.location.href = `mailto:mkbspaw@gmail.com?subject=${refs.subject.current.value}&body=Imię i nazwisko: ${refs.name.current.value}%0AE-mail: ${refs.mail.current.value}%0ANumer telefonu: ${refs.phone.current.value}%0A%0A${refs.message.current.value}`;
            }
        }

        return (
            <Col lg={8} xs={12}>
                <Form style={styles.form}>
                    <Form.Row style={styles.details}>
                        <Col lg={12}>
                            <Form.Control ref={refs.name} style={styles.control} placeholder="Imię i nazwisko" />
                        </Col>
                        <Col>
                            <Form.Control ref={refs.phone} style={styles.control} placeholder="Numer telefonu" />
                        </Col>
                        <Col>
                            <Form.Control ref={refs.mail} style={styles.control} placeholder="E-mail" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control ref={refs.subject} style={styles.message} placeholder="Temat wiadomości" />
                            <Form.Control ref={refs.message} style={styles.message} as='textarea' row="3" placeholder="Wiadomość.."/>
                        </Col>
                    </Form.Row>
                    <Form.Row style={{justifyContent: 'center'}}>
                        <Button onClick={handleSubmit}>Wyślij wiadomość</Button>
                    </Form.Row>
                </Form>
                
                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Body style={{textAlign: 'center'}}>
                        Przed wysłaniem wiadomości uzupełnij wszystkie dane!
                    </Modal.Body>
                </Modal>
            </Col>
        );
    }

    function ContactDetails() {
        return (
            <Col lg={4} xs={12}>
                <p style={{textAlign: Displayment('center', 'left'), marginTop: Displayment('25px', 0)}}>
                    <b>MKB-SPAW</b><br/>
                    Kamil Błąkała<br />
                    ul. Gibałówka 11<br />
                    Mokrzyska<br />
                    32-800 Brzesko<br /> <br />
                    <i className="fas fa-phone-alt"></i> 782-194-592<br />
                    <i className="fas fa-envelope"></i> mkbspaw@gmail.com
                </p>
            </Col>
        );
    }

    return (
        <Container fluid style={styles.root}>
            <Container>
                <p style={styles.header}>Skontaktuj się z nami!</p>
                    <Row>
                        <MyForm />
                        <ContactDetails />
                    </Row>
            </Container>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.1022934891944!2d20.623918016085096!3d50.00943787941694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716294b174304d3%3A0x25bb0a9a1f046a69!2sMKB-Spaw!5e0!3m2!1spl!2spl!4v1583052848609!5m2!1spl!2spl" width="100%" height="450" frameBorder="0" style={styles.map} allowFullScreen=""></iframe>
        </Container>
    );
}
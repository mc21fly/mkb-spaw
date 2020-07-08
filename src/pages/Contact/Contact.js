import React, { useEffect, useRef, useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import Styles from './Contact.styles';
import { Displayment } from '../../assets/functions';

const __URL = 'https://www.mkb-spaw.pl';

export default function Contact() {
  const [styles, setStyles] = Styles();
  const mailLoading = useRef();
  const [show, setShow] = useState(false);
  const [send, setSend] = useState(false);

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
        opacity: 1
      },
      header: {
        ...styles.header,
        opacity: 1,
        transform: 'translateY(0%)'
      }
    });
    //eslint-disable-next-line
  }, []);

  function MyForm() {
    const refs = {
      name: useRef(),
      phone: useRef(),
      mail: useRef(),
      subject: useRef(),
      message: useRef()
    };

    function handleSubmit() {
      let allFiled = true;

      for (const val in refs) {
        if (!refs[val].current.value) {
          allFiled = false;
        }
      }

      if (!allFiled) {
        for (const val in refs) {
          if (!refs[val].current.value) {
            refs[val].current.style.border = '1px solid red';
          }
        }
      } else {
        setShow(true);

        fetch(`${__URL}/api/mail.php`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form'
          },
          body: JSON.stringify({
            name: refs.name.current.value,
            phone: refs.phone.current.value,
            mail: refs.mail.current.value,
            subject: refs.subject.current.value,
            message: refs.message.current.value
          })
        })
          .then(() => {
            setSend(true);
            setTimeout(() => {
              setShow(false);
              setSend(false);
            }, 1500);
          })
          .catch(() => setShow(false));
      }
    }

    function removeError(e) {
      e.target.style.border = '';
    }

    return (
      <Col lg={8} xs={12}>
        <Form>
          <Form.Row style={styles.details}>
            <Col lg={12}>
              <Form.Control
                ref={refs.name}
                style={styles.control}
                placeholder='Imię i nazwisko'
                onFocus={removeError}
              />
            </Col>
            <Col>
              <Form.Control
                ref={refs.phone}
                style={styles.control}
                placeholder='Numer telefonu'
                onFocus={removeError}
              />
            </Col>
            <Col>
              <Form.Control
                ref={refs.mail}
                style={styles.control}
                placeholder='E-mail'
                onFocus={removeError}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control
                ref={refs.subject}
                style={styles.message}
                placeholder='Temat wiadomości'
                onFocus={removeError}
              />
              <Form.Control
                ref={refs.message}
                style={styles.message}
                as='textarea'
                row='3'
                placeholder='Wiadomość..'
                onFocus={removeError}
              />
            </Col>
          </Form.Row>
          <Form.Row style={{ justifyContent: 'center' }}>
            <Button onClick={handleSubmit}>Wyślij wiadomość</Button>
          </Form.Row>
        </Form>
      </Col>
    );
  }

  function ContactDetails() {
    return (
      <Col lg={4} xs={12}>
        <p
          style={{
            textAlign: Displayment('center', 'left'),
            marginTop: Displayment('25px', 0)
          }}
        >
          <b>MKB-SPAW</b>
          <br />
          Kamil Błąkała
          <br />
          ul. Gibałówka 11
          <br />
          Mokrzyska
          <br />
          32-800 Brzesko
          <br /> <br />
          <i className='fas fa-phone-alt'></i> 782-194-592
          <br />
          <i className='fas fa-envelope'></i> mkbspaw@gmail.com
        </p>
      </Col>
    );
  }

  return (
    <Container fluid style={styles.root}>
      <Container>
        <p style={styles.header}>Skontaktuj się z nami!</p>
        <Row style={styles.form}>
          <MyForm />
          <ContactDetails />
        </Row>
      </Container>
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.1022934891944!2d20.623918016085096!3d50.00943787941694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716294b174304d3%3A0x25bb0a9a1f046a69!2sMKB-Spaw!5e0!3m2!1spl!2spl!4v1583052848609!5m2!1spl!2spl'
        width='100%'
        height='450'
        frameBorder='0'
        style={styles.map}
        allowFullScreen=''
      ></iframe>
      <div
        ref={mailLoading}
        style={{
          position: 'fixed',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2.5rem',
          display: show ? 'flex' : 'none',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          background: 'rgba(0, 0, 0, 0.3)',
          zIndex: 9999999999999
        }}
      >
        {send ? (
          <p>Wiadomość została wysłana</p>
        ) : (
          <div className='fa-3x' style={{ fontSize: '2.5rem' }}>
            Wysyłanie <i className='fas fa-circle-notch fa-spin'></i>
          </div>
        )}
      </div>
    </Container>
  );
}

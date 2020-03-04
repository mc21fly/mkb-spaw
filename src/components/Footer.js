import React from 'react';
import { Container } from 'react-bootstrap';
import { FooterStyles as Styles } from './styles';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [styles] = Styles();

  return (
    <Container fluid style={styles.root}>
      <Container style={styles.description}>
        <div>Copyright © {currentYear}</div>
        <div>
          project and development{' '}
          <a style={{ marginLeft: 0 }} href="http://github.com/mc21fly">
            mcfly
          </a>
        </div>
      </Container>
    </Container>
  );
}

import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Article, Box } from '../../components';

import Styles from './Home.styles';

import { Welder1, Welder2 } from '../../assets/img';

export default function Home() {
  const [styles, setStyles] = Styles();

  useEffect(() => {
    setStyles({
      ...styles,
      header: {
        ...styles.header,
        transform: 'translateY(0%)',
        opacity: 1
      }
    });
    //eslint-disable-next-line
  }, []);

  return (
    <Container fluid style={styles.root}>
      <Container>
        <p style={styles.header}>Poznajmy się!</p>
      </Container>

      <Article right image={Welder1} title='Kim jesteśmy?'>
        Nasza firma zajmuje się spawaniem konstrukcji stalowych. Świadczymy
        kompleksowe usługi ślusarsko-spawalnicze. Spawamy metodami <b>MAG</b>{' '}
        oraz <b>TIG</b>. Jesteśmy otwarci na zlecenia według projektów klienta
        lub oferujemy pomoc przy ich tworzeniu. Zapewniamy wsparcie małym i
        dużym firmom, oraz obsługujemy osoby prywatne.
      </Article>

      <Article dark center title='Czym się zajmujemy?'>
        <Row>
          <Box>
            Produkujemy meble loftowe oraz industrialne ze spawanymi elementami
            malowanymi proszkowo.
          </Box>
          <Box>
            Wykonujemy przęsła ogrodzeniowe oraz bramy na zawiasach według
            wzorów przesłanych bądź wybranych przez klienta.
          </Box>
          <Box>
            Zajmujemy się tworzeniem balustrad balkonowych według wzorów lub na
            życzenie klienta.
          </Box>
          <Box>
            Podejmujemy się spawania wszelakich konstrukcji stalowych jak np.
            tablice reklamowe, wiaty, kojce, klatki na kontenery itp.
          </Box>
        </Row>
      </Article>

      <Article image={Welder2} title='Co nas wyróżnia?'>
        Posiadamy doświadczenie w branży spożywczej oraz farmaceutycznej, nabyte
        podczas pracy m.in. w browarach, u producentów soków czy też leków.
        Zarówno w Polsce jak i na terenie Europy.
      </Article>
    </Container>
  );
}

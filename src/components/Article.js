import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Alignment } from '../assets/functions';
import { ArticleStyles as Styles} from './styles';

export default function Article(props) {

    const alignment = Alignment(props);

    const [styles, setStyles] = Styles(props);

    useEffect(() => {
        setStyles({
            ...styles,
            root: {
                ...styles.root,
                background: props.dark ? '#ececec' : '#ffffff',
            },
            article: {
                ...styles.article,
                opacity: '1',
                transform: 'translateY(0%)'}
        });
        //eslint-disable-next-line
    }, [])

function Header() {
    return (
        <Col style={styles.section.header}>
            {props.title}
        </Col>
    );
}

function Description() {
    return (
        <Col style={styles.section.description}>
            {props.children}
        </Col>
    );
}

function Image() {
    return (
        <Col style={styles.image}>
            <img style={{objectFit: 'cover'}} src={props.image} alt={props.image} />
        </Col>
    );
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
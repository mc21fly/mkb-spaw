import React from 'react';
import { Col } from 'react-bootstrap';
import { BoxStyles as Styles } from './styles';

export default function Box(props) {

    const [styles] = Styles(props);

    return (
        <Col style={styles.box}>
            {props.children}
        </Col>
    );
}
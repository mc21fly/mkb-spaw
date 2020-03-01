import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Displayment } from '../assets/functions';

function Box(props) {

    //eslint-disable-next-line
    const [styles, setStyles] = useState({
        box: {
            border: '1px solid #ececec',
            background: '#ffffff',
            borderRadius: 5,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            margin: '0px 10px 10px 10px',
            flexBasis: Displayment('100%', '20%'),
        }
    })

    return (
        <Col style={styles.box}>
            {props.children}
        </Col>
    )
}

export default Box;
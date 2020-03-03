import {useState} from 'react';
import { Displayment } from '../../assets/functions';

export default function Styles() {
    
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
    });

    return [styles, setStyles];
}
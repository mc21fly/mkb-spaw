import { useState } from 'react';

export default function Styles() {

    const [styles, setStyles] = useState({
        root: {
            marginRight: 0,
        },
        times: {
            padding: '10px 15px 10px 15px',
            justifyContent: 'flex-end'
        },
        options: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

    return [styles, setStyles];
}
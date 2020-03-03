import { useState } from 'react';
import { Displayment, Alignment } from '../../assets/functions';

export default function Styles(props) {

    const alignment = Alignment(props);
    const displayment = Displayment;

    const [styles, setStyles] = useState({
        root: {
            background: '#ffffff',
            transition: 'background 1s',
            padding: '30px 0px'
        },
        article: {
            transform: 'translateY(100%)',
            opacity: 0,
            display: 'flex',
            flexDirection: alignment('row-reverse', 'row'),
            transition: 'transform 1s, opacity 1s'
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
                header: {
                    flexGrow: 0,
                    fontWeight: '700',
                    fontSize: '2.5rem',
                    display: 'flex',
                    marginBottom: '10px',
                    justifyContent: alignment('flex-start', 'flex-end', 'center')
                },
                description: {
                    textAlign: 'justify',
                    fontSize: '1.1rem',
                    width: '100%'
                },
        },
        image: {
            display: displayment('none', 'flex'),
            paddingRight: alignment(15, 0),
            paddingLeft: alignment(0, 15),
            marginLeft: alignment(0, 10),
            marginRight: alignment(10, 0),
            maxHeight: 350,
            maxWidth: 300,
        }
    });

    return [styles, setStyles]
}
import { useState } from 'react';
import { Displayment } from '../../assets/functions';

export default function Styles() {
  const displayment = Displayment;

  const [styles, setStyles] = useState({
    root: {
      background: 'white',
      borderTop: '1px solid #ececec',
      padding: displayment(20, 30),
      marginTop: 20
    },
    description: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.8rem'
    }
  });

  return [styles, setStyles];
}

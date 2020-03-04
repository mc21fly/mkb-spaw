import { useState } from 'react';
import { Displayment } from '../../assets/functions';

export default function Styles() {
  const displayment = Displayment;

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
      flexBasis: displayment('100%', '20%')
    }
  });

  return [styles, setStyles];
}

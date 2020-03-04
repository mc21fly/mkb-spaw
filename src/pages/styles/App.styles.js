import { useState } from 'react';
import { Displayment } from '../../assets/functions';

export default function Styles() {
  const [styles, setStyles] = useState({
    root: {
      padding: Displayment('10px 0px 10px 0px', 30),
      borderBottom: '1px solid #ececec',
      marginBottom: 20
    },
    logo: {
      maxHeight: Displayment(40, 50)
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  });

  return [styles, setStyles];
}

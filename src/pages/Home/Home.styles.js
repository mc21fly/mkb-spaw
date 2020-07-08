import { useState } from 'react';
import { Displayment } from '../../assets/functions';

export default function Styles() {
  const [styles, setStyles] = useState({
    root: {
      padding: Displayment('10px 0px 10px 0px', 0)
    },
    header: {
      fontWeight: '700',
      fontSize: '2.5rem',
      opacity: 0,
      transform: 'translateY(100%)',
      transition: 'transform 1s, opacity 1s'
    }
  });

  return [styles, setStyles];
}

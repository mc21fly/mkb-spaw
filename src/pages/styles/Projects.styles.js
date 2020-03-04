import { useState } from 'react';

export default function Styles() {
  const [styles, setStyles] = useState({
    root: {
      padding: 0
    },
    header: {
      fontWeight: '700',
      fontSize: '2.5rem',
      opacity: 0,
      transform: 'translateY(100%)',
      transition: 'transform 1s, opacity 1s'
    },
    gallery: {
      padding: 0,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      opacity: 0,
      transform: 'translateY(100%)',
      transition: 'transform 1s, opacity 1s'
    },
    image: {
      flexBasis: '24%',
      marginBottom: '10px',
      maxHeight: 250,
      objectFit: 'cover',
      cursor: 'pointer'
    }
  });

  return [styles, setStyles];
}

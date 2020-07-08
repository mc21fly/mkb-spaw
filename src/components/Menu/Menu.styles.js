import { useState } from 'react';

export default function Styles() {
  const [styles, setStyles] = useState({
    root: {
      ml: {
        marginLeft: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      mr: {
        marginRight: 0,
      },
    },
  });

  return [styles, setStyles];
}

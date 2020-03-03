import { useState } from 'react';
import { Displayment } from '../../assets/functions';

export default function Styles() {

    const [styles, setStyles] = useState({
            root: {
                padding: Displayment('10px 0px 10px 0px', 0)
            }
        });
    
        return [styles, setStyles];
}
import React from 'react';
import './App.css';
import world from './images/world.jpg';
import Main from './Main';

import bfg from './images/bfg.jpeg';
import brides from './images/brides.jpg';

const World=()=>{
    const title2="World War Z (2013)";
    
    const p2='"Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.';
    return(
            <Main p={p2} img={world} title={title2}  />
    );
}
export default World;


import React from 'react';
import brides from './images/brides.jpg';
import Main from './Main';

const Brides=()=>{
    const title2="World War Z (2013)";
    
    const p2='"Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.';
    return(
            <Main p={p2} img={brides} title={title2}  />
    );
}
export default Brides;
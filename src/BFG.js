import React from 'react';
import bfg from './images/bfg.jpeg';
import Main from './Main';

const BFG=()=>{
    const title2="Secret Bridesmaids' Business";
    
    const p2='"The power of friendship comes to hand as three friends find this out through life and death situations.';
    return(
            <Main p={p2} img={bfg} title={title2}  />
    );
}
export default BFG;

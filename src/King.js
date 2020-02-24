import React from 'react';
import king from './images/king.jpg';
import Main from './Main';

const King=()=>{
    const title2="In the Name of the King: A Dungeon Siege Tale (2007)";
    
    const p2='A man named Farmer sets out to rescue his kidnapped wife and avenge the death of his son, two acts committed by the Krugs, a race of animal-warriors who are controlled by the evil Gallian.';
   
    return(
            <Main p={p2} img={king} title={title2}  />
    );
}
export default King;
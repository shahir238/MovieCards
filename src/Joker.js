import React from 'react';
import './App.css';
import joker from './images/joker.jpg';
import Main from './Main';

const Joker = props =>{
    const title1="Joker (2019)";
    
    const p1='In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.';
    return(
            <Main p={p1} img={joker} title={title1}  />
    );
}
export default Joker;
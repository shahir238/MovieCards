import React from 'react';
import './App.css';
import { Card, CardHeader,Col,Row,Badge, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import a from './images/a.jpg'; 
import b from './images/b.jpg';
import c from './images/c.jpg';
import d from './images/d.jpg';
import e from './images/e.jpg';
//import {Link} from 'react-router-dom';
import Apps from './Apps'
//import Gaurdian from './Gaurdian'
import firebase from './fire';



const Home =()=>{
   const p1 ="The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.";
   const p2 ="The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s."; 
   const p3 ="The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.";
   const p4 ="Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain.";
   const p5 =" Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?";
   const title1 ="Joker";
   const title2 ="World War Z";
   const title3 ="In The Name Of King";
   const title4 ="The BFG";
   const title5 ="Secret Brides Maids";
   const muted1 ="Ahaa! be smile";
   const muted2 ="third world war";
   const muted3 ="Kingdom";
   const muted4 ="The big friend";
   const muted5 ="Secret brides maids";
   const star1 ="faStarHalfAlt";
   const star2 ="faStarHalfAlt";
   const star3 ="faStar";
   const star4 ="faStarHalfAlt";
   const star5 ="faStarHalfAlt";
   const pills1 ="4.5";
   const pills2 ="4.5";
   const pills3 ="5.0";
   const pills4 ="4.2";
   const pills5 ="3.9"; 
  // const link1 ="/Gaurdian";
//    const link2 ="/world";
//    const link3 ="/king";
//    const link4 ="/bfg";
//    const link5 ="/brides";
const logOut=()=>{
  firebase.auth().signOut();
}


   return(
       
        <div className="App">
          
         <Card className="header"><CardHeader style={{backgroundColor:'#313742',height:'100px'}}><nav className="nav"><div><FontAwesomeIcon className="fa-2x" style={{paddingRight:'15px',height:'60px',width:'60px'  }} icon={faFilm}></FontAwesomeIcon></div><div><h3 style={{paddingTop:'12px'}}>My-Movies</h3></div></nav><Button onClick={logOut} style={{float:'right',marginTop:'-60px'}} >logOut</Button></CardHeader></Card>
          <div className="div"><Row>
           
            <Apps title={title1} muted={muted1} p={p1} img={a} star={star1} pills={pills1} link={"/Joker"} />
            <Apps title={title2} muted={muted2} p={p2} img={b} star={star2} pills={pills2} link={"/World"} />
            <Apps title={title3} muted={muted3} p={p3} img={c} star={star3} pills={pills3} link={"/King"} />
            <Apps title={title4} muted={muted4} p={p4} img={d} star={star4} pills={pills4} link={"/BFG"} />
            <Apps title={title5} muted={muted5} p={p5} img={e} star={star5} pills={pills5} link={"/Brides"} />
            </Row>     
          </div>
          </div>
          
            
    );
}
export default Home;
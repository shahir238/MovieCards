import React from 'react';
import './App.css';
import './gaurdian.css';
import { Card,Button,CardFooter,Nav,NavItem,NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF , faTwitter, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Home from './Home';
import {Link} from 'react-router-dom';

const Main = props=> {

    return (
        <div style={{backgroundColor:'white', margin:'0px',padding:'0px'}}>
           

                            <Card style={{backgroundColor:'white',marginTop:'2px',margin:'0px',padding:'0px'}} className="c">
                                 <div style={{backgroundColor:'#1d5e7a',margin:'0px',padding:'0px'}}>
                                     <h1 className="h">{props.title} </h1><Link to="/Home"><Button className="btn" >Back</Button></Link></div>
                                     <div>
                                        <p className="p2">
                                            <img src={props.img}  style={{width:'1200px',height:'600px',margin:'0px 60px 20px 40px'}}/>
                                                <div style={{marginLeft:'35px'}}>
                                                    <h3 style={{color:'#f7731b'}}>For download!</h3>
                                                      <h5 style={{color:'#f7731b'}}>Click here
                                                <FontAwesomeIcon style={{color:'#1d5e7a',marginLeft:'10px'}} className="fa-2x" icon={faDownload} ></FontAwesomeIcon>
                                                </h5>
                                                {props.p}
                                                <br></br>
                                                 <br></br></div>
                                                 </p>
                 
                                                
                                                 
   
            
        </div>
        <div>
        <CardFooter style={{with:'100%',margin:'0px',padding:'0px',minHeight:'200px'}}>
        <Nav style={{margin:'0px' ,paddingLeft:'40%'}}>
            <NavItem >
          <NavLink className="icon" href="#"><FontAwesomeIcon  icon={faFacebookF} className="fa-2x"  /></NavLink>
        </NavItem>
        <NavItem >
          <NavLink className="icon" href="#"><FontAwesomeIcon  icon={faTwitter} className="fa-2x" /></NavLink>
        </NavItem>
        <NavItem >
          <NavLink className="icon" href="#"><FontAwesomeIcon icon={faLinkedinIn} className="fa-2x" /></NavLink>
        </NavItem>
        
        </Nav>
          
                <Nav style={{width:'100%',margin:'0px',paddingTop:'2%',textAlign:'justify',color:'white',paddingLeft:'160px',minHeight:'auto'}}>
              
        <NavItem >
          <NavLink className="navLink" href="#">Privacy Notice</NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink className="navLink" href="#">Cookie Policy</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navLink" href="#">Do not sell my info</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navLink" href="#">Communications Preferences</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navLink" href="#">Terms of Use</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navLink" href="#">Security</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navLink" href="#">Accessibility</NavLink>
        </NavItem>
      </Nav>
      <Nav style={{margin:'0px' ,paddingLeft:'35%', minHeight:'auto'}}>
          <NavItem>
              <NavLink className="copyRight" ><FontAwesomeIcon icon={faCopyright} /> 2020 CardMovies, LLC. All rights reserved.</NavLink>
          </NavItem>
      </Nav>
         </CardFooter>
                                                 </div> 
    </Card>
    
    </div> );
}
   


     export default Main;   
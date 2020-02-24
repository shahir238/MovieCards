import React from 'react';
import './App.css';
import './gaurdian.css';
import { Card, CardHeader,Col,Row,Badge} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload  } from '@fortawesome/free-solid-svg-icons';

const Main = props=> {

    return (
        <div style={{backgroundColor:'#1d5e7a'}}>
            {/* <CardHeader style={{backgroundColor:'#313742',height:'100px'}}>
            <nav className="nav">
                <div><FontAwesomeIcon className="fa-2x" style={{paddingRight:'15px',height:'60px',width:'60px'  }} icon={faFilm}>
                    </FontAwesomeIcon></div>
                    <div>
                        <h3 style={{paddingTop:'12px'}}>My-Movies</h3>
                        </div>
                        </nav>
                        </CardHeader> */}

                            <Card style={{backgroundColor:'##1d5e7a',marginTop:'2px'}} className="c">
                                 <div style={{backgroundColor:'#1d5e7a'}}>
                                     <h1 className="h">{props.title} </h1>
                                        <p className="p2">
                                            <img src={props.img}  style={{width:'1200px',height:'600px',margin:'0px 60px 20px 40px'}}/>
                                                <div style={{marginLeft:'20px'}}>
                                                    <h3 style={{color:'#f7731b'}}>For download!</h3>
                                                      <h5 style={{color:'#f7731b'}}>Click here
                                                <FontAwesomeIcon style={{color:'#032b02',marginLeft:'10px'}} className="fa-2x" icon={faDownload} ></FontAwesomeIcon>
                                                </h5>
                                                {props.p}
                                                <br></br>
                                                 <br></br>
                                                 
                                                </div>
                                                 
   
            </p>
        </div>

    </Card>
    
    </div> );
}
   


     export default Main;   
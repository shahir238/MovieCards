import React  from 'react';
import './App.css';
 import { Card,Col,Badge} from 'reactstrap';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faStar } from '@fortawesome/free-solid-svg-icons';


import {Link} from 'react-router-dom';


const Apps=props=>{

    return(

            
            <Col sm="12" md="6" lg="3"> 
                <div className="movie-card">
                <div>
                <img src={props.img} className="img"/>
                <Card className="inner ">
                <h4><Link to={props.link} >{props.title}</Link></h4>
                <h6 className="text-muted">{props.muted}</h6>
                <p className="p">{props.p}</p>
                    </Card></div>
                    <Card className="card">
                        <div className="star">
                            <FontAwesomeIcon className="fa-lg" style={{paddingRight:'1px'}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className="fa-lg" style={{paddingRight:'1px'}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className="fa-lg" style={{paddingRight:'1px'}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className="fa-lg" style={{paddingRight:'1px'}} icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className="fa-lg" style={{paddingRight:'1px'}} icon={props.star}></FontAwesomeIcon>
                            <span className="badge"><Badge color="primary" style={{fontSize:'17px'}} pill>{props.pills}</Badge></span>
                            </div>
                            </Card>
                            </div>
                            </Col>
    
        
    );
}
export default Apps;


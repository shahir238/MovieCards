import React, { Component } from 'react';
import {db,auth} from './fire';
import { faStarHalfAlt,faStar } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Card,Col,Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

export class UserCard extends Component {
    state ={
        movies: null
    }
    componentDidMount(){
        db.collection('movies')
        .get()
        .then( snapshot =>{ console.log("snapshot",snapshot);
            const movies =[];
            snapshot.forEach( doc =>
                {
                const data = doc.data();
                movies.push(data);

            })
           
            this.setState({
                movies:movies
            })
            console.log("Movie data",this.state.movies);
        })
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <>
                {this.state.movies && this.state.movies.map(e=>(  
                    
                    <Col sm="12" md="4" lg="3" className="mainCard" style={{marginLeft:'100px'}}> 
                    <div className="movie-card">
                    <div className="image">
                    <img src={e.url} className="img"/>
                    <Card className="inner ">
                    <h4 style={{paddingLeft:'10px'}}><Link to={e.link} >{e.title}</Link></h4>
                    <h6 className="text-muted">{e.subTitle}</h6>
                    <p className="p">{e.description}</p>
                        </Card></div>
                        <Card className="card">
                            <div className="star">
                                <FontAwesomeIcon className="fa-lg" style={{paddingRight:'1px'}} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="fa-lg" style={{paddingRight:'1px'}} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="fa-lg" style={{paddingRight:'1px'}} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="fa-lg" style={{paddingRight:'1px'}} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="fa-lg" style={{paddingRight:'1px'}} icon={faStarHalfAlt}></FontAwesomeIcon>
                                <span className="badge"><Badge color="primary" style={{fontSize:'17px'}} pill>4.3</Badge></span>
                                </div>
                                </Card>
                                </div>
                                </Col>
                                )
                )}
            </>
        )
    }
}

export default UserCard;


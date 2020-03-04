import React, { Component } from "react";
import { Progress, Button, Input, Label, FormGroup } from "reactstrap";
import { storage } from "./fire";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import load from './images/load.gif';
export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      load:false
    };
    console.log("progress",this.state.progress);
    console.log("spinner",this.state.load)
  }
  

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
   
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
        
      },

      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            this.props.image(url);
            if(this.state.progress===100){
              this.setState({
                load:false
              })
            
            }
          });
        console.log("URL", this.state.image);
      }
    );
    
   this.setState({
     load:true
   })
   
  };
  
  render() {
   
    
    return (
      <>
        <FormGroup>
        {(this.state.load===true)?
              [<span style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'10px'}}><img style={{width:'40px',width:'40px' }} alt="loader" src={load}/></span>]:
          [<><Label>Upload Image</Label>
          <Input type="file" onChange={this.handleChange} />
          
          
            <Button
              style={{ float: "left", marginTop: "15px" }}
              onClick={this.handleUpload}
              className="waves-effect waves-light btn"
            >
             
             Upload
            </Button></>]}
            <Progress
              value={this.state.progress}
              max="100"
              className="progress"
              style={{ width: "200px", marginTop: "25px" }}
            />
            {(this.state.progress===100)?[<span style={{color:'red'}}>Image uploaded!</span>]:[null]}
          
          
        </FormGroup>
      </>
    );
  }
}

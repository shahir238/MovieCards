import React, { Component } from 'react';
import { Progress,Button,Input, Label, FormGroup} from 'reactstrap';
import {storage} from './fire';
import Home from './Home';
export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: null,
          url: "",
          progress: 0
        };
        
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
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({ progress });
          },

          error => {
            // Error function ...
            console.log(error);
          },
          () => {
            // complete function ...
            storage.ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                this.setState({ url });
                this.props.image(url)
              });
              console.log("URL",this.state.image)
          }
        );
      };
      render() {
        return (
          <>
           <FormGroup>
                <Label>Upload Image</Label>
                <Progress value={this.state.progress} max="100" className="progress" style={{width:'150px'}} />
                <Input type="file" onChange={this.handleChange} />
            <Button
              onClick={this.handleUpload}
              className="waves-effect waves-light btn">
              Upload
            </Button>
            
            </FormGroup>
          </>
        );
      }
    }
    


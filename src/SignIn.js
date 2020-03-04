import React from "react";
import { useFormik } from "formik";
import { Button, Row, Col, Input, Label, Form, FormGroup,Card } from "reactstrap";
import "./Signup.css";
import { Link } from "react-router-dom";
import firebase from "./fire";
import { useState } from "react";

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "!Invalid email address";
  }
  if (!values.passward) {
    errors.passward = "Alert! passward is required";
  } else if (values.passward.length < 6) {
    errors.passward = "!Invalid passward";
  }

  return errors;
};


const SignIn = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const [error,setError] =useState(null);
  const [mailError,setMailError] =useState(null);
  const [passError,setPassError] =useState(null);
  const formik = useFormik({
    initialValues: {
      passward: "",
      email: ""
    },
    validate,
    onSubmit: values => {
      console.log("shahir", values);

      // alert(JSON.stringify(values, null, 2));
    }
  });
  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(formik.values.email, formik.values.passward)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log("Error code", errorCode);
        var errorMessage = error.message;
        console.log("message", errorMessage);
        // ...
        setError(errorMessage);
      });
      setMailError(formik.errors.email);
      setPassError(formik.errors.passward);
      console.log("MailError",mailError);
      console.log("PassError",passError);
  };

  return (
    <div
      style={{
        background: "linear-gradient(#232c40, #333)",
        height: "776px",
        padding: "10%",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

      }}
    ><Card  style={{
      paddingLeft: "10px",
      width: "320px",
      borderRadius: "10px",
      position: "block",
      paddingTop: "20px",
      margin: "auto",
      height: "340px",
      
    }}>
      <Form
        className="form"
        onSubmit={formik.handleSubmit}
       
      >
        <Row>
          
          <Col md={6}>
            <FormGroup>
              <Label
                style={{
                  color: "#5c4705",
                  fontSize: "20px",
                  textShadow: "1px 1px 1px white"
                }}
                htmlFor="email"
              >
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                style={{
                  width: "300px",
                  color: "green",
                  fontSize: "20px",
                  height: "30px"
                }}
              />
              <p style={{color:'red'}}>{mailError}</p>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label
                style={{
                  color: "#5c4705",
                  fontSize: "20px",
                  textShadow: "1px 1px 1px white"
                }}
                htmlFor="passward"
              >
                Password
              </Label>
              <Input
                type="password"
                name="passward"
                id="passward"
                onChange={formik.handleChange}
                style={{
                  width: "300px",
                  color: "green",
                  fontSize: "20px",
                  height: "30px"
                }}
                value={formik.values.passward}
              />
              <p>{passError}</p>
              {/* {formik.errors.passward ? (
                <div className="error">{formik.errors.passward}</div>
              ) : null} */}
            </FormGroup>
          </Col>
        </Row>
                  
        <Button
          onClick={login}
          style={{
            marginTop: "5px",
            background: "linear-gradient(#232c40, #333)",
            width: "85px",
            borderRadius: "20px",
            height: "40px",
            float: "right",
            marginRight: "10px",
            fontSize: "18px",
            color: "white",
            boxShadow: "3px 2px 5px 1px #333",
            fontWeight: "normal",
            textShadow: "2px 2px black"
          }}
          type="submit"
        >
          Login
        </Button>
        <Link to="/SignUp">
          <Button
            style={{
              marginTop: "5px",
              background: "linear-gradient(#232c40, #333)",
              width: "85px",
              borderRadius: "20px",
              height: "40px",
              float: "left",
              marginRight: "20px",
              fontSize: "18px",
              color: "white",
              boxShadow: "3px 2px 5px 1px #333",
              fontWeight: "normal",
              textShadow: "2px 2px black"
            }}
            type="submit"
          >
            Signup
          </Button>
        </Link>
        {/* {JSON.stringify(formik.values, 1,null)} */}
      </Form>
          <p>{error}</p>
      </Card>
    </div>
  );
};
export default SignIn;

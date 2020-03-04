import React from "react";
import { db } from "./fire";
import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Label,
  Row,
  Form,
  FormGroup,
  Input,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Col,
  Badge
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTimesCircle,faStar,faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import Apps from "./Apps";
import firebase from "./fire";
import UserCard from "./UserCard";
import ImageUpload from "./ImageUpload";
import Object from "./Object";

const Home = props => {
  const [poster, setPoster] = useState([]);
  console.log("poster", poster);
  const copy = movieCope => {
     setPoster(movieCope);
  };

  const logOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="App" style={{ minHeight: "100%" }}>
      <Card className="header">
        <CardHeader
          style={{
            backgroundColor: "#313742",
            minheight: "100px",
            maxHeight: "150px"
          }}
        >
          <nav className="nav">
            <div className="movieIcon">
              <FontAwesomeIcon
                className="fa-2x"
                style={{
                  paddingRight: "15px",
                  height: "60px",
                  width: "60px",
                  marginTop: "4px"
                }}
                icon={faFilm}
              ></FontAwesomeIcon>
            </div>
            <div>
              <h3 style={{ paddingTop: "20px" }}>My-Movies</h3>
            </div>
          </nav>{" "}
          <InputForm copy={copy} />
          <div className="headBtn">
            <Button
              onClick={logOut}
              style={{
                display: "block",
                position: "relative",
                float: "right",
                marginTop: "-50px",
                marginLeft: "30px"
              }}
            >
              Logout
            </Button>
          </div>
        </CardHeader>
      </Card>
      <div className="div">
        <Row>
          {Object.map(obj => (
            <Apps
              key={obj.id}
              title={obj.title}
              muted={obj.muted}
              p={obj.p}
              img={obj.img}
              star={obj.star}
              pills={obj.pills}
              link={obj.link}
            />
          ))}

{poster &&
          poster.map(e => (
            <Col key={e.title}
              sm="12"
              md="4"
              lg="3"
              className="mainCard"
              style={{ marginLeft: "100px" }}
            >
              <div className="movie-card">
                <div className="image">
                  <img src={e.url} alt={"movie poster"} className="img" />
                  <Card className="inner ">
                    <h4 style={{ paddingLeft: "10px" }}>
                      <Link to={e.link}>{e.title}</Link>
                    </h4>
                    <h6 className="text-muted">{e.subTitle}</h6>
                    <p className="p">{e.description}</p>
                  </Card>
                </div>
                <Card className="card">
                  <div className="star">
                    <FontAwesomeIcon
                      className="fa-lg"
                      style={{ paddingRight: "1px" }}
                      icon={faStar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className="fa-lg"
                      style={{ paddingRight: "1px" }}
                      icon={faStar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className="fa-lg"
                      style={{ paddingRight: "1px" }}
                      icon={faStar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className="fa-lg"
                      style={{ paddingRight: "1px" }}
                      icon={faStar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className="fa-lg"
                      style={{ paddingRight: "1px" }}
                      icon={faStarHalfAlt}
                    ></FontAwesomeIcon>
                    <span className="badge">
                      <Badge color="primary" style={{ fontSize: "17px" }} pill>
                        4.3
                      </Badge>
                    </span>
                  </div>
                </Card>
              </div>
            </Col>
          ))}

          <UserCard obj={poster} />
        </Row>
      </div>
    </div>
  );
};
export default Home;

// Pop up form

const InputForm = props => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  const [movies, setMovies] = useState({
    title: "",
    subTitle: "",
    description: "",
    link: "",
    url: ""
  });
  const [movieCopy, setMovieCopy] = useState([]);
  console.log("movies copy", movieCopy);
  const image = url => {
    setMovies({
      title: movies.title,
      subTitle: movies.subTitle,
      description: movies.description,
      link: movies.link,
      url: url
    });
  };

  const submit = e => {
    e.preventDefault();
    db.collection("movies").add(movies);
    setMovies({
      title: "",
      subTitle: "",
      description: "",
      link: "",
      url: ""
    });
    console.log("movies", movies);
    const movieCope = [...movieCopy];
    movieCope.push(movies);

    setMovieCopy(movieCope);
    props.copy(movieCope);
  };

  return (
    <div style={{ float: "left", marginTop: "15px" }}>
      <Button id="Popover1" type="button">
        Add New Movies
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader>
          New Movies{" "}
          <FontAwesomeIcon
            onClick={toggle}
            style={{ color: "red", float: "right" }}
            icon={faTimesCircle}
          />
        </PopoverHeader>
        <PopoverBody>
          <Form onSubmit={submit}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                value={movies.title}
                onChange={e =>
                  setMovies({
                    title: e.target.value,
                    subTitle: movies.subTitle,
                    description: movies.description,
                    link: movies.link,
                    url: movies.url
                  })
                }
                name="title"
                id="title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="subTitle">Sub_Title</Label>
              <Input
                type="text"
                value={movies.subTitle}
                onChange={e =>
                  setMovies({
                    title: movies.title,
                    subTitle: e.target.value,
                    description: movies.description,
                    link: movies.link,
                    url: movies.url
                  })
                }
                name="subTitle"
                id="subTitle"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                value={movies.description}
                onChange={e =>
                  setMovies({
                    title: movies.title,
                    subTitle: movies.subTitle,
                    description: e.target.value,
                    link: movies.link,
                    url: movies.url
                  })
                }
                name="description"
                id="description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="link">Link</Label>
              <Input
                type="text"
                value={movies.link}
                onChange={e =>
                  setMovies({
                    title: movies.title,
                    subTitle: movies.subTitle,
                    description: movies.description,
                    link: e.target.value,
                    url: movies.url
                  })
                }
                name="link"
                id="link"
              />
              <ImageUpload image={image} /> {/* Image upload component */}
            </FormGroup>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button>Create</Button>
          </Form>
        </PopoverBody>
      </Popover>
    </div>
  );
};
export const copy = InputForm.movieCopy;

import a from "./images/a.jpg";
import b from "./images/b.jpg";
import c from "./images/c.jpg";
import d from "./images/d.jpg";
import e from "./images/e.jpg";
import {
    faStar,
    faStarHalfAlt
  } from "@fortawesome/free-solid-svg-icons";
const Object = 
    [
        { 
        id:1,
        p : "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.",
        title : "Joker",
        muted : "Ahaa! be smile",
        star : faStarHalfAlt,
        pills : "4.5",
        img:a,
        link:"/Joker"
        },
    {
        id:2,
        p:
        "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s.",
        title : "World War Z",
        muted : "third world war",
        star : faStarHalfAlt,
        pills : "4.5",
        img:b,
        link:"/World"
    },
    {
        id:3,
        p:
        "The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.",
        title: "In The Name Of King",
        muted: "Kingdom",
        star: faStar,
        pills: "5.0",
        img:c,
        link:"/King"
    },
    {
        id:4,
        p:
        "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain.",
        title: "The BFG",
        muted: "The big friend",
        star: faStarHalfAlt,
        pills: "4.2",
        img:d,
        link:"/BFG"
    }
    ,
    {
        id:5,
        p:
        " Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?",
        title: "Secret Brides Maids",
        muted: "Secret brides maids",
        star: faStarHalfAlt,
        pills: "3.9",
        img:e,
        link:"/Brides"
    }
    ]

export default Object;
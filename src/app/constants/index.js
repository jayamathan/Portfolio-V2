/*import {
  ANGULAR,
  CSS3,
  HTML5,
  REACT,
  REDUX,
  SASS,
  JAVASCRIPT,
  PIT_LOGO,
  MEDZIN_LOGO,
  MM_LOGO,
  DAUBLE_LOGO,
  TT_LOGO,
  INSTAGRAM,
  FACEBOOK,
  TWITTER,
  GITHUB
} from "../assets/imgs";*/

import instagram from "../assets/imgs/instagram-icon.svg";

import IMGS from "../assets/imgs";

export const SOCIAL_LINKS = [
  {
    id: 1,
    link: "https://www.instagram.com/jayamathan_s/",
    imgSrc: { instagram },
    name: "Instagram",
  },
  {
    id: 2,
    link: "https://www.facebook.com/jayamathan.skj",
    imgSrc: "https://cdn.svgporn.com/logos/facebook.svg",
    name: "Facebook",
  },
  {
    id: 3,
    link: "https://twitter.com/JayamathanSkj",
    imgSrc: "https://cdn.svgporn.com/logos/twitter.svg",
    name: "Twitter",
  },
  {
    id: 4,
    link: "https://github.com/jayamathan",
    imgSrc: "https://cdn.svgporn.com/logos/github-icon.svg",
    name: "Github",
  },
];

export const HEADER_LINKS = [
  {
    id: "home",
    name: "Home",
    to: "/",
  },
  {
    id: "about",
    name: "About",
    to: "/about",
  },
  {
    id: "mywork",
    name: "My Work",
    to: "/mywork",
  },
  {
    id: "contact",
    name: "Contact",
    to: "/contact",
  },
];

export const TOP_SKILLS = [
  // {
  //   name: "Angular JS",
  //   imgSrc: "https://cdn.svgporn.com/logos/angular.svg",
  //   rating: "03",
  // },
  {
    name: "React JS",
    imgSrc: "https://cdn.svgporn.com/logos/react.svg",
    rating: "03",
  },
  {
    name: "Redux",
    imgSrc: "https://cdn.svgporn.com/logos/redux.svg",
    rating: "03",
  },
  {
    name: "JavaScript",
    imgSrc: "https://cdn.svgporn.com/logos/javascript.svg",
    rating: "03",
  },
  {
    name: "NodeJs",
    imgSrc: "https://cdn.svgporn.com/logos/nodejs.svg",
    rating: "03",
  },
  {
    name: "Java",
    imgSrc: "https://cdn.svgporn.com/logos/java.svg",
    rating: "03",
  },
  {
    name: "MongoDB",
    imgSrc: "https://cdn.svgporn.com/logos/mongodb.svg",
    rating: "03",
  },
  {
    name: "Python",
    imgSrc: "https://cdn.svgporn.com/logos/python.svg",
    rating: "03",
  },
  {
    name: "CSS3",
    imgSrc: "https://cdn.svgporn.com/logos/css-3.svg",
    rating: "03",
  },
  {
    name: "SASS",
    imgSrc: "https://cdn.svgporn.com/logos/sass.svg",
    rating: "03",
  },
  {
    name: "HTML5",
    imgSrc: "https://cdn.svgporn.com/logos/html-5.svg",
    rating: "03",
  },
];

export const LOGO_URL = "../assets/imgs/logo.png";

export const EXPERIENCE = [
  {
    id: 1,
    time: "Jan'20 - Present",
    title: "Verizon",
    descriptiion:
      "Developed an internal issue tracking and project management product which increased project efficiency by 30%",
    designation: "Member of Technical Staff-II",
  },
  {
    id: 2,
    time: "Jun'17 - Jan'20",
    title: "Infosys Limited",
    descriptiion:
      "Worked on a European E-commerce Project named AVON and involved in various aspects including revamping of the website look, increasing user accessibility, and supported over 9 markets. Coordinated POC and increased project sales by 20%. Rewarded for High Performer in Infosys Mysore Training.",
    designation: "Senior Systems Engineer",
  },
  {
    id: 3,
    time: "Nov'15 - Jan'16",
    title: "HealthCare Technology Innovation Centre, IIT Madras",
    descriptiion:
      "Developed a prototype device using RFduino(RFD90101) platform, to control the device using an Android phone as a master",
    designation: "Research Intern",
  },
  {
    id: 3,
    time: "2013-2017",
    title: "Anna University(SREC, Coimbatore)",
    descriptiion: "Graduation & Young Leadership Award",
    designation: "B.E Electronics & Communication Enginnering",
  },
];

export const WORKED_WITH = [
  {
    id: 1,
    imgSrc: IMGS.PIT_LOGO,
  },
  {
    id: 2,
    imgSrc: IMGS.MM_LOGO,
  },
  {
    id: 3,
    imgSrc: IMGS.DAUBLE_LOGO,
  },
  {
    id: 4,
    imgSrc: IMGS.MEDZIN_LOGO,
  },
  {
    id: 5,
    imgSrc: IMGS.TT_LOGO,
  },
];

// eslint-disable-next-line
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  APP_NAME: "Reactor",
  ENV_TYPES: {
    PROD: "prod",
    STAG: "stag",
    LOCAL: "local",
  },
};

import React from "react";
import { Link } from "gatsby";
import Scrollspy from "react-scrollspy";
import InfoIcon from "@material-ui/icons/Info";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SchoolIcon from "@material-ui/icons/School";
import BookIcon from "@material-ui/icons/Book";
import { animateScroll as scroll, scroller } from "react-scroll";

export const data = [
  {
    id: 1,
    text: "about",
    url: "/",
    icon: <InfoIcon />,
  },
  {
    id: 2,
    text: "skills",
    url: "/about/",
    icon: <BuildIcon />,
  },
  {
    id: 3,
    text: "services",
    url: "/projects/",
    icon: <VerifiedUserIcon />,
  },
  {
    id: 4,
    text: "interests",
    url: "/blog/",
    icon: <SportsBasketballIcon />,
  },
  {
    id: 5,
    text: "experience",
    url: "/contact/",
    icon: <WorkIcon />,
  },
  {
    id: 6,
    text: "education",
    url: "/contact/",
    icon: <SchoolIcon></SchoolIcon>,
  },
  {
    id: 7,
    text: "contact",
    url: "/contact/",
    icon: <BookIcon />,
  },
];

const scrollToTop = () => {
  scroll.scrollToTop();
};

const scrollTo = (e, to) => {
  e.preventDefault();
  scroller.scrollTo(to, {
    duration: 800,
    delay: 60,
    smooth: "easeInOutQuart",
  });
};

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <a onClick={(e) => scrollTo(e, link.text)} href={`#${link.text}`}>
        {link.text}
      </a>
    </li>
  );
});
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <Scrollspy
      items={data.map((d) => d.text)}
      currentClassName="is-current"
      offset={-5}
      className={`page-links ${styleClass ? styleClass : ""}`}
    >
      {tempLinks}
    </Scrollspy>
  );
};

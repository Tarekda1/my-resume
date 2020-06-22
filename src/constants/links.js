import React from "react";
import { Link } from "gatsby";
import Scrollspy from "react-scrollspy";
import { animateScroll as scroll, scroller } from "react-scroll";

const data = [
  {
    id: 1,
    text: "about",
    url: "/",
  },
  {
    id: 2,
    text: "skills",
    url: "/about/",
  },
  {
    id: 3,
    text: "services",
    url: "/projects/",
  },
  {
    id: 4,
    text: "interests",
    url: "/blog/",
  },
  {
    id: 5,
    text: "experience",
    url: "/contact/",
  },
  {
    id: 6,
    text: "education",
    url: "/contact/",
  },
  {
    id: 7,
    text: "contact",
    url: "/contact/",
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

import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import PersonalList from "./PersonalList";

const query = graphql`
  {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query);
  return (
    <div className="row">
      <div className="col-12">
        <header id="about" className="hero card">
          <div className="section-center hero-center">
            <div className="hero-img-wrapper">
              <Image fixed={fixed} className="hero-img" />
              <SocialLinks />
            </div>
            <article className="hero-info">
              <div>
                <div className="underline"></div>
                <h2>Tarek Daaboul</h2>
                <h4>Fullstack & Mobile developer</h4>
                <div className="info-contact">
                  <Link to="/downloadCV" className="btn">
                    Download CV
                  </Link>
                  <Link to="/contact" className="btn">
                    contact me
                  </Link>
                </div>
                <div className="personal-info-wrap">
                  <PersonalList />
                </div>
              </div>
            </article>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Hero;

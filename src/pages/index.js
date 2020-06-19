import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Interests from "../constants/Interests";
import Experiences from "../components/Experiences";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default () => {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Services />
      <Interests />
      <Experiences />
      <Education />
      <Contact />
    </Layout>
  );
};

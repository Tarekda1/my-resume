import React from "react";
import SubTitle from "./SubTitle";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="row" id="skills">
      <div className="col-12">
        <section className="section">
          <SubTitle title="Technical Skills" />
          <div className="section-kills">
            <div className="skills-1">
              <div className="card">
                <Skill title="HTML5" width="80%" style="blue-bar" />
                <Skill title="CSS3" width="85%" style="red-bar" />
                <Skill title="Javascript" width="90%" style="green-bar" />
                <Skill title="C#" width="80%" style="yellow-bar" />
              </div>
            </div>
            <div className="skills-2">
              <div className="card">
                <div className="mb-30">
                  <Skill title="Nodejs" width="75%" style="red-bar" />
                  <Skill title="Reactjs" width="80%" style="blue-bar" />
                  <Skill title="React Native" width="70%" style="yellow-bar" />
                  <Skill title="Android" width="75%" style="red-bar" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;

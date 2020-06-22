import React from "react";
import SubTitle from "./SubTitle";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="row" id="skills">
      <div className="col-12">
        <section className="section">
          <div className="section-kills">
            <div className="skills-1">
              <SubTitle title="Technical Skills" />
              <div className="card">
                <Skill title="HTML" width="80%" style="blue-bar" />
                <Skill title="CSS" width="85%" style="red-bar" />
                <Skill title="Reactjs" width="90%" style="green-bar" />
                <Skill title="Nodejs" width="80%" style="yellow-bar" />
              </div>
            </div>
            <div className="skills-2">
              <SubTitle title="Soft Skills" />
              <div className="card">
                <div className="mb-30">
                  <Skill title="Communication" width="80%" style="blue-bar" />
                  <Skill title="Language" width="70%" style="yellow-bar" />
                  <Skill
                    title="General Knowledge"
                    width="75%"
                    style="red-bar"
                  />
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

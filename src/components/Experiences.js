import React from "react";
import { experiences } from "../constants/data";
import SubTitle from "../components/SubTitle";
import Experience from "./Experience";

const Experiences = () => {
  return (
    <div className="row" id="experience">
      <div className="col-12">
        <section className="section-wrapper section">
          <SubTitle title="Experience" />
          <div className="section-experience">
            {experiences.map((experience) => {
              return (
                <Experience
                  key={experience.id}
                  title={experience.title}
                  jobDesc={experience.text}
                  badge={experience.badge}
                  date={experience.date}
                  institute={experience.institute}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experiences;

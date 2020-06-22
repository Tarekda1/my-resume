import React from "react";
import { collages } from "../constants/data";
import SubTitle from "./SubTitle";
import CollageItem from "./CollageItem";

const Education = () => {
  return (
    <div className="row" id="education">
      <div className="col-12">
        <section className="section-wrapper section">
          <SubTitle title="Education" />
          <div className="section-education">
            {collages.map((experience) => {
              return (
                <CollageItem
                  key={experience.id}
                  title={experience.title}
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

export default Education;

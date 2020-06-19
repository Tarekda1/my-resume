import React from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { GiGamepad } from "react-icons/gi";
import { FcSportsMode, FcReading } from "react-icons/fc";
import { RiMovieLine } from "react-icons/ri";
import SubTitle from "../components/SubTitle";

const data = [
  {
    id: 1,
    icon: <BsMusicNoteBeamed className="interest-icon"></BsMusicNoteBeamed>,
    text: "music",
  },
  {
    id: 2,
    icon: <GiGamepad className="interest-icon"></GiGamepad>,
    text: "gaming",
  },
  {
    id: 3,
    icon: <FcSportsMode className="interest-icon"></FcSportsMode>,
    text: "sports",
  },
  {
    id: 4,
    icon: <RiMovieLine className="interest-icon"></RiMovieLine>,
    text: "movies",
  },
  {
    id: 5,
    icon: <RiMovieLine className="interest-icon"></RiMovieLine>,
    text: "reading",
  },
];

const interestsList = data.map((interest) => {
  return (
    <div key={interest.id} className="card">
      <div className="interest-item">
        {interest.icon}
        <span>{interest.text}</span>
      </div>
    </div>
  );
});

export default (styleClass) => {
  return (
    <div className="row">
      <div className="col-12">
        <SubTitle title="Interests" />
        <section className={`interest-section ${styleClass}`}>
          {interestsList}
        </section>
      </div>
    </div>
  );
};

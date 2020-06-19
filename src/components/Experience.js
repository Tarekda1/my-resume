import React from "react";

const Experience = ({ badge, date, title, jobDesc, institute }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-badge">{badge}</div>
      <div className="card">
        <div className="timeline-heading">
          <h4 className="mb-10">{title}</h4>
          <span className="duration mb-5">{date}</span>
          <span class="institution">{institute}</span>
        </div>
        <div className="timeline-body">
          <p className="mt-25">{jobDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;

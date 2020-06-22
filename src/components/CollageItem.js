import React from "react";

const CollageItem = ({ date, title, institute }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-badge"></div>
      <div className="card">
        <div className="timeline-heading">
          <h4 className="mb-10">{title}</h4>
          <span className="duration mb-5">{date}</span>
          <span className="institution">{institute}</span>
        </div>
      </div>
    </div>
  );
};

export default CollageItem;

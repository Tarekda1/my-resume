import React from "react";

const Skill = ({ title, width, style }) => {
  return (
    <div className="mb-30">
      <span className="progress-cat">{title}</span>
      <div className="progress-bar-graph">
        <div className="progress-bar-wrap">
          <div className={`bar-wrap ${style}`}>
            <span style={{ width: `${width}` }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

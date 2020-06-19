import React from "react";

const SubTitle = ({ title, styleClass }) => {
  return (
    <div className={`section-sub-title ${styleClass}`}>
      <h3>{title || "default title"}</h3>
      <div className="sub-underline"></div>
    </div>
  );
};

export default SubTitle;

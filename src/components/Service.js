import React from "react";

const Service = ({ icon, title, desc }) => {
  return (
    <div className="card service">
      {icon}
      <h4 className="service-title">{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Service;

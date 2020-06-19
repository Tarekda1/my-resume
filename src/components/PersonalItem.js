import React from "react";

const PersonalItem = ({ title, value }) => {
  return (
    <li>
      <div className="profile-title">{title}</div>
      <div className="profile-desc">{value}</div>
    </li>
  );
};

export default PersonalItem;

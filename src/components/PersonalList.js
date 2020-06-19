import React from "react";
import PersonalItem from "./PersonalItem";

const PersonalList = () => {
  return (
    <ul className="personal-list">
      <PersonalItem title="age" value="34" />
      <PersonalItem
        title="address"
        value="Bshamoun, al madaris, andalus street"
      />
      <PersonalItem title="email" value="tare2.da@gmail.com" />
      <PersonalItem title="phone" value="9613974338" />
    </ul>
  );
};

export default PersonalList;

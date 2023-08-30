import React from "react";

const UserName = ({ title, firstName, lastName }) => (
  <h2>{`${title}. ${firstName} ${lastName}`}</h2>
);

export default UserName;

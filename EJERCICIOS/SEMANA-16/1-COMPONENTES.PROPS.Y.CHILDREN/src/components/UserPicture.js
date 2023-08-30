import React from "react";

const UserPicture = ({ pictureUrl, altText }) => (
  <img src={pictureUrl} alt={altText} />
);

export default UserPicture;

import React from "react";

import UserPicture from "./UserPicture";
import UserName from "./UserName";
import UserLocation from "./UserLocation";

const User = ({ user }) => {
  const { picture, name, location, dob } = user;
  const isMinor = dob.age < 18;

  return (
    <div className={`user-card ${isMinor ? "minor" : ""}`}>
      <UserPicture pictureUrl={picture.large} altText={name.first} />
      <UserName
        title={name.title}
        firstName={name.first}
        lastName={name.last}
      />
      <UserLocation
        street={location.street}
        city={location.city}
        state={location.state}
        country={location.country}
      />

      {isMinor && <div className="minor-indicator">Es Menor</div>}
    </div>
  );
};

export default User;

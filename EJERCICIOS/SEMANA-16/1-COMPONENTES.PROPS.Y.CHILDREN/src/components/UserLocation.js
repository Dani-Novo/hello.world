import React from "react";

const UserLocation = ({ street, city, state, country }) => (
  <p>{`${street.number} ${street.name}, ${city}, ${state}, ${country}`}</p>
);

export default UserLocation;

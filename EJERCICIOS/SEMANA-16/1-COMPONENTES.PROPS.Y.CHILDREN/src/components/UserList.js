import React from "react";

import User from "./User";
import userData from "../users.json";

const UserList = () => (
  <div className="user-list">
    {userData.map((user, index) => (
      <User key={index} user={user} />
    ))}
  </div>
);

export default UserList;

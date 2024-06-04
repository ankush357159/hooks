import React from "react";
import { UserProvider } from "../UserProvider";
import UserComponent from "./UserComponent";
import "./Users.css";

const Users = () => {
  return (
    <UserProvider>
      <div className="users">
        <h1>User Information</h1>
        <UserComponent />
      </div>
    </UserProvider>
  );
};

export default Users;

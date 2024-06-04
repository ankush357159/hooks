import React from "react";

const NameComponent = ({ users }) => {
  return (
    <div className="user-section">
      {users &&
        users.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>City: {user.address.city}</p>
          </div>
        ))}
    </div>
  );
};

export default NameComponent;

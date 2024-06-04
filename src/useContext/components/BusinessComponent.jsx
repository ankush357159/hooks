import React from "react";

const BusinessComponent = ({ users }) => {
  return (
    <div className="user-section">
      {users &&
        users.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>Company: {user.company.name}</p>
            <p>Catch Phrase: {user.company.catchPhrase}</p>
            <p>Business: {user.company.bs}</p>
          </div>
        ))}
    </div>
  );
};

export default BusinessComponent;

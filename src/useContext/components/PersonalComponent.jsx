import React from 'react';

const PersonalComponent = ({ users }) => {
    return (
        <div className="user-section">
            {users && users.map(user => (
                <div key={user.id} className="user-card">
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default PersonalComponent;

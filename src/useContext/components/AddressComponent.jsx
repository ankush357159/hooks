import React from 'react';

const AddressComponent = ({ users }) => {
    return (
        <div className="user-section">
            {users && users.map(user => (
                <div key={user.id} className="user-card">
                    <h2>{user.name}</h2>
                    <p>Street: {user.address.street}</p>
                    <p>Suite: {user.address.suite}</p>
                    <p>City: {user.address.city}</p>
                    <p>Zipcode: {user.address.zipcode}</p>
                </div>
            ))}
        </div>
    );
};

export default AddressComponent;

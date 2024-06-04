import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import NameComponent from './NameComponent';
import BusinessComponent from './BusinessComponent';
import AddressComponent from './AddressComponent';
import PersonalComponent from './PersonalComponent';
import './UserComponent.css';

const UserComponent = () => {
    const { users, loading, error } = useContext(UserContext);

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error.message}</div>;
    }

    return (
        <div className="user-container">
            <NameComponent users={users} />
            <BusinessComponent users={users} />
            <AddressComponent users={users} />
            <PersonalComponent users={users} />
        </div>
    );
};

export default UserComponent;

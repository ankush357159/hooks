import React, { useEffect, useState } from "react";
import fetchDataFromExternalSystem from "../../services/fetchDataFromExternalSystem";
import "./ExternalDataComponent.css";

const ExternalDataComponent = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchDataFromExternalSystem().then((response) => setData(response));
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {data ? (
        <div style={{ width: "70%" }}>
          <h2 style={{ textAlign: "center" }}>Data from external system</h2>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ExternalDataComponent;

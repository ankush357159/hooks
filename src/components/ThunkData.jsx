import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../slices/contentSlice";

const ThunkData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const tableStyle = {
    width: "80%",
    margin: "20px auto",
    borderCollapse: "collapse",
    border: "2px solid #ff4081",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    animation: "fadeIn 1s ease-in-out",
  };

  const cellStyle = {
    padding: "12px 15px",
    border: "1px solid #ff4081",
    textAlign: "left",
    fontSize: "16px",
    color: "#555",
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: "#ff4081",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>UserName</th>
            <th style={headerStyle}>Email</th>
            <th style={headerStyle}>Phone</th>
            <th style={headerStyle}>Website</th>
            <th style={headerStyle}>Address</th>
          </tr>
        </thead>
        <tbody>
          {contents &&
            contents.map((content) => (
              <tr key={content.id}>
                <td style={cellStyle}>{content.name}</td>
                <td style={cellStyle}>{content.username}</td>
                <td style={cellStyle}>{content.email}</td>
                <td style={cellStyle}>{content.phone}</td>
                <td style={cellStyle}>{content.website}</td>
                <td style={cellStyle}>{`${content.address.street}, ${content.address.city}`}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <style jsx>{`
        .loading {
          font-size: 24px;
          font-weight: bold;
          color: #ff4081;
          text-align: center;
          animation: pulse 1s infinite;
        }
        .error {
          font-size: 18px;
          color: red;
          text-align: center;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ThunkData;

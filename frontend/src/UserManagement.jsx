import React, { useState } from "react";
import AddUser from "./components/AddUser.jsx";
import UserList from "./components/UserList.jsx";

const UserManagement = () => {
  const [userListKey, setUserListKey] = useState(0);
  
  const handleUserAdded = () => {
    // Force UserList to re-fetch data by changing its key
    setUserListKey(prevKey => prevKey + 1);
  };
  
  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "16px",

  };
  
  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "32px",
    textAlign: "center",
    color: "#1F2937"
  };
  
  const gridStyle = {
    // display: "grid",
    // gridTemplateColumns: "1fr",
    // gap: "24px"
    display: "flex",
    gap:"24px",
  };
  
  // Media query handling for responsive layout
  const mediaQueryStyle = `
    @media (min-width: 768px) {
      .grid-container {
        grid-template-columns: 1fr 1fr;
      }
    }
  `;
  
  return (
    <div style={containerStyle}>
      <style>{mediaQueryStyle}</style>
      <h1 style={headingStyle}>User Management System</h1>
      
      <div className="grid-container" style={gridStyle}>
        <AddUser onUserAdded={handleUserAdded} />
        <UserList key={userListKey} />
      </div>
    </div>
  );
};

export default UserManagement;
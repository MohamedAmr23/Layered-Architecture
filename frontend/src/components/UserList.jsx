// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/users")
//       .then(res => setUsers(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user._id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load users. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const containerStyle = {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif"
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px"
  };

  const headingStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#333",
    margin: "0"
  };

  const refreshButtonStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    color: "#4B5563",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer"
  };

  const errorStyle = {
    marginBottom: "16px",
    padding: "12px",
    backgroundColor: "#FEE2E2",
    color: "#B91C1C",
    borderRadius: "4px"
  };

  const loadingStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "24px 0"
  };

  const spinnerStyle = {
    border: "2px solid #f3f3f3",
    borderTop: "2px solid #3B82F6",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    animation: "spin 1s linear infinite"
  };

  const emptyMessageStyle = {
    textAlign: "center",
    padding: "24px 0",
    color: "#6B7280"
  };

  const userListStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
    borderTop: "1px solid #E5E7EB"
  };

  const userItemStyle = {
    padding: "16px 8px",
    borderBottom: "1px solid #E5E7EB",
    transition: "background-color 0.2s"
  };

  const userContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const userInfoStyle = {
    display: "flex",
    flexDirection: "column"
  };

  const userNameStyle = {
    fontWeight: "500",
    color: "#111827",
    marginBottom: "4px"
  };

  const userEmailStyle = {
    fontSize: "14px",
    color: "#6B7280"
  };

  const badgeStyle = {
    backgroundColor: "#DBEAFE",
    color: "#1E40AF",
    fontSize: "12px",
    fontWeight: "500",
    padding: "2px 8px",
    borderRadius: "9999px"
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={headingStyle}>User List</h2>
        <button onClick={fetchUsers} style={refreshButtonStyle}>
          <svg 
            style={{width: "16px", height: "16px", marginRight: "4px"}} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
          Refresh
        </button>
      </div>

      {error && <div style={errorStyle}>{error}</div>}
      
      {loading ? (
        <div style={loadingStyle}>
          <div style={{
            ...spinnerStyle,
            animation: "spin 1s linear infinite"
          }}>
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
          </div>
        </div>
      ) : users.length === 0 ? (
        <p style={emptyMessageStyle}>No users found. Add a new user to get started.</p>
      ) : (
        <ul style={userListStyle}>
          {users.map((user) => (
            <li 
              key={user._id} 
              style={userItemStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#F9FAFB";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div style={userContentStyle}>
                <div style={userInfoStyle}>
                  <p style={userNameStyle}>{user.name}</p>
                  <p style={userEmailStyle}>{user.email}</p>
                </div>
                <span style={badgeStyle}>User</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;

// import React, { useState } from "react";
// import axios from "axios";

// const AddUser = ({ onUserAdded }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/api/users", { name, email });
//     setName("");
//     setEmail("");
//     onUserAdded();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <button type="submit">Add User</button>
//     </form>
//   );
// };

// export default AddUser;
import React, { useState } from "react";
import axios from "axios";

const AddUser = ({ onUserAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      setIsSubmitting(true);
      await axios.post("http://localhost:5000/api/users", { name, email });
      setName("");
      setEmail("");
      onUserAdded();
    } catch (err) {
      setError("Failed to add user. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerStyle = {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif"
  };

  const headingStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#333"
  };

  const errorStyle = {
    marginBottom: "16px",
    padding: "12px",
    backgroundColor: "#FEE2E2",
    color: "#B91C1C",
    borderRadius: "4px"
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  };

  const fieldStyle = {
    marginBottom: "12px"
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "4px",
    color: "#4B5563"
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "4px",
    border: "1px solid #D1D5DB",
    fontSize: "14px",
    boxSizing: "border-box"
  };

  const buttonStyle = {
    backgroundColor: isSubmitting ? "#60A5FA" : "#3B82F6",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: isSubmitting ? "default" : "pointer",
    width: "100%",
    opacity: isSubmitting ? "0.7" : "1",
    transition: "background-color 0.3s"
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Add New User</h2>
      {error && <div style={errorStyle}>{error}</div>}
      
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={fieldStyle}>
          <label htmlFor="name" style={labelStyle}>
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        
        <div style={fieldStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          style={buttonStyle}
          onMouseOver={(e) => {
            if (!isSubmitting) e.target.style.backgroundColor = "#2563EB";
          }}
          onMouseOut={(e) => {
            if (!isSubmitting) e.target.style.backgroundColor = "#3B82F6";
          }}
        >
          {isSubmitting ? "Adding..." : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default AddUser;
import React, { useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UserManagement from "./UserManagement.jsx";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      {/* <h1>Layered Architecture Example</h1>
      <AddUser onUserAdded={() => setRefresh(!refresh)} />
      <UserList key={refresh} /> */}
      <UserManagement/>
    </div>
  );
}

export default App;

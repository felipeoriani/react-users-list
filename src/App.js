import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userData, setUserData] = useState([
    { id: 1, username: "John", age: 21 },
    { id: 2, username: "Paul", age: 22 },
    { id: 3, username: "Ringo", age: 23 },
    { id: 4, username: "George", age: 20 },
  ]);

  const onAddUserHandler = (user) => {
    setUserData((prevUserData) => [...prevUserData, user]);
  };

  const onRemoveHandler = (user) => {
    setUserData((prevUserData) => prevUserData.filter((u => u !== user)));
  }

  return (
    <>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList items={userData} onRemove={onRemoveHandler} />
    </>
  );
};

export default App;

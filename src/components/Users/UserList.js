import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const onClickHandler = (user) => {
    props.onRemove(user);
  };

  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((user) => (
          <li key={user.id} onClick={() => onClickHandler(user)}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

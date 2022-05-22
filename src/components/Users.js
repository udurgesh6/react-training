import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";

const Users = () => {
  const users = useSelector((state) => state.users);
  const [proName, setProName] = useState("");
  const dispatch = useDispatch();

  const onUserAdd = () => {
    dispatch(
      addUser({
        id: users.length + 1,
        name: proName,
        age: 23,
      })
    );
    setProName("");
  };

  const onDeleteUser = (id) => {
    dispatch(
      removeUser({
        id: id,
      })
    );
  };

  return (
    <div>
      <p>This are my users</p>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.id} {user.name} {user.age}
          </p>
          <button onClick={() => onDeleteUser(user.id)}>
            Delete this user
          </button>
        </div>
      ))}
      <input value={proName} onChange={(e) => setProName(e.target.value)} />
      <button onClick={onUserAdd}>Add user</button>
    </div>
  );
};

export default Users;

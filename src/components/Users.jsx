import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <p data-testid={`user-item-${user.id}`} key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
};

export default Users;

import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.ir/users/1");
      setUser(response.data)
    } catch (err) {
      console.log(err);
    }
    setLoading(false)
  };

  return (
    <div>
      <form action="">
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={(e) => handleSubmit(e)}
          disabled={!username || !password}
          type="submit"
        >
          {loading ? "please wait" : "Submit"}
        </button>
        <span
          style={{ visibility: error ? "visible" : "hidden" }}
          data-testid="errorMsg"
        >
          something went wrong
        </span>
      </form>
      <span>{user?.name}</span>
    </div>
  );
};

export default Login;

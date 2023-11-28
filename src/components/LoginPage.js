import { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LoginPage = () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = { username, password };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/api/login", user)
      .then((res) => {
        //console.log("Form submit edildi!", { user });

        const token = res.data.token;
        localStorage.setItem("token", token);
        history.push("/friends");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <h1>LOGIN</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            USERNAME
            <br />
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </label>
          <br />
          <label>
            PASSWORD
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <br />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

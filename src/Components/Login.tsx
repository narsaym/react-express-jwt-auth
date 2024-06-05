import { MouseEvent, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post(
        "/api/login",
        {
          userName: userName,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        context?.setName(res.data.name);
        context?.setAuthenticated(true);
        navigate("/profile");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <form>
      <div>
        <input
          type="text"
          name="userName"
          autoComplete="off"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          name="passWord"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
      </div>
    </form>
  );
};
export default Login;

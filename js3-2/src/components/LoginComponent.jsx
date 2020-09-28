import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/context";
import UserKit from "../data/userKit";
import { CustomerDiv } from "./styled/StyledComponents";

export default function LoginComponent() {
  const { loginEmail, setLoginEmail, loginPassword, setLoginPassword } = useContext(UserContext);

  const userKit = new UserKit();
  const history = useHistory();

  function handleLogin() {
    userKit
      .login(loginEmail, loginPassword)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);
        history.push("/home");
      });
  }

  return (
    <CustomerDiv>
      <h2>Login</h2>
      <input placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
      <input placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
      <button onClick={handleLogin}>Login!</button>
    </CustomerDiv>
  );
}

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/userKit";
import LoginComponent from "./LoginComponent";
import { CustomerDiv } from "./styled/StyledComponents";

export default function ActivateAccountComponent() {
  //   const [loginEmail, setLoginEmail] = useState("");
  //   const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);

  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  const userKit = new UserKit();

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  }

  return (
    <CustomerDiv>
      {uid && token ? (
        <CustomerDiv>
          <h2>Activate Account</h2>
          <button onClick={handleActivateUser}>Activate User</button>
        </CustomerDiv>
      ) : (
        <LoginComponent />
      )}
    </CustomerDiv>
  );
}

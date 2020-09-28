import React, { useState, useEffect } from "react";
import { InputDiv } from "./styled/StyledComponents";
import UserKit from "../data/userKit";

export default function UserLogged() {
  const userKit = new UserKit();

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    userKit
      .userInfo()
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.firstName + " " + data.lastName + " - " + data.email);
      });
  }, [window.location]);

  return (
    <InputDiv>
      <h1>Business Project</h1>
      <p>Logged in as: {currentUser}</p>
    </InputDiv>
  );
}

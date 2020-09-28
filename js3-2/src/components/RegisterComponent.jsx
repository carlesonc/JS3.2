import React, { useState } from "react";
import UserKit from "../data/userKit";
import { InputDiv } from "./styled/StyledComponents";

export default function RegisterComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const userKit = new UserKit();

  const inputObjects = [
    ["First Name", firstName, setFirstName],
    ["Last Name", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organisation Name", organisationName, setOrganisationName],
    ["Organisation Kind (0,1,2)", organisationKind, setOrganisationKind],
  ];

  function renderInput(index, placeholder, stateVariable, stateSetVariable) {
    return (
      <InputDiv key={index}>
        <label>{placeholder}</label>
        <input placeholder={placeholder} value={stateVariable} onChange={(e) => stateSetVariable(e.target.value)} />
      </InputDiv>
    );
  }

  function handleRegister() {
    userKit.register(firstName, lastName, email, password, organisationName, organisationKind);
  }

  return (
    <div>
      <h2>Register</h2>
      <p>Enter details to register</p>

      {inputObjects.map((inputItem, index) => {
        return renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
      })}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

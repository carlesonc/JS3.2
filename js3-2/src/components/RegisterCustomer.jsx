import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/userKit";
import { CustomerDiv, InputDiv } from "./styled/StyledComponents";

export default function RegisterCustomer() {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const userKit = new UserKit();
  let history = useHistory();

  const inputObjects = [
    ["Customer Name", name, setName],
    ["OrganisationNr", organisationNr, setOrganisationNr],
    ["vatNr", vatNr, setVatNr],
    ["reference", reference, setReference],
    ["paymentTerm", paymentTerm, setPaymentTerm],
    ["website", website, setWebsite],
    ["Email", email, setEmail],
    ["phoneNumber", phoneNumber, setPhoneNumber],
  ];

  function renderInput(index, placeholder, stateVariable, stateSetVariable) {
    if (placeholder == "paymentTerm") {
      return (
        <InputDiv key={index}>
          <label>{placeholder}</label>
          <input
            placeholder={placeholder}
            value={stateVariable}
            type="number"
            onChange={(e) => stateSetVariable(e.target.value)}
          />
        </InputDiv>
      );
    } else {
      return (
        <InputDiv key={index}>
          <label>{placeholder}</label>
          <input placeholder={placeholder} value={stateVariable} onChange={(e) => stateSetVariable(e.target.value)} />
        </InputDiv>
      );
    }
  }

  function handleRegister() {
    userKit
      .setCustomer(name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber)
      .then((res) => {
        res.ok
          ? history.go()
          : alert(
              "Customer creation failed; Check that you dont already have 10 customers. That you have entered numbers in the 'paymentTerm'-field. That the email is correct. Only the 'Customer Name'- and 'paymentTerm'-fields are required."
            );
      });
  }

  return (
    <CustomerDiv>
      <h2>Create new customer</h2>

      {inputObjects.map((inputItem, index) => {
        return renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
      })}
      <button onClick={handleRegister}>Register</button>
    </CustomerDiv>
  );
}

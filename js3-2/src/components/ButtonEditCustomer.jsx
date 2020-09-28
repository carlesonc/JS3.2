import React, { useState, useEffect } from "react";
import UserKit from "../data/userKit";
import { useHistory } from "react-router-dom";
import { CustomerDiv, InputDiv } from "./styled/StyledComponents";
export default function ButtonEditCustomer(url) {
  const [customerName, setCustomerName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const history = useHistory();
  const userKit = new UserKit();

  const id = url.id;

  function getCustomer() {
    userKit
      .getCustomer(id)
      .then((res) => res.json())
      .then((data) => {
        setCustomerName(data.name);
        setOrganisationNr(data.organisationNr);
        setVatNr(data.vatNr);
        setReference(data.reference);
        setPaymentTerm(data.paymentTerm);
        setWebsite(data.website);
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
      });
  }

  useEffect(() => {
    getCustomer();
  }, []);

  const inputObjects = [
    ["Customer Name", customerName, setCustomerName],
    ["Organisation Nr", organisationNr, setOrganisationNr],
    ["vat Nr", vatNr, setVatNr],
    ["Reference", reference, setReference],
    ["Payment Term", paymentTerm, setPaymentTerm],
    ["Website", website, setWebsite],
    ["Email", email, setEmail],
    ["Phone Number", phoneNumber, setPhoneNumber],
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

  function handleEdit() {
    userKit
      .editCustomer(id, customerName, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber)
      .then((res) => {
        res.ok
          ? history.go()
          : alert(
              "Customer creation failed; Check that you have entered numbers in the 'paymentTerm'-field. That the email is correct. Only the 'Customer Name'- and 'paymentTerm'-fields are required."
            );
      });
  }

  return (
    <CustomerDiv>
      <h2>Edit Customer</h2>

      {inputObjects.map((inputItem, index) => {
        return renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
      })}
      <button onClick={handleEdit}>Save Edit</button>
    </CustomerDiv>
  );
}

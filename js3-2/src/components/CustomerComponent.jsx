import React, { useState, useEffect } from "react";
import UserKit from "../data/userKit";
import ButtonBack from "./ButtonBack";
import ButtonDeleteCustomer from "./ButtonDeleteCustomer";
import ButtonEditCustomer from "./ButtonEditCustomer";

export default function CustomerComponent(url) {
  const userKit = new UserKit();
  const [customer, setCustomer] = useState(null);
  const id = url.id;

  function getCustomer() {
    userKit
      .getCustomer(id)
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data);
      });
    renderCustomer();
  }

  useEffect(() => {
    getCustomer();
  }, []);

  const [showOtherComponent, setShowOtherComponent] = useState(false);
  function renderCustomer() {
    return customer ? (
      <div key={customer.id}>
        <h2>Customer Name: {customer.name}</h2>
        <h4>Customer ID: {customer.id}</h4>
        <h4>Organisation number: {customer.organisationNr}</h4>
        <h4>Referens: {customer.reference}</h4>
        <h4>Payment term: {customer.paymentTerm}</h4>
        <h4>Website: {customer.website}</h4>
        <h4>Email: {customer.email}</h4>
        <h4>Phone number: {customer.phoneNumber}</h4>

        {!showOtherComponent ? <ButtonDeleteCustomer id={customer.id} /> : <ButtonEditCustomer id={customer.id} />}
        <button onClick={() => setShowOtherComponent(!showOtherComponent)}>
          {showOtherComponent ? "Cancel Edit" : "Edit Customer"}
        </button>
      </div>
    ) : (
      <>
        <h1>Customer not found.</h1>
      </>
    );
  }

  return (
    <>
      {renderCustomer()}
      <ButtonBack />
    </>
  );
}

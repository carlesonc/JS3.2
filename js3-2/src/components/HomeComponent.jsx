import React, { useState, useEffect } from "react";
import UserKit from "../data/userKit";
import RegisterCustomer from "./RegisterCustomer";
import { CustomerDiv } from "./styled/StyledComponents";

export default function HomeComponent() {
  const [customerList, setCustomerList] = useState(null);
  const userKit = new UserKit();

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
      });

    renderCustomerList();
  }

  function renderCustomerList() {
    return customerList ? (
      customerList.map((customer, index) => {
        return (
          <a href={"/customer/" + customer.id} key={customer.id} className={index}>
            <h3>{customer.name}</h3>
          </a>
        );
      })
    ) : (
      <h3>There are no customers to show</h3>
    );
  }

  renderCustomerList();

  useEffect(() => {
    getCustomerList();
    renderCustomerList();
  }, []);

  return (
    <CustomerDiv>
      <h2>Customers</h2>

      {renderCustomerList()}

      <RegisterCustomer />
    </CustomerDiv>
  );
}

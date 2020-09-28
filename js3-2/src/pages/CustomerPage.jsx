import React from "react";
import CustomerComponent from "../components/CustomerComponent";
import { CustomerDiv } from "../components/styled/StyledComponents";

export default function CustomerPage() {
  let url = window.location.href;
  url = url.split("/");
  url = url.pop();

  return (
    <CustomerDiv>
      <CustomerComponent id={url} />
    </CustomerDiv>
  );
}

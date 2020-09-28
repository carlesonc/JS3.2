import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ActivateAccountPage from "./pages/ActivateAccountPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { UserContext } from "./context/context";
import CustomerPage from "./pages/CustomerPage";
import UserLogged from "./components/UserLogged";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);

  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  return (
    <div>
      <UserContext.Provider
        value={{
          firstName,
          setFirstName,
          lastName,
          setLastName,
          email,
          setEmail,
          password,
          setPassword,
          organisationName,
          setOrganisationName,
          organisationKind,
          setOrganisationKind,
          loginEmail,
          setLoginEmail,
          loginPassword,
          setLoginPassword,
          uid,
          setUid,
          token,
          setToken,
        }}
      >
        <UserLogged />
        <Switch>
          <Route path="/customer">
            <CustomerPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/login">
            <ActivateAccountPage />
          </Route>
          <Route path="/">
            <RegisterPage />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;

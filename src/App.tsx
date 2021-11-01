import React from "react";

import { Route, Switch } from "react-router-dom";

// Pages
import SignIn from "./pages/SignIn/SignIn";
import Contacts from "./pages/Contacts/Contacts";
import Header from "./components/Header/Header";
import ProtectedAuthorized from "./components/ProtectedAuthorized/ProtectedAuthorized";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// Pages

function App() {
  return (
    <>
      <Header />
      <Switch>
        <ProtectedAuthorized path="/sign-in">
          <SignIn />
        </ProtectedAuthorized>
        <ProtectedRoute path="/contacts" exact>
          <Contacts />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;

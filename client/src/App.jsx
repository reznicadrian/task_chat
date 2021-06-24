import React from "react";
import "./App.css";
import { ChatContainer } from "./components/Chat/Chat.container";
import { Switch, Route } from "react-router";
import ProtectedRoute from "./app/_utils/ProtectedRoute";
import RegisterComponent from "./components/User/Rgister.component";

function App() {
  return (
    <Switch>
      <Route path={"/register"} component={RegisterComponent} />
      <div className="App bp3-dark">
        <ProtectedRoute exact path={"/"} component={ChatContainer} />
      </div>
    </Switch>
  );
}

export default App;

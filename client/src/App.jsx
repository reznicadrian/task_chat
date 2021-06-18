import React from "react";
import "./App.css";
import { ChatContainer } from "./components/Chat/Chat.container";
import { SideBarContainer } from "./components/SideBar/SideBar.container";

function App() {
  return (
    <div className="App bp3-dark">
        <SideBarContainer />
      <ChatContainer />
    </div>
  );
}

export default App;

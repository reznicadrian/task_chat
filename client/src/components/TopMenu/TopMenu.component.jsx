import React, { useState, useEffect } from "react";
import "./TopMenu.style.css";
import { Button, Navbar } from "@blueprintjs/core";
import { Alignment } from "@blueprintjs/core/lib/cjs/common/alignment";
import { socket } from "../../app/_utils/socket";

function TopMenuComponent({ channels }) {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div className={"top-menu"}>
      <Navbar fixedToTop={true}>
        <Navbar.Group align={Alignment.LEFT}>
          <Button className="bp3-minimal" icon="menu" />
          <Navbar.Divider />
          {isConnected ? (
            <Button
              className="bp3-minimal"
              icon="tick-circle"
              intent={"success"}
              text="Online"
            />
          ) : (
            <Button
              className="bp3-minimal"
              icon="offline"
              intent={"danger"}
              text="Offline"
            />
          )}
        </Navbar.Group>
      </Navbar>
    </div>
  );
}

export default TopMenuComponent;

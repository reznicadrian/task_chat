import React from "react";
import "./Contacts.style.css";
import { Menu } from "@blueprintjs/core";
import { ContextMenu2, Popover2 } from "@blueprintjs/popover2";
import { ChannelFormContainer } from "../Chat/chanel/ChannelForm.container";

function SideBarComponent({ chat, openChannel }) {
  const channelList = chat.channels.map((channel) => (
    <ContextMenu2
      key={channel.channelId}
      content={
        <Menu>
          <Menu.Item key={1} icon={"chat"} text="Chat" />
          <Menu.Item key={2} icon={"envelope"} text="Send Email" />
          <Menu.Item key={3} icon={"follower"} text="Invite to Chat" />
          <Menu.Item key={4} icon={"blocked-person"} text="Block" />
          <Menu.Item key={5} icon={"trash"} text="Delete" intent="danger" />
        </Menu>
      }
    >
      <Menu.Item
        active={channel.isActive}
        icon="chat"
        onClick={() => openChannel(channel.channelId)}
        text={channel.room}
      />
    </ContextMenu2>
  ));

  const channelButton = (
    <Popover2
      minimal={true}
      position={"right"}
      style={{ width: "100%" }}
      content={<ChannelFormContainer />}
    >
      <Menu.Item
        icon={"add"}
        className={"bp3-fill"}
        style={{ cursor: "pointer" }}
        text={"New Channel"}
      />
    </Popover2>
  );

  return (
    <div className={"contacts"}>
      <Menu>{channelList}</Menu>
      <Menu.Divider />
      <Menu>{channelButton}</Menu>
    </div>
  );
}

export default SideBarComponent;

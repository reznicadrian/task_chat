import { InputGroup } from "@blueprintjs/core";
import React from "react";

const SearchBarComponent = () => {
  return (
    <div style={{ margin: 10 }}>
      <InputGroup id="name" type={"text"} placeholder={"search friends"} />
    </div>
  );
};

export default SearchBarComponent;

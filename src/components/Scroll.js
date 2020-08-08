import React from "react";

const Scroll = props => {
  return <div style={{ overflowY: "scroll", border: "1rem groove red", height: "100rem" }}>{props.children}</div>;
};

export default Scroll;

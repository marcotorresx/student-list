import React from "react";
import "./mainContainerStyle.css";

function MainContainer(props) {
  return (
    <div className="mainContainer" data-testid="mainContainer">
      {props.children}
    </div>
  );
}

export { MainContainer };

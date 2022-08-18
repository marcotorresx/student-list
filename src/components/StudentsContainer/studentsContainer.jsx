import React from "react";
import "./studetnsContainerStyle.css";
import { Students } from "../Students/students";

function StudentsContainer({ mxData, usData }) {
  return (
    <div className="studentsContainer">
      <Students title="Mexican Format" data={mxData} />
      <Students title="USA Format" data={usData} />
    </div>
  );
}

export { StudentsContainer };

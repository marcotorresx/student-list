import React from "react";
import "./studetnsContainerStyle.css";
import { Students } from "../Students/students";

function StudentsContainer({ mxData, usData }) {
  return (
    <div className="studentsContainer">
      <div
        className="mxStudentsData students reusableCard"
        data-testid="mxStudentsData"
      >
        <Students title="Mexican Format" data={mxData} />
      </div>
      <div
        className="usStudentsData students reusableCard"
        data-testid="usStudentsData"
      >
        <Students title="USA Format" data={usData} />
      </div>
    </div>
  );
}

export { StudentsContainer };

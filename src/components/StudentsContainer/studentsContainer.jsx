import React from "react";
import './studetnsContainerStyle.css'
import { Students } from "../Students/students";

function StudentsContainer() {
    return(
        <div className="studentsContainer">
            <Students title="Mexican Students"/>
            <Students title="USA students"/>
        </div>
    )
}

export { StudentsContainer }
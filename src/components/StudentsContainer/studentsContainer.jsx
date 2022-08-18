import React from "react";
import './studetnsContainerStyle.css'
import { Students } from "../Students/students";

function StudentsContainer({mxData, usData}) {
    return(
        <div className="studentsContainer">
            <Students 
            title="Mexican Students"
            data={mxData}/>
            <Students 
            title="USA students"
            data={usData}/>
        </div>
    )
}

export { StudentsContainer }
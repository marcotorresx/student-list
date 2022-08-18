import React from "react";
import './students.css'

function Students({title, data}) {
    return(
        <div className="students reusableCard">
            <h2> {title} </h2>
            <div className="names reusableCard">
                
            </div>
        </div>
    )
}

export {Students}
import React from "react";
import './students.css'

function Students({title, data}) {
    return(
        <div className="students reusableCard">
            <h2> {title} </h2>
            <div className="names reusableCard">
                {/* TODO: RENDER DATA HERE */}
                {console.log({data})}
            </div>
        </div>
    )
}
    

export {Students}
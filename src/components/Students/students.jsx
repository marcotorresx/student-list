import React from "react";
import './students.css'

function Students({title, data}) {
    // data.lenght siempra da undefined
    // necesito otra condicion para este if
    if ({data}.lenght == undefined){
        return(
        <div className="students reusableCard">
            <h2> {title} </h2>
            <div className="names reusableCard">
                <p>No data</p>
                {console.log('AQUI')}
            </div>
        </div>
        )
    } else {
        return(
            <div className="students reusableCard">
                <h2> {title} </h2>
                <div className="names reusableCard">
                    {/* TODO: RENDER DATA HERE */}
                    {data.map((d) => 
                    <p> {d.name}, {d.id} </p>)}
                </div>
            </div>
        )
    }
    

    
}
    

export {Students}
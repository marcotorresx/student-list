import React from "react";
import "./students.css";

function Students({ title, data }) {
  console.log("data", data);

  return (
    <div className="students reusableCard">
      <h2> {title} </h2>
      <table className="table reusableCard">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>ID</th>
            <th>Graduation</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr>
              <td>{row.Index}</td>
              <td>{row.Name}</td>
              <td>{row.ID}</td>
              <td>{row.Graduation}</td>
              <td>{row.Grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Students };

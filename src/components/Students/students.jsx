import React from "react";
import "./students.css";

function Students({ title, data }) {
  return (
    <>
      <h2 data-testid="dataTitle"> {title} </h2>
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
            <tr key={title + row.ID}>
              <td>{row.Index}</td>
              <td>{row.Name}</td>
              <td>{row.ID}</td>
              <td>{row.Graduation}</td>
              <td>{row.Grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export { Students };

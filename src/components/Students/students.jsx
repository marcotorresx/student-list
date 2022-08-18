import React from "react";
import "./students.css";

function Students({ title, data }) {
  console.log("data", data);

  return (
    <div className="students reusableCard">
      <h2> {title} </h2>
      <div className="names reusableCard">
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export { Students };

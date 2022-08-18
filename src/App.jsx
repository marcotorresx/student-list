import React, { useState } from "react";
import "./App.css";
import Papa from "papaparse";

const gradeLimits = [
  { grade: "E", limit: 64 },
  { grade: "D", limit: 66 },
  { grade: "D+", limit: 69 },
  { grade: "C-", limit: 72 },
  { grade: "C", limit: 76 },
  { grade: "C+", limit: 79 },
  { grade: "B-", limit: 82 },
  { grade: "B", limit: 86 },
  { grade: "B+", limit: 89 },
  { grade: "A-", limit: 92 },
  { grade: "A", limit: 100 },
];

function getUsGrade(mxGrade) {
  let usGrade = "";
  for (const pair of gradeLimits) {
    if (mxGrade <= pair.limit) {
      usGrade = pair.grade;
      break;
    }
  }
  return usGrade;
}

function getUSFormat(row) {
  // Format name
  const nameArray = row.Name.split(" ");
  const Name = nameArray[0] + " " + nameArray[1];

  // Format ID
  const ID = row.ID + "@tec.mx";

  // Format graduation
  const dateArray = row.Graduation.split("/");
  const Graduation = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;

  // Format Grade
  const Grade = getUsGrade(parseFloat(row.Grade));

  return { Index: row.Index, Name, ID, Graduation, Grade };
}

function App() {
  // Mexican and American data
  const [mxData, setMxData] = useState([]);
  const [usData, setUsData] = useState([]);

  console.log(mxData);
  console.log(usData);

  // Generate us data
  function generateUsData(results) {
    // Generate US format data
    const usFormatedData = results.data.map((row) => getUSFormat(row));

    // Set states
    setMxData(results.data);
    setUsData(usFormatedData);
  }

  // Change file
  function changeFile(e) {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: generateUsData,
    });
  }

  return (
    <div className="App">
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeFile}
        style={{ display: "block", margin: "10px auto" }}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Papa from "papaparse";

const rows = [
  {
    Index: 1,
    Name: "Loreto Sepúlveda Torres",
    ID: "A12345678",
    Graduation: "24/06/2021",
    Grade: "83",
  },
];

function App() {
  function getUSFormat(row) {
    console.log(row);

    const formatedRow = {};

    return formatedRow;
  }

  React.useEffect(() => {
    getUSFormat(rows[0]);
  });

  const [users, setUsers] = useState("");

  const changeFile = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setUsers(results.data);
        console.log(results.data);
      },
    });
  };

  console.log(users);

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

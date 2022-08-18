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
    // Format name
    const nameArray = row.Name.split(" ");
    const Name = nameArray[0] + " " + nameArray[1];

    // Format ID
    const ID = row.ID + "@tec.mx";

    // Format graduation
    const dateArray = row.Graduation.split("/");
    const Graduation = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;

    // Format Grade

    return { Index: row.Index, Name, ID, Graduation };
  }

  React.useEffect(() => {
    console.log(getUSFormat(rows[0]));
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

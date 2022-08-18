import React from "react";
import "./App.css";

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
  return <div className="App"></div>;
}

export default App;

import './App.css';
import Papa from 'papaparse';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState('');

  const changeFile = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setUsers(results.data);
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
        style={{ display: 'block', margin: '10px auto' }}
      />
    </div>
  );
}

export default App;

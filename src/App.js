import './App.css';
import React from 'react';
import Select from 'react-select';


function App() {
  const options = [
    { value: 'Ocean', color: 'Ocean' },
    { value: 'strawberry', color: 'Strawberry' },
    { value: 'vanilla', color: 'Vanilla' }
  ]

  return (
    <div className="App">
      <h3>Welcome to React Asycn Selector</h3>
      <div><Select
        closeMenuOnSelect={false}
        isMulti
        options={options}
      /></div>
    </div>
  );
}

export default App;

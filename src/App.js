import './App.css';
import React from 'react';
import Select from 'react-select';


function App() {
  const options = [
    { value: 'Ocean', label: 'Ocean', color: '#0bbbda' },
    { value: 'Blue', label: 'Blue', color: '#318aff' },
    { value: 'Purple', label: 'Purple', color: '#5f52b0' },
    { value: 'Red', label: 'Red', color: '#ff0000' },
    { value: 'Orange', label: 'Orange', color: '#ff9c26' },
    { value: 'Yellow', label: 'Yellow', color: '#ffc507' },
    { value: 'Green', label: 'Green', color: '#45b887' },
    { value: 'Forest', label: 'Forest', color: '#118f65' },
    { value: 'Slate', label: 'Slate', color: '#707c91' }
  ]
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#3a3a3a",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#ffffff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#ffffff",
        cursor: "pointer",
        ":hover": {
          color: "#ffffff",
        },
      };
    },
  };
  return (
    <div className='selector'>
      <h3>Welcome to React Asycn Selector</h3>
      <div><Select
        options={options}
        isMulti
        styles={colorStyles}
      /></div>
    </div>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import TopSpace from './Components/TopSpace/TopSpace';
import Display from './Components/Display/Display';
import ButtonPad from './Components/ButtonPad/ButtonPad';
import './App.css';

const App = () => {

  const [input, setInput] = useState('0');
  const [oldInput, setOldInput] = useState('0');
  const [operator, setOperator] = useState('');


  const handleNumber = (e) => {
    if (input === '0') {
      setInput(e.target.value);
    } else {
      setInput(input + e.target.value);
    }

    console.log(input);
  }

  const handleOperator = (e) => {
    setOperator(e.target.value);
    setOldInput(input);
    setInput('0');
  }

  const handleEqual = () => {
    if (operator === '/') {
      setInput(parseFloat(oldInput) / parseFloat(input));
    } else if (operator === 'x') {
      setInput(parseFloat(oldInput) * parseFloat(input));
    } else if (operator === '-') {
      setInput(parseFloat(oldInput) - parseFloat(input));
    } else if (operator === '+') {
      setInput(parseFloat(oldInput) + parseFloat(input));
    } else {
      setInput(input);
    }

    setOldInput('0');
    setOperator('');
  }

  const handleClear = () => {
    setInput('0');
    setOldInput('0');
    setOperator('');
  }

  const handleSign = () => {
    setInput(parseFloat(input) * -1);
  }
  
  const handlePercent = () => {
    setInput(parseFloat(input) / 100);  
  }


  return (
    <div className="App">
      <div className="main__body">
        <TopSpace />
        <Display 
          input={input}
        />
        <ButtonPad 
          handleNumber={handleNumber}
          handleOperator={handleOperator}
          handleEqual={handleEqual}
          handleClear={handleClear}
          handleSign={handleSign}
          handlePercent={handlePercent}
        />
      </div>
      
    </div>
  );
}

export default App;

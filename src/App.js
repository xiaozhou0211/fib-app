import './App.css';
import { useEffect, useState } from 'react';
import { Fibonacci } from './Fibonacci/FibonacciSequence';
import { IntegerInput } from './NaturalNumber/NaturalNumberInput';

function App() {
  const [inputValue, setInputValue] = useState([]);
  const [result, setResult] = useState(inputValue);
  const [error, setError] = useState(false);

  useEffect(() => { }, [error, inputValue]);
  const handleCalculateButtonClick = () => {
    if (!IntegerInput(inputValue)) {
      setError(true)
      setResult([])
    } else {
      setError(false)
      setResult(Fibonacci(inputValue))
    }
  };

  const listFibonacci = result.map((result, index) =>
    <p key={index}>{result}</p>
  );

  return (
    <div className="App">
      <div className="App-header">
        <h4>Please enter a number to show Fibonacci Sequence</h4>
        <input
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          className='fibonacciInput'
        />
        {error ?
          <label className='errorMessage'>Please enter a Number</label> : ''}
        <button
          onClick={handleCalculateButtonClick}
          className='submit'
        >Submit</button>
        <div>
          {listFibonacci}</div>
      </div >
    </div >
  );
}

export default App;

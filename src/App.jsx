import React, { useState } from 'react'
import "App.css"

function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForeach = () => {
    let tempResult = '';
    array.forEach((fruit) => {
      tempResult += `${fruit}, `
    });
    setResult(tempResult.slice(0, -2));
  }
  const handleFilter = () => {
    const filteredList = array.filter((fruit) => {
      return fruit.includes(query) ? true : false;
    });
    setResult(filteredList.join(', '))
  }
  const handleMap = () => {
    const mappedList = array.map((fruit) => {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(', '));
  }
  const handleReduce = () => {
    const reducedList = array.reduce((acc, cur) => {
      return `${acc}, ${cur}`
    });
    setResult(reducedList);
  }
  const handlePush = () => {
    if (!query) {
      alert('값이 없습니다!');
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(', '));
  }
  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(', '))
  }

  return (
    <div className='organize'>
      <h1>Standard반 배열 API</h1>
      <input
        type="text"
        value={query}
        placeholder='Enter text'
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForeach}>Foreach</button>
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleMap}>Map</button>
        <button onClick={handleReduce}>Reduce</button>
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      <div className='test'>
        <strong>원본배열</strong> : {array.join(", ")}
      </div>
      <div className='test test2'>
        <strong>Result</strong> : {result}
      </div>
    </div >
  )
}

export default App
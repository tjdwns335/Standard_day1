import React, { useState } from 'react'
import "App.css"

function App() {
  const initialArray = ['apple', 'banana', 'cherry', 'elderberry', 'watermelon', 'grape'];

  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  // 함수들
  const handleForEach = () => {
    let tempResult = "";
    array.forEach((fruit) => {
      tempResult += `${fruit}, `;
    });
    // tempResult = tempResult.slice(0, -2);
    setResult(tempResult.slice(0, -2));
  }

  const handleFilter = () => {
    const filteredList = array.filter((fruit) => {
      return fruit.includes(query) ? true : false;
    });
    setResult(filteredList.join(', '));
  }

  const handleMap = () => {
    const mappedList = array.map((fruit) => {
      return fruit.toUpperCase();
    })
    setResult(mappedList.join(', '));
  }
  const handleReduce = () => {
    const reducedList = array.reduce((acc, cur) => {
      return `${acc}, ${cur}`;
    })
    setResult(reducedList);
  }
  const handlePush = () => {
    if (!query) {
      alert("값이 없습니다!")
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
    setResult(newArr.join(", "));
  }

  return (
    <div className="organize">
      <h1>Array Api practice</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleMap}>Map</button>
        <button onClick={handleReduce}>Reduce</button>
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      <div><strong>Array</strong> : {array.join(', ')} </div>
      <div><strong>Result</strong> : {result} </div>
    </div>
  )
}

export default App
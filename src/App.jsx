import React, { useState } from 'react'

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

  return (
    <div>
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
      </div>
      <div><strong>Array</strong> : {array.join(', ')} </div>
      <div><strong>Result</strong> : {result} </div>
    </div>
  )
}

export default App
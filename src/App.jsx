import { useState } from "react";
import "App.css";

function App() {
  const initialArray = ["apple", "banana", "cherry", "elderberry", "watermelon", "grape",];

  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  /** 함수들 */
  const handleForEach = () => {
    let tempResult = "";

    array.forEach(function (fruit) {
      tempResult += `${fruit} ,`;
    });

    setResult(tempResult.slice(0, -2));
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      // 얘를 필터링을 할지 말지를 결정한다.
      if (fruit.includes(query)) {
        return true;
      } else {
        return false; // 여기서 결정한다.
      }
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    // array를 대문자로 변환하여 출력
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };

  const handleReduce = () => {
    const reducedListText = array.reduce(function (acc, cur) {
      return `${acc}, ${cur}`;
    });
    setResult(reducedListText);
  };

  const handlePush = () => {
    if (!query) {
      alert("값이 없습니다!");
      return false;
    }

    // input 태그에 입력한 값이 결과의 끝에 달라붙도록!
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  return (
    <div className="test">
      <h1>Standard반 배열 API</h1>
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
      </div>
      <div>
        <strong>원본 배열</strong> : {array.join(", ")}
      </div>
      <div>
        <strong>결과물</strong> : {result}
      </div>
    </div>
  );
}

export default App;
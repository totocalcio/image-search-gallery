import React, { useRef, useEffect } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  // 初期値のnullの後ろに「!」をつけて、null型ではないことを宣言
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = React.useState<number>(0);

  // inputRefに初期値null+TypeScriptの場合、currentプロパティが存在するか確認
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(e.currentTarget.value);
      console.log("ref", inputRef.current?.value);
    }
  };

  // styled-components
  const Label = styled.label`
    display: flex;
    flex-direction: column;
  `;

  // components
  const Search: React.VFC = () => (
    <div className="search">
      <Label>
        Image Search
        <input
          ref={inputRef}
          type="text"
          name="name"
          onKeyPress={handleEnter}
        />
      </Label>
    </div>
  );

  const Image: React.VFC = () => <p>{inputRef.current?.value}</p>;

  return (
    <div className="App">
      <Search />
      <Image />
      <button
        type="button"
        onClick={() => {
          setCount((prevCnt) => prevCnt + 1);
        }}
      >
        click
      </button>
      <p>{count}</p>
    </div>
  );
}

export default App;

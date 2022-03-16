import * as React from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && console.log(e.currentTarget.value);
  };

  // styled-components
  const Label = styled.label`
    display: flex;
    flex-direction: column;
  `;

  // components
  const Search = (inputRef: HTMLInputElement) => (
    <div className="search">
      <Label>
        Image Search
        {/* 
          型 'HTMLInputElement' を型 'LegacyRef<HTMLInputElement> | undefined' に割り当てることはできません。
          予期された型は、型 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>' に対してここで宣言されたプロパティ 'ref' から取得されています
        */}
        <input
          ref={inputRef}
          type="text"
          name="name"
          onKeyPress={handleEnter}
        />
      </Label>
    </div>
  );
  const Image = () => <p>{inputRef}</p>;

  return (
    <div className="App">
      {/* 
        型 '{ ref: RefObject<HTMLInputElement>; }' を型 'IntrinsicAttributes & HTMLInputElement' に割り当てることはできません。
        プロパティ 'ref' は型 'IntrinsicAttributes & HTMLInputElement' に存在しません。 
      */}
      <Search ref={inputRef} />
      <Image />
    </div>
  );
}

export default App;

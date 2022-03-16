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
      <Search ref={inputRef} />
      <Image />
    </div>
  );
}

export default App;

import React, { useRef } from "react";
import styled from "styled-components";

//type
type myFunction = {
  onSearchSubmit: (term:string) => void;
};

// styled-components
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Search: React.VFC<myFunction> = ({ onSearchSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null!);

  //methods
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current.value) {
      onSearchSubmit(inputRef.current.value);
    }
  };

  return (
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
};

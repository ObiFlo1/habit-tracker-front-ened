import React, { createContext, useState } from "react";

const UniContext = createContext();

export function ContextProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  //
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <UniContext.Provider
      value={{ isActive, handleClick, inputValue, setInputValue }}
    >
      {children}
    </UniContext.Provider>
  );
}

export default UniContext;

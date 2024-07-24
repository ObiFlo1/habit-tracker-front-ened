import React, { createContext, useState } from "react";

const UniContext = createContext();

export function ContextProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // For Nav Component
  const handleNavClick = () => {
    setIsActive((prevState) => !prevState);
  };

  // For AddHabit Component
  const handleSaveClick = () => {
    setIsActive((prevState) => !prevState);
  };
  // For AddHabit Component
  const handleCancelClick = () => {
    setIsActive((prevState) => !prevState);
    setInputValue("");
  };

  return (
    <UniContext.Provider
      value={{
        isActive,
        inputValue,
        setInputValue,
        handleSaveClick,
        handleCancelClick,
        handleNavClick,
      }}
    >
      {children}
    </UniContext.Provider>
  );
}

export default UniContext;

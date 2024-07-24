import React, { createContext, useState } from "react";

const InputContext = createContext();

export function InputProvider({ children }) {
  const [savedValue, setSavedValue] = useState([]);
  const addSavedValue = (value) => {
    setSavedValue([...savedValue, value]);
  };

  return (
    <InputContext.Provider
      value={{
        savedValue,
        setSavedValue,
        addSavedValue,
      }}
    >
      {children}
    </InputContext.Provider>
  );
}

export default InputContext;

import React, { useState, useContext } from "react";
import styles from "../styles/addhabit.module.css";
import UniContext from "../context/context";
import { PiFunctionDuotone } from "react-icons/pi";

function AddHabit({ className }) {
  const { isActive, handleClick, inputValue, setInputValue } =
    useContext(UniContext);

  function handleInput(e) {
    let savedInput = e.target.value;
    setInputValue(savedInput);
  }

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.topPiece}>
        <div className={styles.cancel} onClick={handleClick}>
          Cancel
        </div>
        <h2>Create Habit</h2>
        <div className={styles.save}>Save</div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="createHabit">Name</label>
        <input
          type="text"
          placeholder="Read a book"
          id="createHabit"
          className={styles.input}
          value={inputValue}
          onChange={handleInput}
        />
        <label htmlFor="repeatOption">Repeat</label>
        <select name="repeat" id="repeat" className={styles.options}>
          <option value="EveryDay">EveryDay</option>
          <option value="EveryDay">Once per week</option>
          <option value="EveryDay">3 times per week</option>
          <option value="EveryDay">4 times per week</option>
        </select>
      </div>
    </div>
  );
}

export default AddHabit;

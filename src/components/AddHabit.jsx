import React, { useContext } from "react";
import styles from "../styles/addhabit.module.css";
import UniContext from "../context/context";
import InputContext from "../context/inputContext";

function AddHabit({ className }) {
  const { handleSaveClick, handleCancelClick, inputValue, setInputValue } =
    useContext(UniContext);

  const { addSavedValue } = useContext(InputContext);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addSavedValue(inputValue); // Save the current input value
    setInputValue(""); // Reset the input field
    handleSaveClick();
  }

  function handleSaveAndSubmit(e) {
    e.preventDefault();
    addSavedValue(inputValue); // save the current input value
    setInputValue(""); // Reset input field
    handleSaveClick(); // to close the form after save
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className={styles.topPiece}>
          <button
            type="button"
            className={styles.cancel}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <h2>Create Habit</h2>
          <button
            type="button"
            className={styles.save}
            onClick={handleSaveAndSubmit}
          >
            Save
          </button>
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
            <option value="OncePerWeek">Once per week</option>
            <option value="ThreeTimesPerWeek">3 times per week</option>
            <option value="FourTimesPerWeek">4 times per week</option>
          </select>
          <button
            type="submit"
            id="hiddenSubmitButton"
            style={{ display: "none" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddHabit;

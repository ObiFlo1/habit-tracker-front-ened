import React from "react";
import { IoAddCircleOutline, IoMenuSharp } from "react-icons/io5";
import { useContext } from "react";
import UniContext from "../context/context";
import AddHabit from "./AddHabit";
import styles from "../styles/nav.module.css";

function Nav() {
  const { isActive, handleClick } = useContext(UniContext);

  return (
    <div className={styles.navContainer}>
      <IoAddCircleOutline onClick={handleClick} />
      <IoMenuSharp />
      <AddHabit
        className={isActive ? styles.showContainer : styles.hiddenContainer}
      />
    </div>
  );
}

export default Nav;

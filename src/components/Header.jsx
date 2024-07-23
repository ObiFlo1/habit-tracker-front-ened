import Calender from "./Calender";
import styles from "../styles/header.module.css";
function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1>Habits </h1>
      <Calender />
    </div>
  );
}

export default Header;

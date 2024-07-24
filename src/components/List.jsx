import { useContext } from "react";
import InputContext from "../context/inputContext";
import styles from "../styles/list.module.css";

function List() {
  const { savedValue } = useContext(InputContext);
  return (
    <div className="listContainer">
      {savedValue.map((value, index) => (
        <div key={index} className={styles.list}>
          {value}
        </div>
      ))}
    </div>
  );
}

export default List;

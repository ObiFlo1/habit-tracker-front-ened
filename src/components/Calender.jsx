import styles from "../styles/calendar.module.css";

function Calender() {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayNumbers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={styles.calendarContent}>
      <div className={styles.days}>
        {daysOfWeek.map((day, index) => (
          <div key={index} className={styles.dayContainer}>
            <div className={styles.dayName}>{day}</div>
            <div className={styles.day}>{dayNumbers[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calender;

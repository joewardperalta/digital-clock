import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function Clock(props) {
  const [date, setDate] = useState(null);
  let minutes = 0;
  let seconds = 0;
  let hours = 0;
  let day = "";
  const days = ["SU", "MO", "TU", "WE", "TH", "FR"];

  useEffect(() => {
    // update the date once every second
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      // clean up the effect
      clearInterval(timerId);
    };
  }, []);

  // Checks if the time are set, if it is valid, format the time
  if (date?.getHours() && date?.getMinutes() && date?.getSeconds()) {
    // Get hours in standard time
    hours = parseInt(date?.getHours()) - 12;
    hours = hours < 10 ? "0" + hours : hours;

    // Get minutes
    minutes =
      date?.getMinutes() < 10 ? "0" + date?.getMinutes() : date?.getMinutes();

    // Get seconds
    seconds =
      date?.getSeconds() < 10 ? "0" + date?.getSeconds() : date?.getSeconds();

    // Get current day
    day = days[date?.getDay()];
  }

  return (
    <>
      <div className={styles.clock}>
        <div className={styles.item}>
          <h2>{day}</h2>
          <p className={styles.label}>day</p>
        </div>
        <div>
          <p>:</p>
        </div>
        <div className={styles.item}>
          <h2>{hours}</h2>
          <p className={styles.label}>hours</p>
        </div>
        <div>
          <p>:</p>
        </div>
        <div className={styles.item}>
          <h2>{minutes}</h2>
          <p className={styles.label}>minutes</p>
        </div>
        <div>
          <p>:</p>
        </div>
        <div className={styles.item}>
          <h2>{seconds}</h2>
          <p className={styles.label}>seconds</p>
        </div>
      </div>
    </>
  );
}

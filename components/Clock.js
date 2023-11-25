import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function Clock(props) {
  const [date, setDate] = useState(null);
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

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

  return (
    <>
      <div className={styles.clock}>
        <div className={styles.item}>
          <h2>{days[date?.getDay()]}</h2>
          <p className={styles.label}>day</p>
        </div>
        <div>
          <p>:</p>
        </div>
        <div className={styles.item}>
          <h2>
            {date?.getHours() < 10 ? "0" + date?.getHours() : date?.getHours()}
          </h2>
          <p className={styles.label}>hours</p>
        </div>
        <div>
          <p>:</p>
        </div>
        <div className={styles.item}>
          <h2>
            {date?.getMinutes() < 10
              ? "0" + date?.getMinutes()
              : date?.getMinutes()}
          </h2>
          <p className={styles.label}>minutes</p>
        </div>
        <div>
          <p>:</p>
        </div>
        <div className={styles.item}>
          <h2>
            {date?.getSeconds() < 10
              ? "0" + date?.getSeconds()
              : date?.getSeconds()}
          </h2>
          <p className={styles.label}>seconds</p>
        </div>
      </div>
    </>
  );
}

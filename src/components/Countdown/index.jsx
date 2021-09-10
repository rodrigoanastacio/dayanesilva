import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

const Countdown = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [timeFinalized, setTimeFinalized] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const counter = () => {
      const finalDate = new Date('Sep 10, 2021 00:08:00').getTime();
      const now = new Date().getTime();
      const distance = finalDate - now;

      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;

      let timeDays = Math.floor(distance / days);
      let timeHours = Math.floor((distance % days) / hours);
      let timeMinutes = Math.floor((distance % hours) / minutes);
      let timeSeconds = Math.floor((distance % minutes) / seconds);

      timeDays = timeDays < 10 ? '0' + timeDays : timeDays;
      timeHours = timeHours < 10 ? '0' + timeHours : timeHours;
      timeMinutes = timeMinutes < 10 ? '0' + timeMinutes : timeMinutes;
      timeSeconds = timeSeconds < 10 ? '0' + timeSeconds : timeSeconds;

      setDays(timeDays);
      setHour(timeHours);
      setMinutes(timeMinutes);
      setSeconds(timeSeconds);
      setIsLoading(false);

      if (distance <= 0) {
        clearInterval(interval);
        setTimeFinalized(true);
      }
    };

    const interval = setInterval(counter, 1000);
  }, []);

  return (
    <div className={styles.counter}>
      {isLoading ? (
        <div className={styles.counter__loading}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.counter__wrapper}>
          {timeFinalized ? (
            <p>As vagas para o curso estão encerradas!</p>
          ) : (
            <>
              <div className={styles.time}>
                <span>{days}</span>
                <span>dias</span>
              </div>

              <div className={styles.time}>
                <span>{hours}</span>
                <span>horas</span>
              </div>

              <div className={styles.time}>
                <span>{minutes}</span>
                <span>minutos</span>
              </div>

              <div className={styles.time}>
                <span>{seconds}</span>
                <span>segundos</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Countdown;

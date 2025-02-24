import React, { useState, useEffect } from 'react';
import '../../styles/ClockSale.css';

function ClockSale() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const formatTime = (time) => (time < 10 ? `0${time}` : time);
  useEffect(() => {
    const countDownDate = new Date('December 30, 2023 00:00:00').getTime();


    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      // If the countdown is over, you can handle it here
      if (distance < 0) {
        // Do something when the countdown is over
      }
    };

    // Initial call to set up the countdown
    updateCountdown();

    // Update the countdown every 1 second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Clock">
      <div className="countdown">
        <span className="days time">{countdown.days}</span><span>:</span>
        <span className="hours time">{formatTime(countdown.hours)}</span><span>:</span>
        <span className="minutes time">{formatTime(countdown.minutes)}</span><span>:</span>
        <span className="seconds time">{formatTime(countdown.seconds)}</span>
      </div>
    </div>
  );
}

export default ClockSale;

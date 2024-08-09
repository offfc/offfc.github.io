import React, { useState, useEffect } from 'react';
import styles from './LiveIndicator.module.css';

export default function LiveIndicator() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkStreamStatus = () => {
      // Check for the presence of the <video> element in the DOM
      const videoElement = document.querySelector('video');
      setIsLive(!!videoElement); // Update the state based on whether the video element exists
    };

    // Initial check
    checkStreamStatus();

    // Set an interval to check periodically (e.g., every 5 seconds)
    const intervalId = setInterval(checkStreamStatus, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.liveIndicatorBlock}>
      <span className={`${styles.liveIndicator} ${isLive ? styles.blink : ''}`}>
        <i className={`fa fa-circle ${styles.icon}`} aria-hidden="true"></i>
        {isLive ? 'LIVE' : 'offline'}
      </span>
    </div>
  );
}

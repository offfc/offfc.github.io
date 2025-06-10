import React, { useState, useEffect } from "react";
import styles from "./LiveIndicator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

// This won't show the live status as
export default function LiveIndicator() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkStreamStatus = () => {
      // Check for the presence of the <video> element in the DOM
      const videoElement = document.querySelector(".web-player-ending-panel");
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
    <div className={styles["live-indicator-block"]}>
      <span
        className={`${styles["live-indicator"]} ${isLive ? styles.live : ""}`}
      >
        {
          isLive ? <FontAwesomeIcon icon={fasCircle} className={styles.blink}/>
            : <FontAwesomeIcon icon={farCircle}/>
        }
        {isLive ? "LIVE" : "OFFLINE"}
      </span>
    </div>
  );
}

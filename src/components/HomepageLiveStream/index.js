import React, { useEffect } from "react";
import styles from "./styles.module.css";
import LiveIndicator from "./LiveIndicator.js";

// Function to resize iframe
function resizeIframe() {
  const iframe = document.querySelector(".blp-activity-h5-iframe");
  const width = document.body.offsetWidth;
  const height = (width * 9) / 16;
  iframe.width = width;
  iframe.height = height;
}

export default function LiveStream() {
  return (
    <section className={styles.liveStream}>
      <div className="container">
        <div className={styles.liveStreamContainer}>
          <LiveIndicator />
          <iframe
            src="https://www.bilibili.com/blackboard/live/live-activity-player.html?cid=31505637&sendpanel=1&danmaku=1&enableCtrlUI=1&logo=0"
            frameBorder="no"
            framespacing="0"
            scrolling="no"
            allow="autoplay; encrypted-media"
            allowFullScreen={true}
            className="blp-activity-h5-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

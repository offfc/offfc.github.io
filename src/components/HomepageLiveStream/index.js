import React, { useEffect } from "react";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import "./LiveIndicator.css"; // Import the CSS file

// Function to resize iframe
function resizeIframe() {
  const iframe = document.querySelector(".blp-activity-h5-iframe");
  const width = document.body.offsetWidth;
  const height = (width * 9) / 16;
  iframe.width = width;
  iframe.height = height;
}

function LiveIndicator() {
  return (
    <div className="live-indicator-block">
      <span className="live-indicator">
        <link
          rel="stylesheet"
          href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"
        ></link>
        <i
          className="fa fa-circle blink"
          aria-hidden="true"
        ></i>
        Live
      </span>
    </div>
  );
}

export default function LiveStream() {
  return (
    <section className={styles.liveStream}>
      <div className="container">
        <div className={styles.liveStreamContainer}>
          <LiveIndicator />
          <iframe
            src="https://www.bilibili.com/blackboard/live/live-activity-player.html?cid=21622811&sendpanel=1&danmaku=1&enableCtrlUI=1&logo=0"
            frameBorder="no"
            frameSpacing="0"
            scrolling="no"
            allow="autoplay; encrypted-media"
            allowFullScreen="true"
            className="blp-activity-h5-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

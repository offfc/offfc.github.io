import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

function resizeIframe() {
  // get current iframe element
  const iframe = document.querySelector('.blp-activity-h5-iframe');

  // aquire current page width
  const width = document.body.offsetWidth;

  // acquire current page height
  const height = width * 9 / 16;

  // set iframe width and height
  iframe.width = width;
  iframe.height = height;
}

// adjust iframe on load
window.onload = resizeIframe;

// adjust iframe on resize
window.onresize = resizeIframe;

export default function LiveStream() {
  return (
    <section className={styles.liveStream}>
      <div className="container">
        <div className={styles.liveStreamContainer}>
          <Heading as="h2" className={styles.liveStreamTitle}>
            正在直播：
          </Heading>
            <iframe
                src="https://www.bilibili.com/blackboard/live/live-activity-player.html?cid=21622811&sendpanel=1&danmaku=1&enableCtrlUI=1&logo=0"
                width="1000" height="400" frameborder="no" framespacing="0" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen="true"
            ></iframe>        
          </div>
      </div>
    </section>
  );
}
import React from 'react';
import styles from './MatchBoard.module.css';


function MatchBoard() {
  return (
    <div className={styles.matchBoardContainer}>
      <iframe
        /* For more module arguments, visit https://challonge.com/zh_CN/module/instructions */
        src="https://challonge.com/zh_CN/q7k7xjyn/module?show_final_results=1&"
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="auto"
        allowTransparency="true"
      ></iframe>
    </div>
  );
}

export default MatchBoard;

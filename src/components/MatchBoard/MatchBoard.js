import React from 'react';
import styles from './MatchBoard.module.css';

function MatchBoard() {
  return (
    <div className={styles.matchBoardContainer}>
      <iframe 
        src="https://challonge.com/zh_CN/8o5jwgu4/module?show_final_results=1&" 
        width="100%" 
        height="500" 
        frameBorder="0" 
        scrolling="auto" 
        allowTransparency="true">
      </iframe>
    </div>
  );
}

export default MatchBoard;

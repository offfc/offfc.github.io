import React from "react";
import styles from "./MatchBoard.module.css";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";


function MatchBoard() {
  return (
    <div className={styles.matchBoardContainer}>
      <div className="section-header">
        <EmojiEventsIcon/>
        <h2>赛程展示</h2>
      </div>
      <iframe
        /* For more module arguments, visit https://challonge.com/zh_CN/module/instructions */
        src="https://challonge.com/zh_CN/q7k7xjyn/module?show_final_results=1"
        allowTransparency="true"
      />
    </div>
  );
}

export default MatchBoard;

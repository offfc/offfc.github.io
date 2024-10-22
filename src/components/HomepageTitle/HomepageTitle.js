import React from "react";
import "./HomepageTitle-module.css";
import Highlight from "@site/src/components/Highlight";

export default function HomepageTitle() {
  return (
    <div>
      <span
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundImage:
            "linear-gradient(to left, #3e9efe, #378bef, #3378df, #3065cf)",
          zIndex: 3, // ← This basically ensures text is above the circles
          position: "relative",
        }}
        className="font-extrabold text-transparent bg-clip-text text-7xl md:text-8xl"
      >
        osu! FumoFumo Cup
      </span>
      <p
        className="hero__subtitle"
        style={{
          margin: "1em 0 1em 0",
          zIndex: 4,
          position: "relative",
        }}
      >
        <b>
          面向中分段的 <Highlight color="#ff66aa">osu!Standard</Highlight>{" "}
          特色比赛
        </b>
      </p>
      <ul
        className="circles"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

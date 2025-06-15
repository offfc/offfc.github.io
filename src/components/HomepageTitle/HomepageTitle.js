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
            "linear-gradient(135deg, #ffffff 0%, #e0f2fe 25%, #b3e5fc 50%, #81d4fa 75%, #4fc3f7 100%)",
          WebkitTextFillColor: "transparent",
          textShadow: "none",
          filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
          zIndex: 3,
          fontSize: "4rem",
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
          color: "rgba(255, 255, 255, 0.95)",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          fontSize: "1.2rem",
          fontWeight: "500",
        }}
      >
        <b>
          面向中分段的 <Highlight color="#02defd">osu!Standard</Highlight>{" "}
          特色比赛
        </b>
      </p>
    </div>
  );
}

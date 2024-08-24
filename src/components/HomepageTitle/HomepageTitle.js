import React from "react";
import "./HomepageTitle-module.css";

export default function HomepageTitle() {
    return (
        <div>
            <span 
                style={{
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    backgroundImage: "linear-gradient(to left, #3e9efe, #378bef, #3378df, #3065cf)",
                    zIndex: 3, // ← This basically ensures text is above the circles
                    position: "relative"
                }} 
                className="font-extrabold text-transparent bg-clip-text text-7xl md:text-8xl"
            >
                osu! FumoFumo Cup
            </span>
            <ul 
                className="circles"
                style={{
                    zIndex: 1,
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

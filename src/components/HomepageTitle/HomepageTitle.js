import React from "react";
import "./HomepageTitle-module.css";

export default function HomepageTitle() {
    return (
        <div>
            <span 
                style={{
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    backgroundImage: "linear-gradient(to left, #3e9efe, #378bef, #3378df, #3065cf)"
                }} 
                className="font-extrabold text-transparent bg-clip-text text-7xl md:text-8xl"
            >
                osu! FumoFumo Cup
            </span>
            <ul class="circles">
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

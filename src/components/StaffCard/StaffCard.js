import React, { useRef, useState } from "react";
import "./StaffCard-module.css";
import FeatureButton from "../FeatureButton/FeatureButton.js";

function StaffCard({ uid, userName, role }) {
  const cardRef = useRef(null);
  const [overlayColor, setOverlayColor] = useState("rgba(160, 218, 228, 0.5)"); // Initial color

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    // Calculate the mouse position relative to the card's center
    const centerX = rect.left + cardWidth / 2;
    const centerY = rect.top + cardHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    // Invert the tilt direction
    const tiltX = (mouseY / cardHeight) * 15;
    const tiltY = -(mouseX / cardWidth) * 15;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

    // Calculate the color based on mouse position
    const maxDistance = Math.sqrt(cardWidth ** 2 + cardHeight ** 2);
    const distance = Math.sqrt(mouseX ** 2 + mouseY ** 2);
    const colorIntensity = Math.min(distance / maxDistance, 1);

    const r = Math.floor(255 * colorIntensity);
    const g = Math.floor(100 + (255 - 100) * colorIntensity);
    const b = Math.floor(100 + (255 - 100) * colorIntensity);
    
    setOverlayColor(`rgba(${r}, ${g}, ${b}, 0.1)`); // Adjust alpha for more visibility
  };

  const resetTilt = () => {
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    setOverlayColor("rgba(160, 218, 228, 0.5)"); // Reset to initial color
  };

  return (
    <div
      className="card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <div className="card-overlay" style={{ backgroundColor: overlayColor }}></div>
      <div>
        <img
          className="card-img"
          src={"https://a.ppy.sh/" + uid}
          alt="User Avatar"
        />
      </div>
      <p className="card-title fade-in">{userName}</p>
      <p className="card-subtitle fade-in">
        <i className="fa fa-rocket"></i> {role}
      </p>
      <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <FeatureButton
          link={"https://osu.ppy.sh/users" + uid}
          buttonText="在 osu! 查看"
        />
      </p>
      <br />
    </div>
  );
}

export default StaffCard;

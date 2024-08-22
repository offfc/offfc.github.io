import React, { useRef, useState } from "react";
import "./StaffCard-module.css";
import FeatureButton from "../FeatureButton/FeatureButton.js";

function StaffCard({ uid, userName, role }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  const [overlayGradient, setOverlayGradient] = useState(
    "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(160, 218, 228, 0.5))"
  );
  const [highlightPosition, setHighlightPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    const centerX = rect.left + cardWidth / 2;
    const centerY = rect.top + cardHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const tiltX = (mouseY / cardHeight) * 15;
    const tiltY = -(mouseX / cardWidth) * 15;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

    const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI) + 90;
    const adjustedAngle = angle * 0.5;
    const gradient = `linear-gradient(${adjustedAngle}deg, rgba(233, 140, 211, 0.43), rgba(82, 148, 226, 1))`;

    setOverlayGradient(gradient);

    const parallaxFactor = 3;
    const translateX = -(mouseX / cardWidth) * parallaxFactor;
    const translateY = -(mouseY / cardHeight) * parallaxFactor;

    [imgRef, titleRef, subtitleRef, buttonRef].forEach((ref) => {
      if (ref.current) {
        ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
      }
    });

    // Set the highlight position based on the cursor's relative position
    const posX = ((mouseX / cardWidth) * 100).toFixed(2);
    const posY = ((mouseY / cardHeight) * 100).toFixed(2);
    setHighlightPosition({ x: posX, y: posY });
  };

  const resetTilt = () => {
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    setOverlayGradient(
      "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(160, 218, 228, 0.5))"
    );

    [imgRef, titleRef, subtitleRef, buttonRef].forEach((ref) => {
      if (ref.current) {
        ref.current.style.transform = "translateX(0) translateY(0)";
      }
    });

    // Reset the highlight position to the center
    setHighlightPosition({ x: 50, y: 50 });
  };

  return (
    <div
      className="card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <div
        className="card-overlay"
        style={{ background: overlayGradient }}
      ></div>
      <div>
        <img
          className="card-img"
          src={"https://a.ppy.sh/" + uid}
          style={{ userSelect: "none" }}
          alt="User Avatar"
          ref={imgRef}
        />
      </div>
      <div
        className="card-highlight"
        style={{
          background: `radial-gradient(circle at ${highlightPosition.x}% ${highlightPosition.y}%, rgba(255, 255, 255, 0.5), transparent)`,
        }}
      ></div>
      <p className="card-title fade-in" style={{ userSelect: "none" }}>{userName}</p>
      <p className="card-subtitle fade-in" style={{ userSelect: "none" }}>
        <i className="fa fa-rocket"></i> {role}
      </p>
      <p style={{ marginTop: "1rem", marginBottom: "1rem" }} ref={buttonRef}>
        <FeatureButton
          link={"https://osu.ppy.sh/users/" + uid}
          buttonText="在 osu! 查看"
        />
      </p>
      <br />
    </div>
  );
}

export default StaffCard;

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
  ); // Initial gradient

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

    // Calculate the gradient angle with reduced sensitivity
    const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI) + 90;
    const adjustedAngle = angle * 0.5; // Reduce sensitivity by adjusting the angle
    const gradient = `linear-gradient(${adjustedAngle}deg, rgba(255, 255, 255, 0.2), rgba(82, 148, 226, 0.9))`;

    setOverlayGradient(gradient);

    const parallaxFactor = 3; // Control the intensity of the parallax effect
    const translateX = -(mouseX / cardWidth) * parallaxFactor;
    const translateY = -(mouseY / cardHeight) * parallaxFactor;

    [imgRef, titleRef, subtitleRef, buttonRef].forEach((ref) => {
      if (ref.current) {
        ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
      }
    });
  };

  const resetTilt = () => {
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    setOverlayGradient(
      "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(160, 218, 228, 0.5))"
    ); // Reset to initial gradient

    [imgRef, titleRef, subtitleRef, buttonRef].forEach((ref) => {
      if (ref.current) {
        ref.current.style.transform = "translateX(0) translateY(0)";
      }
    });
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
          alt="User Avatar"
          ref={imgRef}
        />
      </div>
      <p className="card-title fade-in">{userName}</p>
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

import { useState, useEffect } from "react";
import styles from "./styles.module.css";

function HomepageFeatureDisplay() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.querySelector(`.${styles.container}`);
      if (container) {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const offsetX = (e.clientX - centerX) * 0.02;
        const offsetY = (e.clientY - centerY) * 0.02;

        setPosition({ x: offsetX, y: offsetY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.container}>
      <img src="img/home/image-cards.png" className={styles.cardLayer} alt="Image cards"/>
      <img
        src="img/home/title.png"
        className={styles.titleLayer}
        alt="Title"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
}

export default HomepageFeatureDisplay;

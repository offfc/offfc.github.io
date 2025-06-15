import React from 'react';
import styles from './ModernButton.module.css';

export default function ModernButton({
  text,           // Required: button text
  icon = null,    // Optional: button icon (emoji or text)
  arrow = null,   // Optional: arrow (default: "→" if not specified but wanted)
  href = null,    // Optional: link URL
  showArrow = false, // Optional: whether to show arrow
  onClick,
  className = '',
  ...props
}) {
  const ButtonComponent = href ? 'a' : 'button';
  const displayArrow = arrow || (showArrow ? '→' : null);

  const buttonClasses = [
    styles.modernButton,
    icon && styles['modernButton--hasIcon'],
    displayArrow && styles['modernButton--hasArrow'],
    className
  ].filter(Boolean).join(' ');

  const buttonProps = {
    className: buttonClasses,
    style: icon ? { '--background-icon': `"${icon}"` } : {},
    ...props
  };

  if (href) {
    buttonProps.href = href;
  } else if (onClick) {
    buttonProps.onClick = onClick;
  }

  return (
    <ButtonComponent {...buttonProps}>
      <span className={styles.buttonText}>{text}</span>
      {displayArrow && <span className={styles.buttonArrow}>{displayArrow}</span>}
    </ButtonComponent>
  );
}

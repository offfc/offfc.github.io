import React from 'react';
import styles from './HomepageNotification.module.css';

// Use in this format:
// <HomepageNotification type={"warning"} message={"在这里输入公告内容"} icon={true}/>

// Updated on 2024.8.26:
// You can now use HTML tags to format your messages. Example usage below:
// <HomepageNotification
// type="warning"
// icon={true}
// message={`
//   <strong>Important Notice:</strong><br>
//   Please ensure that you <em>update your password</em> regularly to maintain account security.<br>
//   For more information, visit our <a href="https://example.com/security">Security Page</a>.<br><br>
//   <ul>
//     <li>Use strong passwords.</li>
//     <li>Enable two-factor authentication.</li>
//     <li>Be aware of phishing attempts.</li>
//   </ul>
// `}
// />



const HomepageNotification = ({ type, message, icon }) => {
  // Set the title based on the type
  const title = type === 'warning' ? '警告' : type === 'info' ? '通知' : '';

  return (
    <div className={`${styles.Banner} ${styles[`Banner--${type}`]}`}>
      <div className={styles.BannerVisual}>
        {icon && (
          <svg
            aria-hidden="true"
            height="40"
            viewBox="0 0 16 16"
            version="1.1"
            width="40"
            fillOpacity={0.5}
            rotate={60}
            className={styles.BannerIcon}
          >
            <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
          </svg>
        )}
      </div>
      <div className={styles.BannerMessage}>
        <p className={styles.BannerTitle}>{title}</p>
        <div className={styles.BannerContent} dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    </div>
  );
};

export default HomepageNotification;

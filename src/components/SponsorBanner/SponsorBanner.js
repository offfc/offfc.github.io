import React from 'react';
import styles from './SponsorBanner.module.css';
import sponsorImage from './sponsor.png';

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



const HomepageNotification = ({ type, message}) => {
    // Set the title based on the type
    const title = type === 'warning' ? '警告' : type === 'info' ? '' : '';

    return (
        <div className={`${styles.Banner} ${styles[`Banner--${type}`]}`}>
            <div className={styles.BannerMessage}>
                <div className={styles.BannerContent} dangerouslySetInnerHTML={{__html: message}}/>
                <img className={styles.BannerIcon} src={sponsorImage} alt="sponsor"/>
            </div>
        </div>
    );
};
export default HomepageNotification;

import React from 'react';
import styles from './SponsorBanner.module.css';

const SponsorBanner = ({imageUrl, mainText, altText}) => {
  return (
    <div className={styles.containerV1}>
      <div className={styles.wrapperV1}>
        <div className={styles.gridBlockV1}>
          <div
            className={`${styles.blockElement} ${styles.bannerBackground} ${styles.imageAlignSide} ${styles.imageAlignLeft} ${styles.twoByGridBlock}`}
          >
            <div className={styles.blockContent}>
              <h2>
                <div className={`${styles.mainText} ${styles.bannerText}`}>
                  <span>
                    <p>{mainText}</p>
                  </span>
                </div>
              </h2>
              <div className={styles.altText}>
                <span>
                  <p>{altText}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorBanner;

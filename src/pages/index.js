import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageTitle from "../components/HomepageTitle/HomepageTitle.js";
import FeatureButton from "../components/FeatureButton/FeatureButton";
import HomepageNotification from "../components/HomepageNotification/HomepageNotification.js";
import MatchBoard from "../components/MatchBoard/MatchBoard.js";
import LiveIndicator from "../components/HomepageLiveStream/LiveIndicator";
import LiveStream from "../components/HomepageLiveStream";
import HomepageFeatureDisplay from "../components/HomepageFeatureDisplay";

const common = require("../../common.js");
import { useEffect } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const heroBanner = document.querySelector(`.${styles.heroBanner}`);

    const handleMouseMove = (e) => {
      if (heroBanner) {
        const rect = heroBanner.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        heroBanner.style.setProperty('--mouse-x', `${x}px`);
        heroBanner.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const handleMouseLeave = () => {
      if (heroBanner) {
        heroBanner.style.setProperty('--mouse-x', '-300px');
        heroBanner.style.setProperty('--mouse-y', '-300px');
      }
    };

    const handleMouseEnter = () => {
      if (heroBanner) {
        const rect = heroBanner.getBoundingClientRect();
        heroBanner.style.setProperty('--mouse-x', `${rect.width / 2}px`);
        heroBanner.style.setProperty('--mouse-y', `${rect.height / 2}px`);
      }
    };

    if (heroBanner) {
      heroBanner.addEventListener('mousemove', handleMouseMove);
      heroBanner.addEventListener('mouseleave', handleMouseLeave);
      heroBanner.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      if (heroBanner) {
        heroBanner.removeEventListener('mousemove', handleMouseMove);
        heroBanner.removeEventListener('mouseleave', handleMouseLeave);
        heroBanner.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.titleSection}>
              <HomepageTitle />
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.descriptionSection}>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>4v4</div>
                  <div className={styles.statLabel}>对战规模</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>8</div>
                  <div className={styles.statLabel}>参赛队伍</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>4* - 7*</div>
                  <div className={styles.statLabel}>图池难度</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.actionPanel}>
              <div className={styles.panelHeader}>
                <h3 className={styles.panelTitle}>开始你的旅程</h3>
                <p className={styles.panelSubtitle}>选择你的下一步行动</p>
              </div>
              <div className={styles.buttonGroup}>
                <FeatureButton
                  link={`/docs/${common.currentSeason}`}
                  buttonText="了解一下"
                />
                <FeatureButton
                  link={`/docs/${common.currentSeason}/handbook`}
                  buttonText="查看参赛手册"
                />
                <FeatureButton
                  link="/docs/summer-lights#报名"
                  buttonText="立即报名！"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${common.description}`}>
      <HomepageHeader/>
      <main>
        <HomepageFeatureDisplay/>
        <HomepageNotification type={"info"} message={
          "<b style='display: block; text-align: center;'>新的内容，敬请期待...</b>"
        }/>
      </main>
    </Layout>
  );
}

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

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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
                  link="/docs/info"
                  buttonText="了解一下"
                />
                <FeatureButton
                  link="/docs/handbook"
                  buttonText="查看参赛手册"
                />
                <FeatureButton
                  link="https://docs.qq.com/form/page/DV1hXY1RMU1FOeGlM"
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
      <HomepageHeader />
      <main>
        <HomepageFeatureDisplay/>
        <HomepageNotification type={"info"} message={
          "<b style='display: block; text-align: center;'>新的内容，敬请期待...</b>"
        }/>
      </main>
    </Layout>
  );
}

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

const common = require("../../common.js");

function HomepageHeader() {
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
    >
      <div className="container">
        <HomepageTitle/>
        <br/>
        <div className={styles.buttons}>
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
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${common.description}`}>
      <HomepageHeader/>
      <main>
        <HomepageNotification type={"info"} message={
          "<b style='display: block; text-align: center;'>新的内容，敬请期待...</b>"
        }/>
      </main>
    </Layout>
  );
}

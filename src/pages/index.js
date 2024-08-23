import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import LiveStream from "@site/src/components/HomepageLiveStream/index.js";
import styles from "./index.module.css";
import HomepageTitle from "@site/src/components/HomepageTitle/HomepageTitle.js";
import FeatureButton from "@site/src/components/FeatureButton/FeatureButton";
import SponsorBanner from "@site/src/components/SponsorBanner/SponsorBanner.js";
import Highlight from "@site/src/components/Highlight";
import { Analytics } from "@vercel/analytics/react"

const common = require("../../common.js");

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  // Should we keep this button?
  // RE: sure we're gonna keep this.
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
    >
      <div className="container">
        <HomepageTitle />
        <br />
        <p className="hero__subtitle"><b>面向中分段的 <Highlight color="#ff66aa">osu!Standard</Highlight> 特色比赛</b></p>
        <br />
        <div className={styles.buttons}>
          <FeatureButton
            link="/docs/info"
            buttonText="了解一下"
            spacing="1em"
          />
          <FeatureButton
            link="/docs/handbook"
            buttonText="查看参赛手册"
            spacing="1em"
          />
          <FeatureButton
            link="https://docs.qq.com/form/page/DV1hXY1RMU1FOeGlM"
            buttonText="立即报名！"
            spacing="1em"
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
      <HomepageHeader />
      <main>
        <LiveStream />
      </main>
      <SponsorBanner mainText={"感谢DESU.Life的盛情赞助！"} />
      <Analytics />
    </Layout>
  );
}

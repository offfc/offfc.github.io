import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import LiveStream from "@site/src/components/HomepageLiveStream/index.js";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import HomepageTitle from "@site/src/components/HomepageTitle/HomepageTitle.js";
import FeatureButton from "@site/src/components/FeatureButton.js";
import SponsorBanner from "@site/src/components/SponsorBanner/SponsorBanner.js";
import Highlight from "@site/src/components/Highlight";
import MatchBoard from "../components/MatchBoard/MatchBoard.js";

const common = require("../../common.js");

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  // Should we keep this button?
  // RE: sure we're gonna keep this.
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      // style={{ backgroundImage: "url('/img/landing.gif')" }}
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
      <MatchBoard />
      <SponsorBanner mainText={"感谢DESU.Life的盛情赞助！"}/>
    </Layout>
  );
}

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
import HomepageNotification from "../components/HomepageNotification/HomepageNotification.js";
import MatchBoard from "../components/MatchBoard/MatchBoard.js";

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
      <HomepageNotification
          type={"warning"}
          message={`
              于<em>2024.8.26 19:00</em> 发布了有关退赛事件全梳理的公告。你可以点击<a href="/blog/History">本动态页</a>查看。
          `}
          icon={true}/>
      <br />
      <main>
        <LiveStream />
        <MatchBoard />
      </main>
      <SponsorBanner type={"info"} message={
          "<br>" +
          "<p1><b>感谢DESU.Life的赞助！</b></p1>" +
          "<br>" +
          "<p2>前往<a href='https://cn.desu.life/'>DESU.Life</a>官网购买你的猫盘！</p2>" +
          "<br><br>"
      } iconPath={"./sponsor.png"}/>
      <Analytics />
    </Layout>
  );
}

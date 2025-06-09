import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageTitle from "../components/HomepageTitle/HomepageTitle.js";
import FeatureButton from "../components/FeatureButton/FeatureButton";
import HomepageNotification from "../components/HomepageNotification/HomepageNotification.js";
import MatchBoard from "../components/MatchBoard/MatchBoard.js";

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
      <HomepageNotification type={"info"}
                            message={"<b style='display: block; text-align: center;'>本届OFFC cirno完结撒花！感谢选手们的参与！</b><br />"}
                            icon={true}/>
      <br/>
      <main>
        <MatchBoard/>
        <br/>
      </main>
      <HomepageNotification type={"info"} message={
        "<p1 style='font-size: 36px'><b>感谢DESU.Life的赞助！</b></p1>" +
        "<br>" +
        "<p2 style='font-size: 24px'>前往<a href='https://cn.desu.life/'>DESU.Life</a>官网购买你的猫盘！</p2>"
      } imgPath="/img/sponsor.png"/>
    </Layout>
  );
}

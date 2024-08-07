import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.tabsContainer}>
          <Tabs
              defaultValue="tab1"
              values={[
                {label: 'ODGC S2 Round1 Showcase', value: 'tab1'},
                {label: 'ODGC S2 Finals Showcase', value: 'tab2'},
                {label: 'ODGC S2 Round2 Match', value: 'tab3'},
              ]}
          >
              <TabItem value="tab1">
               <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=112694002715828&bvid=BV1zT3tewEEi&cid=500001598848638&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="400"></iframe>
              </TabItem>
              <TabItem value="tab2">
               <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=112801997719933&bvid=BV1PGb1eeEuq&cid=500001618460981&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="400"></iframe>
              </TabItem>
              <TabItem value="tab3">
               <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=112791159572703&bvid=BV1JGbXe2E1Z&cid=500001616474909&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="400"></iframe>
              </TabItem>
            </Tabs>
          </div>
      </div>
    </section>
  );
}

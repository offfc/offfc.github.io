import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="offfc/offfc.github.io"
      repoId="R_kgDOMSC04Q  "
      category="Announcements"
      categoryId="DIC_kwDOMSC04c4ChbTr"
      mapping="og:title"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
      term="Welcome to @giscus/react component!"
      strict="0"
      crossorigin="anonymous"
      async
    />
  );
}
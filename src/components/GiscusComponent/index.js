import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      data-repo="offfc/offfc.github.io"
      data-repo-id="R_kgDOMSC04Q"
      data-category="Announcements"
      data-category-id="DIC_kwDOMSC04c4ChbTr"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="preferred_color_scheme"
      data-lang="zh-CN"
      crossorigin="anonymous"
    />
  );
}
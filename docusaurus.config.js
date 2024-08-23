// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
const common = require("./common.js");
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: common.title,
  tagline: common.description,
  favicon: common.icon,

  // Set the production url of your site here
  // TODO: Change this part
  url: "https://offfc.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "offfc", // Usually your GitHub org/user name.
  projectName: "offfc.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: "./sidebars.js",
          // The base URL to the project root.
          editUrl: "https://github.com/offfc/offfc.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({
                  content,
                  options: { wordsPerMinute: 450 },
                }),
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Social card image
      image: common.cardbanner,
      navbar: {
        title: common.title,
        logo: {
          alt: "OFFC Logo",
          src: common.icon,
        },
        items: [
          { to: "/docs/info/", label: "简介", position: "left" },
          { to: "/docs/handbook", label: "参赛手册", position: "left" },
          { to: "/docs/mainChart/", label: "主表格", position: "left" },
          { to: "/blog", label: "动态", position: "left" },
          { to: "/docs/staff", label: "Staff", position: "left" },
          { to: "/docs/easteregg", label: "     ", position: "left" },
          { to: "/docs/memes", label: "梗图", position: "left" },
          {
            href: common.src,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      announcementBar: {
        id: 'Announcement',
        content:
          'OFFC Cirno组队规则现已公布！点击<a href="./blog/Teaming">这里</a>查看！',
        backgroundColor: '#ffffff',
        textColor: '#091E42',
        isCloseable: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "跳转到：",
            items: [
              {
                label: "简介",
                to: "/docs/info",
              },
              {
                label: "参赛手册",
                to: "/docs/handbook",
              },
              {
                label: "主表格",
                to: "/docs/mainChart",
              },
              {
                label: "动态",
                to: "/blog",
              },
              {
                label: "Staff",
                to: "/docs/staff",
              },
              {
                label: "梗图",
                to: "/docs/memes",
              },
            ],
          },
          {
            title: "关于我们",
            items: [
              {
                label: "GitHub",
                href: common.contact.github_org,
              },
            ],
          },
          {
            title: "相关链接",
            items: [
              {
                label: "主表链接 (Google Docs)",
                href: "https://docs.google.com/spreadsheets/d/14ZFqYajLDRjr863hDo5n5xvGQMoDZPmNwJycgQXr3YQ/edit?usp=sharing",
              },
              {
                label: "参赛手册（腾讯文档）",
                href: "https://docs.qq.com/doc/DV2VOWlZJdFZWZUpB?from_page=save",
              },
            ],
          },
        ],
        copyright:
          "This work is licensed under CC BY-NC 4.0, Built with Docusaurus.",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const common = require("./common.js");

/** @type {import("@docusaurus/types").Config} */
const config = {
    title: common.title,
    tagline: common.description,
    favicon: common.icon,

    // Set the production url of your site here
    url: "https://offfc.github.io/",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    organizationName: "offfc", // Usually your GitHub org/user name.
    projectName: "offfc.github.io", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    future: {
        v4: true,
        experimental_faster: true,
    },

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
            /** @type {import("@docusaurus/preset-classic").Options} */
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
                    customCss: ["./src/css/custom.css"],
                },
            }),
        ],
    ],


    themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
        ({
            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },
            // Social card image
            image: common.socialImage,
            navbar: {
                title: common.title,
                logo: {
                    alt: "OFFC Logo",
                    src: common.icon,
                },
                items: [
                    { to: `/docs/${common.currentSeason}`, label: "简介", position: "left" },
                    { to: `/docs/${common.currentSeason}/handbook`, label: "参赛手册", position: "left" },
                    { to: `/docs/${common.currentSeason}/mainChart`, label: "主表格", position: "left" },
                    { to: "/blog", label: "动态", position: "left" },
                    { to: `/docs/${common.currentSeason}/staff`, label: "Staff", position: "left" },
                    { to: "/docs/easteregg", label: "     ", position: "left" },
                    { to: "/docs/memes", label: `梗图`, position: "left" },
                    {
                        href: common.src,
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "跳转到：",
                        items: [
                            {
                                label: "简介",
                                to: `/docs/${common.currentSeason}`,
                            },
                            {
                                label: "参赛手册",
                                to: `/docs/${common.currentSeason}/handbook`,
                            },
                            {
                                label: "主表格",
                                to: `/docs/${common.currentSeason}/mainChart`,
                            },
                            {
                                label: "动态",
                                to: "/blog",
                            },
                            {
                                label: "Staff",
                                to: `/docs/${common.currentSeason}/staff`,
                            },
                            {
                                label: "梗图",
                                to: "/docs/memes",
                            },
                        ],
                    },
                    {
                        title: "联系我们",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/GsQMn2GVpw",
                            },
                            {
                                label: "官方 QQ 群",
                                href: "https://qm.qq.com/q/X4uZu8J58y",
                            },
                            {
                                label: "GitHub（仅限程序+网页）",
                                href: common.contact.github_org,
                            },
                        ],
                    },
                    {
                        title: "相关链接",
                        items: [
                            {
                                label: "主表链接 (Google Docs)",
                                href: "https://docs.google.com/spreadsheets/d/167EKJ5hA59MOGXHn2D_oHjLCpedfKCdeW7gWOKtozjg/edit?gid=0#gid=0",
                            },
                            {
                                label: "参赛手册（腾讯文档）",
                                href: "https://docs.qq.com/doc/DVG15aUFITVVQYUZp",
                            },
                            {
                                label: "选手报名",
                                href: "https://docs.qq.com/form/page/DVGJUcXhtZkFJWEVy",
                            },
                            {
                                label: "策略师报名",
                                href: "https://docs.qq.com/form/page/DVHBkd2JYa2VTbVBn",
                            },
                            {
                                label: "工作人员报名",
                                href: "https://docs.qq.com/form/page/DVEhxeWdqSENWTWRT",
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

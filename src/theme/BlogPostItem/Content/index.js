import React from 'react';
import clsx from 'clsx';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import MDXContent from '@theme/MDXContent';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';
import ForumIcon from "@mui/icons-material/Forum";

export default function BlogPostItemContent({children, className}) {
    const {isBlogPostPage} = useBlogPost();
    const {colorMode} = useColorMode();
    const giscus = (
        <React.Fragment>
            <br/>
            <span style={{fontWeight: "bold", color: "#269ffe", display: "flex", alignItems: "center"}}>
                <ForumIcon/>&nbsp;留言
            </span>
            <Giscus
                id="comments"
                repo="offfc/offfc.github.io"
                repoId="R_kgDOMSC04Q"
                category="General"
                categoryId="DIC_kwDOMSC04c4ChbTs"
                mapping="title"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={colorMode}
                lang="zh-CN"
                loading="lazy"
            />
        </React.Fragment>
    );
    return (
        <div
            // This ID is used for the feed generation to locate the main content
            id={isBlogPostPage ? blogPostContainerID : undefined}
            className={clsx('markdown', className)}>
            <MDXContent>
                {children}
                {isBlogPostPage && giscus}
            </MDXContent>
        </div>
    );
}

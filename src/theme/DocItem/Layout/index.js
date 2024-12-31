import React from 'react';
import clsx from 'clsx';
import {useColorMode, useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from "@docusaurus/plugin-content-docs/client";
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import styles from './styles.module.css';
import Giscus from '@giscus/react';
import ForumIcon from '@mui/icons-material/Forum';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
    const {frontMatter, toc} = useDoc();
    const windowSize = useWindowSize();
    const hidden = frontMatter.hide_table_of_contents;
    const canRender = !hidden && toc.length > 0;
    const mobile = canRender ? <DocItemTOCMobile/> : undefined;
    const desktop =
        canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
            <DocItemTOCDesktop/>
        ) : undefined;
    return {
        hidden,
        mobile,
        desktop,
    };
}

export default function DocItemLayout({children}) {
    const docTOC = useDocTOC();
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
        <div className="row">
            <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
                <DocVersionBanner/>
                <div className={styles.docItemContainer}>
                    <article>
                        <DocBreadcrumbs/>
                        <DocVersionBadge/>
                        {docTOC.mobile}
                        <DocItemContent>{children}</DocItemContent>
                        <DocItemFooter/>
                    </article>
                    <DocItemPaginator/>
                    {giscus}
                </div>
            </div>
            {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
        </div>
    );
}

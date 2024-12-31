/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import type {Props} from '@theme/BlogPostPaginator';
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BlogPostPaginator(props: Props): ReactNode {
    const {nextItem, prevItem} = props;

    return (
        <nav
            className="pagination-nav docusaurus-mt-lg"
            aria-label={translate({
                id: 'theme.blog.post.paginator.navAriaLabel',
                message: 'Blog post page navigation',
                description: 'The ARIA label for the blog posts pagination',
            })}>
            {prevItem && (
                <Button
                    variant="outlined"
                    href={prevItem.permalink}
                    {...prevItem}
                    style={{height: "6rem", justifyContent: 'left'}}
                >
                    <div style={{display: 'inline-flex', alignItems: 'flex-start'}}>
                        <ArrowBackIcon/>
                        <div style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <Translate
                                id="theme.blog.post.paginator.newerPost"
                                description="The blog post button label to navigate to the newer/previous post">
                                Newer post
                            </Translate>
                            <br/>
                            <span style={{fontSize: "20px"}}>{prevItem.title}</span>
                        </div>
                    </div>
                </Button>
            )}
            {nextItem && (
                <Button
                    variant="outlined"
                    href={nextItem.permalink}
                    {...nextItem}
                    style={{height: "6rem", justifyContent: 'right'}}
                >
                    <div style={{display: 'inline-flex', alignItems: 'flex-start'}}>
                        <div style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <Translate
                                id="theme.blog.post.paginator.olderPost"
                                description="The blog post button label to navigate to the older/next post">
                                Older post
                            </Translate>
                            <br/>
                            <span style={{fontSize: "20px"}}>{nextItem.title}</span>
                        </div>
                        <ArrowForwardIcon/>
                    </div>
                </Button>
            )}
        </nav>
    );
}

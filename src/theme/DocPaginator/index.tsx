/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Translate, {translate} from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import type {Props} from '@theme/DocPaginator';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './styles.modules.css';
import clsx from "clsx";

export default function DocPaginator(props: Props): ReactNode {
    const {previous, next} = props;
    return (
        <nav
            className="pagination-nav docusaurus-mt-lg"
            aria-label={translate({
                id: 'theme.docs.paginator.navAriaLabel',
                message: 'Docs pages',
                description: 'The ARIA label for the docs pagination',
            })}>
            {previous && (
                <Button
                    variant="outlined"
                    href={previous.permalink}
                    {...previous}
                    className={clsx(styles.navigationButton, styles.buttonLeft)}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                    <ArrowBackIcon/>
                        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Translate
                                id="theme.docs.paginator.previous"
                                description="The label used to navigate to the previous doc">
                                Previous
                            </Translate>
                            <br/>
                            <span className={styles.navigationTitle}>{previous.title}</span>
                        </div>
                    </div>
                </Button>
            )}
            {next && (
                <Button
                    variant="outlined"
                    href={next.permalink}
                    {...next}
                    className={clsx(styles.navigationButton, styles.buttonRight)}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                        <div style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <Translate
                                id="theme.docs.paginator.next"
                                description="The label used to navigate to the next doc">
                                Next
                            </Translate>
                            <br/>
                            <span className={styles.navigationTitle}>{next.title}</span>
                        </div>
                        <ArrowForwardIcon/>
                    </div>
                </Button>
            )}
        </nav>
    );
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/ExternalLink';

export default function IconExternalLink({
                                             width = 16,
                                             height = 16,
                                         }: Props): ReactNode {
    return (
        <svg
            width={width}
            height={height}
            aria-hidden="true"
            viewBox="0 0 24 24"
            style={{marginLeft: "0.3rem"}}>
            <path
                fill="currentColor"
                d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
            />
        </svg>
    );
}

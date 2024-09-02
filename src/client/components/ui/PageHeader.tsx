import React from "react";
import type { PropsWithChildren } from "react";

import styles from './PageHeader.module.scss';

export type PageHeaderProp = PropsWithChildren;

export const PageHeader: React.FC<PageHeaderProp> = (p) => {
    return (
        <h1 className={styles.header}>{p.children}</h1>
    );
};
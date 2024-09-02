import React, { type PropsWithChildren } from "react";

import { Sidebar } from "../domains/sidebar/Sidebar";
import styles from './DefaultLayout.module.scss';

export const DefaultLayout: React.FC<PropsWithChildren> = (p) => {
    return (
        <>
            <Sidebar />
            <main className={styles.main}>
                <div className={styles.inner}>
                    <div className={styles.card}>
                        {p.children}
                    </div>
                    <footer className={styles.footer}>
                        (C)2023-2024 Shrimpia Network<br />
                        政府は、国民および帝国政府による特別な許諾を得た者のみに対し、本システムの利用を許諾する。<br />
                        本システムの利用により生じたいかなる損害に対しても、政府は責任を負わない。<br />
                    </footer>
                </div>
            </main>
        </>
    );
};
import React from "react";

import styles from './index.module.scss';

export default (() => {
    return (
        <>
            <h1 className="_page-header">おかえりなさい、るちーかさん。</h1>
            <div className={styles.bento}>
                <div className={styles.card} style={{ gridArea: '1 / 1 / 2 / 3' }} />
                <div className={styles.card} style={{ gridArea: '1 / 3 / 3 / 5' }} />
                <div className={styles.card} style={{ gridArea: '2 / 1 / 4 / 3' }} />
                <div className={styles.card} style={{ gridArea: '3 / 3 / 3 / 5' }} />
            </div>
        </>
    );
}) as React.FC;

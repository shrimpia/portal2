import React from "react";
import { Button } from "../components/ui/Button";

import styles from './emoji-request.module.scss';

export default (() => {
    return (
        <>
            <h1 className="_page-header">絵文字リクエスト</h1>
            <p>
                シュリンピア帝国で利用できるカスタム絵文字を、あなたも作って申請しましょう！<br/>
                厳正な審査がありますが、好きな言葉や自分の絵をカスタム絵文字として使えるようになるチャンスです！
            </p>
            <p>
                絵文字を作成・申請する前に、必ずガイドラインをお読みください！<br />
                <a href="https://docs.shrimpia.network/emoji-guideline">絵文字申請ガイドライン</a>
            </p>
            <div className={styles.commands}>
                <Button variant="primary">
                    <i className="_icon-horizontal ti ti-plus" />
                    申請する
                </Button>
                <Button>
                    <i className="_icon-horizontal ti ti-settings" />
                    管理…
                </Button>
            </div>
        </>
    );
}) as React.FC;

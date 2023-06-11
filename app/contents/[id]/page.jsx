import React from "react";
import Header from "@/app/components/Header";
import styles from "./page.module.css";
import Link from "next/link";

const page = (props) => {
  console.log("propsで運ばれたものだよ", props);
  return (
    <div>
      <Header title={"スペシャリスト(初級)"} />
      <h3 className={styles.contents}>出題内容</h3>

      <p className={styles.text}>
        生産現場から最終商品に至る、カカオや
        <br />
        チョコレートに関する幅広い知識を習得
        <br />
        し、自らのチョコレートの世界を広げる
        <br />
        ことができる方向けの初級レベル。
      </p>
      <Link href="/" className={styles.button}>
        20 問
      </Link>
    </div>
  );
};

export default page;

import React from "react";
import Header from "@/app/components/Header";
import styles from "./page.module.css";
import Link from "next/link";

const ITEMS = [
  { title: "スペシャリスト(初級)", contents: "出題内容" },
  { title: "エキスパート(中級)", contents: "出題内容" },
  { title: "プロフェッショナル(上級)", contents: "出題内容" },
];
function page() {
  return (
    <div>
      <Header title={styles.title} />
      <h3 className={styles.contents}></h3>

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

      <Header title={styles.title} />
      <h3 className={styles.contents}></h3>

      <p className={styles.text}>
        カカオやチョコレートに関する幅広い
        <br />
        知識をもとに、友人、知人など自らが
        <br />
        所属するコミュニティーにチョコレート
        <br />
        の楽しみの世界を広げる活動を行うこと
        <br />
        ができる方向けの中級レベル。
      </p>
      <Link href="/" className={styles.button}>
        20 問
      </Link>
      <Header title={styles.title} />
      <h3 className={styles.contents}></h3>

      <p className={styles.text}>
        カカオやチョコレートに関する幅広く、
        <br />
        専門的な知識を持ち、自らチョコレート
        <br />
        文化を世の中に発信できる。
        <br />
        チョコレート好きの頂点を目指す方向け
        <br />
        の上級レベル。
      </p>
      <Link href="/" className={styles.button}>
        20 問
      </Link>
    </div>
  );
}

export default page;

import React from "react";
import styles from "./page.module.css";
const page = () => {
  return (
    <div>
      <h2 className={styles.name}>概要欄</h2>
      <ul className={styles.ul}>
        {/* map関数 */}
        <li className={styles.li}> スペシャリスト（初級）</li>
        <li className={styles.li}> エキスパート（中級）</li>
        <li className={styles.li}> プロフェッショナル（上級）</li>
      </ul>
    </div>
  );
};

export default page;

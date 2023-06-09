import React from "react";
import styles from "./page.module.css";
const page = (props) => {
  console.log(props);

  return (
    <div>
      <h2 className={styles.name}>概要欄</h2>
      <ul className={styles.ul}>
        <li className={styles.li}> スペシャリスト（初級）</li>
        <li className={styles.li}> エキスパート（中級）</li>
        <li className={styles.li}> プロフェッショナル（上級）</li>
      </ul>
      {/* <button className={stylse.button}>ul</button> */}
    </div>
  );
};

export default page;

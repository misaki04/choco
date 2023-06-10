import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const ITEMS = [
  { text: "スペシャリスト(初級)", href: "/" },
  { text: "エキスパート(中級)", href: "/" },
  { text: "プロフェッショナル(上級)", href: "/" },
];
export default function item() {
  return (
    <div>
      <h2 className={styles.names}>項目</h2>
      <ul className={styles.ul}>
        {ITEMS.map((list, index) => {
          return (
            <div className={styles.listItem} key={index}>
              <div>★</div>
              <Link href={list.href} className={styles.button} key={index}>
                {list.text}
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "../components/Header";

const ITEMS = [
  { text: "スペシャリスト(初級)", href: "special" },
  { text: "エキスパート(中級)", href: "expert" },
  { text: "プロフェッショナル(上級)", href: "professional" },
];
export default function item() {
  return (
    <div>
      <Header title={"項目"} />
      <ul className={styles.ul}>
        {ITEMS.map((list, index) => {
          return (
            <div className={styles.listItem} key={index}>
              <div>★</div>
              <Link
                as={`../contents/${list.href}`}
                href={`../contents/${list.href}`}
                className={styles.button}
                key={index}
              >
                {list.text}
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import Return from "../images/Return.jpg";

const Header = (props) => {
  return (
    <div>
      <h2 className={styles.names}>
        <Link href="" className={styles.returnImg}>
          <Image className={styles.returnImg} src={Return} alt="戻るボタン" />
        </Link>
        {props.title}
      </h2>
    </div>
  );
};

export default Header;

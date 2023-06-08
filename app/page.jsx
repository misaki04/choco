import { Counter } from "@/src/components/Counter";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Cacao from "../app/images/Cacao2.jpg";
import Cacao1 from "../app/images/Cacao1.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={Cacao} alt="カカオ" />
        {/* <img src="images/Cacao2.icon" alt="カカオ" /> */}
      </header>
      <div className={styles.title}>
        <h1 className={styles.name}>チョコレート検定</h1>
        <Image className={styles.img} src={Cacao1} alt="チョコレート" />
      </div>
      <Link className={styles.button} href={"../overview"}>
        START
      </Link>
    </div>
  );
}

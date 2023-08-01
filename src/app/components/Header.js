import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <main className={styles.headercontent}>

      <div className={styles.logo}>
        <Image src="/dog.png" width={50} height={50} alt="Picture of a dog" />
        <h3>Atomic-Tools</h3>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/ipca">IPCA</Link>
      </nav>
      </main>
    </header>
  );
}

import Link from "next/link";
import styles from '../page.module.css'
import Quadrado from "../components/Quadrado";
import Circulo from "../components/Circulo";

export default function Ipca() {
  return (
    <main>
      <div>
        <p>Pagina IPCA</p>
      </div>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <div className={styles.forma}>
        <Quadrado />
        <Circulo />
      </div>
    </main>
  );
}

import Link from "next/link";
import styles from "./Header.module.css";

function Header({}) {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href={"/"} className={styles.navigationItem}>
          Home
        </Link>
        <Link href={"/rooms"} className={styles.navigationItem}>
          Rooms
        </Link>
      </nav>
    </header>
  );
}

export default Header;

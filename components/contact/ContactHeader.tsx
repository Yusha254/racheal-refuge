import Link from "next/link";
import styles from "./ContactHeader.module.css";

/**
 * The contact page ships its own simpler header in the source markup
 * (different from the shared Navbar used on the other pages), so it's kept
 * as its own small component rather than forced into the shared Navbar.
 */
export function ContactHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>🏀 RACHEAL REFUGEE</div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/owners-progress">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

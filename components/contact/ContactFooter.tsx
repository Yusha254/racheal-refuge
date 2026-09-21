import styles from "./ContactFooter.module.css";

/**
 * The contact page's own compact footer, distinct from the shared Footer
 * used on the other pages (see ContactHeader for the same rationale).
 */
export function ContactFooter() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2026 Rachel&apos;s Refuge. Made with{" "}
        <span className={styles.heart}>💛</span> and{" "}
        <span className={styles.heart}>💜</span>
      </p>
    </footer>
  );
}

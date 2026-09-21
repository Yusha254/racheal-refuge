import type { ReactNode } from "react";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  eyebrow: string;
  /** Pass the gold-highlighted words wrapped in <em> inside the heading. */
  heading: ReactNode;
  paragraph: string;
}

/**
 * The full-bleed purple hero banner used at the top of every page
 * (`.hero` on the programs page, `.page-hero` on the owners page — both
 * pages share the exact same markup and styling, so one component covers
 * both).
 */
export function PageHero({ eyebrow, heading, paragraph }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
    </section>
  );
}

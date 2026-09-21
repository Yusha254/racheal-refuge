import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  mini: string;
  heading: string;
  paragraph?: string;
}

/** Centered "eyebrow + heading + paragraph" block that opens every section. */
export function SectionTitle({ mini, heading, paragraph }: SectionTitleProps) {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.mini}>{mini}</div>
      <h2 className={styles.heading}>{heading}</h2>
      {paragraph ? <p className={styles.paragraph}>{paragraph}</p> : null}
    </div>
  );
}

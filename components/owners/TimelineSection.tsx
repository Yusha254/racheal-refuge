import type { TimelineEntry } from "@/types";
import styles from "./TimelineSection.module.css";

interface TimelineProps {
  entries: TimelineEntry[];
}

/** Vertical timeline with entries alternating left/right of a center rail. */
export function Timeline({ entries }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      {entries.map((entry) => (
        <div key={entry.title} className={styles.item}>
          <div className={styles.dot} />
          <div className={styles.card}>
            <div className={styles.year}>{entry.eyebrow}</div>
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

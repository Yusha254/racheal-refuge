import type { StatItem } from "@/types";
import styles from "./StatsSection.module.css";

interface StatsGridProps {
  stats: StatItem[];
}

/** Four-up grid of headline numbers ("250+ Girls Reached", etc). */
export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className={styles.grid}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <div className={styles.number}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
          {stat.note ? <div className={styles.note}>{stat.note}</div> : null}
        </div>
      ))}
    </div>
  );
}

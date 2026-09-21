import type { GoalItem } from "@/types";
import styles from "./GoalsSection.module.css";

interface GoalsGridProps {
  goals: GoalItem[];
}

/** Purple cards outlining what the organization is working toward next. */
export function GoalsGrid({ goals }: GoalsGridProps) {
  return (
    <div className={styles.grid}>
      {goals.map((goal) => (
        <article key={goal.title} className={styles.card}>
          <h3>{goal.title}</h3>
          <p>{goal.description}</p>
        </article>
      ))}
    </div>
  );
}

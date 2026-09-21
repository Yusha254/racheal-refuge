import type { NumberedFact } from "@/types";
import styles from "./NumberedFactCard.module.css";

type Variant = "badge" | "large";

interface NumberedFactGridProps {
  items: NumberedFact[];
  variant: Variant;
}

/**
 * Renders a grid of "number + title + description" cards. Two pages need
 * the same shape of content styled two different ways (a circular badge
 * grid of 4, and a tinted large-number grid of 3) so the variant is a prop
 * rather than two near-duplicate components (Open/Closed principle).
 */
export function NumberedFactGrid({ items, variant }: NumberedFactGridProps) {
  const gridClass =
    variant === "badge"
      ? `${styles.grid} ${styles.columns4}`
      : `${styles.grid} ${styles.columns3}`;

  return (
    <div className={gridClass}>
      {items.map((item) =>
        variant === "badge" ? (
          <div key={item.number} className={styles.badgeCard}>
            <div className={styles.badgeNumber}>{item.number}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ) : (
          <article key={item.number} className={styles.largeCard}>
            <div className={styles.largeNumber}>{item.number}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        )
      )}
    </div>
  );
}

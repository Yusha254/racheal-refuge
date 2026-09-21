import Image from "next/image";
import Link from "next/link";
import type { ProgramItem } from "@/types";
import styles from "./ProgramCard.module.css";

interface ProgramCardProps {
  program: ProgramItem;
}

/** One program card: icon badge, title, blurb, feature list and a link. */
export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        {program.image && (
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
            className={styles.cardImage}
          />
        )}
        <div className={styles.imageOverlay} />
        <div className={styles.icon}>{program.icon}</div>
      </div>

      <div className={styles.content}>
        <h3>{program.title}</h3>
        <p>{program.description}</p>

        <ul className={styles.list}>
          {program.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <Link href={program.linkHref} className={styles.link}>
          {program.linkLabel}
        </Link>
      </div>
    </article>
  );
}

interface ProgramsGridProps {
  programs: ProgramItem[];
}

/** Responsive 3/2/1-column grid of ProgramCards. */
export function ProgramsGrid({ programs }: ProgramsGridProps) {
  return (
    <div className={styles.grid}>
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
}

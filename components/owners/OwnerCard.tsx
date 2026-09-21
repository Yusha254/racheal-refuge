import Image from "next/image";
import type { OwnerProfile } from "@/types";
import styles from "./OwnerCard.module.css";

interface OwnerCardProps {
  owner: OwnerProfile;
}

/** Profile card for a single founder/owner, with photo or avatar placeholder, role and quote. */
export function OwnerCard({ owner }: OwnerCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        {owner.image ? (
          <Image
            src={owner.image}
            alt={owner.name}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        ) : (
          <div className={styles.avatar}>{owner.initial}</div>
        )}
      </div>

      <div className={styles.body}>
        <h3>{owner.name}</h3>
        <div className={styles.role}>{owner.role}</div>

        {owner.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {owner.focusAreas && owner.focusAreas.length > 0 && (
          <div className={styles.focusBox}>
            <span className={styles.focusLabel}>Leadership &amp; Focus Areas:</span>
            <ul className={styles.focusList}>
              {owner.focusAreas.map((area, idx) => (
                <li key={idx}>{area}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.quote}>"{owner.quote}"</div>
      </div>
    </article>
  );
}

interface OwnerGridProps {
  owners: OwnerProfile[];
}

export function OwnerGrid({ owners }: OwnerGridProps) {
  return (
    <div className={styles.grid}>
      {owners.map((owner) => (
        <OwnerCard key={owner.name} owner={owner} />
      ))}
    </div>
  );
}

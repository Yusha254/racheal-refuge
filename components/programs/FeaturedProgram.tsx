import Image from "next/image";
import { Button } from "@/components/ui/Button";
import styles from "./FeaturedProgram.module.css";

interface FeaturedProgramProps {
  eyebrow: string;
  title: string;
  image?: string;
  description: string;
  features: string[];
  linkLabel: string;
  linkHref: string;
}

/** Two-column spotlight block introducing the flagship program. */
export function FeaturedProgram({
  eyebrow,
  title,
  image,
  description,
  features,
  linkLabel,
  linkHref,
}: FeaturedProgramProps) {
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <Image
          src={image || "/images/featured-program.jpg"}
          alt={title}
          fill
          sizes="(max-width: 1000px) 100vw, 50vw"
          className={styles.featuredImg}
        />
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h2>{title}</h2>
        <p>{description}</p>

        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <Button href={linkHref}>{linkLabel}</Button>
      </div>
    </div>
  );
}

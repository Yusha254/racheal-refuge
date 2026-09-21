import { Button } from "@/components/ui/Button";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  id?: string;
  heading: string;
  paragraph: string;
  buttonLabel: string;
  buttonHref: string;
}

/** Purple closing call-to-action band, reused on the programs and owners pages. */
export function CTASection({
  id,
  heading,
  paragraph,
  buttonLabel,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className={styles.cta} id={id}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
      <Button href={buttonHref}>{buttonLabel}</Button>
    </section>
  );
}

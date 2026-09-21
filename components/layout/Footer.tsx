import Link from "next/link";
import {
  footerWebsiteLinks,
  footerExploreLinks,
  contactDetails,
} from "@/data/navigation";
import styles from "./Footer.module.css";

/**
 * Site-wide footer. Link groups are sourced from `data/navigation.ts` so the
 * footer never drifts from the header nav it mirrors.
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <div className={styles.footerBrand}>
            Rachel&apos;s
            <span>REFUGE</span>
          </div>
          <p className={styles.tagline}>Ball. Belonging. Better Futures.</p>
        </div>

        <div>
          <h3>Website</h3>
          {footerWebsiteLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Explore</h3>
          {footerExploreLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Contact</h3>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
          <p className={styles.location}>📍 {contactDetails.location}</p>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2026 <strong>Rachel&apos;s Refuge</strong>. All Rights Reserved.
        <br />
        Empowering Girls • Building Champions • Changing Lives
      </div>
    </footer>
  );
}

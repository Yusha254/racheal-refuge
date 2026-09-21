import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/data/navigation";
import styles from "./Navbar.module.css";

interface NavbarProps {
  /** Path of the current page, used to highlight the active nav link. */
  activePath?: string;
}

/**
 * Sticky top navigation, identical across all pages of the site. Content
 * comes from a single data source (`primaryNav`) so adding or renaming a
 * page only requires a change in one place.
 */
export function Navbar({ activePath }: NavbarProps) {
  return (
    <header className={styles.navbar}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          <div className={styles.brandLogoWrapper}>
            <Image
              src="/images/logo.png"
              alt="Rachel's Refuge Logo"
              width={52}
              height={52}
              className={styles.brandLogo}
              priority
            />
          </div>
          <div>
            <div className={styles.brandName}>Rachel&apos;s</div>
            <div className={styles.brandSub}>REFUGE</div>
          </div>
        </Link>

        <nav className={styles.navLinks}>
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={activePath === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/contact">Join Us</Button>
      </div>
    </header>
  );
}

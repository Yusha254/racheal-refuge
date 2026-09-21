import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "gold" | "purple";

interface BaseProps {
  variant?: Variant;
  lift?: boolean;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  href: string;
}

interface ActionButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

function classes(variant: Variant, lift: boolean, className?: string) {
  return [
    styles.button,
    variant === "purple" ? styles.purple : "",
    lift ? styles.lift : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Single reusable CTA button. Renders as a Next.js link when `href` is
 * provided, otherwise as a real <button> for in-page actions (e.g. form
 * submit). This keeps every "gold pill" / "purple pill" button across the
 * site backed by one implementation (DRY, Open/Closed via the variant prop).
 */
export function Button({
  variant = "gold",
  lift = false,
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={classes(variant, lift, className)}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes(variant, lift, className)}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

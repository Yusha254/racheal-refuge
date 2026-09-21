// Shared domain types. Components depend on these interfaces rather than
// on any single page's data, so the same component can be reused anywhere
// that shape of data shows up (Interface Segregation / Dependency Inversion).

import type { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ProgramItem {
  id: string;
  icon: string;
  title: string;
  image?: string;
  description: string;
  bullets: string[];
  linkLabel: string;
  linkHref: string;
}

export interface NumberedFact {
  number: string;
  title: string;
  description: string;
}

export interface OwnerProfile {
  initial: string;
  name: string;
  role: string;
  image?: string;
  paragraphs: string[];
  quote: string;
  focusAreas?: string[];
}

export interface StatItem {
  value: string;
  label: string;
  note?: string;
}

export interface TimelineEntry {
  eyebrow: string;
  title: string;
  description: string;
}

export interface GoalItem {
  title: string;
  description: string;
}

export interface PageHeroContent {
  eyebrow: string;
  heading: ReactNode;
  paragraph: string;
}

export interface SectionTitleContent {
  mini: string;
  heading: string;
  paragraph?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  alt: string;
  isVideo?: boolean;
  videoUrl?: string;
  poster?: string;
}


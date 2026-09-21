import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/ui/CTASection";
import { NumberedFactGrid } from "@/components/ui/NumberedFactCard";
import { ProgramsGrid } from "@/components/programs/ProgramCard";
import { FeaturedProgram } from "@/components/programs/FeaturedProgram";
import {
  programs,
  featuredProgram,
  joinRoles,
  impactFacts,
} from "@/data/programs";
import styles from "./ProgramsPage.module.css";

interface ProgramsPageProps {
  activePath: string;
}

/**
 * Full "Our Programs" page. Rendered at both "/" and "/programs" because the
 * two source pages (FRONT_PAGE.html and PAGE_3.html) are identical — one
 * component, two routes, instead of duplicating the markup.
 */
export function ProgramsPage({ activePath }: ProgramsPageProps) {
  return (
    <>
      <Navbar activePath={activePath} />

      <PageHero
        eyebrow="Beyond The Game"
        heading={
          <>
            Rachel&apos;s <em>Refuge</em>
          </>
        }
        paragraph="Welcome to Rachel's Refuge, a basketball community dedicated to empowering young girls and women through sports, teamwork, confidence and leadership."
      />

      <section className={`section ${styles.programsSection}`}>
        <div className="container">
          <SectionTitle
            mini="WHAT WE DO"
            heading="Our Programs"
            paragraph="Building confidence, leadership and opportunity for girls through basketball, mentorship, education and community engagement."
          />
          <ProgramsGrid programs={programs} />
        </div>
      </section>

      <section className={`section ${styles.featuredSection}`}>
        <div className="container">
          <FeaturedProgram {...featuredProgram} />
        </div>
      </section>

      <section className={`section ${styles.joinSection}`}>
        <div className="container">
          <SectionTitle
            mini="JOIN US"
            heading="Who Can Join?"
            paragraph="Rachel's Refuge grows through the participation and support of the whole community."
          />
          <NumberedFactGrid items={joinRoles} variant="badge" />
        </div>
      </section>

      <section className={`section ${styles.impactSection}`}>
        <div className="container">
          <SectionTitle
            mini="OUR IMPACT"
            heading="Why Our Programs Matter"
            paragraph="Basketball is more than just a game. It teaches discipline, teamwork, confidence, leadership and determination."
          />
          <NumberedFactGrid items={impactFacts} variant="large" />
        </div>
      </section>

      <CTASection
        id="contact"
        heading="Interested in Joining Our Basketball Community?"
        paragraph="Whether you are a player, coach, mentor, volunteer or supporter, there is a place for you at Rachel's Refuge. Let's grow together through basketball!"
        buttonLabel="Join Us"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}

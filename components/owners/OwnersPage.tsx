import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/ui/CTASection";
import { OwnerGrid } from "@/components/owners/OwnerCard";
import { StatsGrid } from "@/components/owners/StatsSection";
import { Timeline } from "@/components/owners/TimelineSection";
import { GoalsGrid } from "@/components/owners/GoalsSection";
import { owners, stats, timeline, goals, rachelOdima } from "@/data/owners";
import styles from "./OwnersPage.module.css";

interface OwnersPageProps {
  activePath: string;
}

/** Full "About Us / Our Story" page, based on OUR STORY.html content. */
export function OwnersPage({ activePath }: OwnersPageProps) {
  return (
    <>
      <Navbar activePath={activePath} />

      <PageHero
        eyebrow="A Mentoring Program for Girls"
        heading={
          <>
            Rachel&apos;s <em>Refuge</em>
          </>
        }
        paragraph="Inspiring girls to dream boldly, persevere through challenges, and discover what is possible through basketball, mentorship, leadership and purpose."
      />

      {/* OUR STORY — Rachel Odima */}
      <section className={`section ${styles.ownersSection}`}>
        <div className="container">
          <SectionTitle
            mini="OUR STORY"
            heading="The Story Behind Rachel's Refuge"
            paragraph="Every great mission has a story. Ours begins with Rachel Odima."
          />

          <div className={styles.storyCard}>
            <div className={styles.storyHeader}>
              <div className={styles.storyIcon}>🏀</div>
              <div>
                <h3>{rachelOdima.name}</h3>
                <span className={styles.storySubtitle}>A Legacy of Purpose and Perseverance</span>
              </div>
            </div>

            {rachelOdima.image && (
              <div className={styles.storyImageWrap}>
                <Image
                  src={rachelOdima.image}
                  alt="Rachel Odima"
                  width={400}
                  height={450}
                  style={{ objectFit: "cover", borderRadius: "16px" }}
                />
              </div>
            )}

            {rachelOdima.paragraphs.map((p) => (
              <p key={p} className={styles.storyPara}>{p}</p>
            ))}

            <blockquote className={styles.highlight}>
              "{rachelOdima.quote}"
            </blockquote>
          </div>

          {/* Rachel's Legacy */}
          <div className={styles.legacyBox}>
            <h2>Rachel&apos;s Legacy</h2>
            <p>
              Rachel&apos;s story represents more than basketball. It represents determination, faith,
              hard work, compassion and the courage to continue pursuing a dream even when the
              journey becomes difficult.
            </p>
            <p>
              Rachel&apos;s Refuge carries this legacy forward by creating a supportive environment
              where girls can learn, grow and believe in themselves.
            </p>
            <p>
              Through basketball and mentorship, the program seeks to give young girls the
              encouragement and opportunities they need to recognize their potential and pursue
              their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE IN — Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <SectionTitle
            mini="OUR VALUES"
            heading="What We Believe In"
          />
          <div className={styles.valuesGrid}>
            {[
              { icon: "💪", title: "Perseverance", desc: "We encourage girls to keep going even when challenges arise." },
              { icon: "❤️", title: "Compassion", desc: "We create a caring and supportive community for every girl." },
              { icon: "🌟", title: "Excellence", desc: "We encourage young people to pursue excellence in academics, sports and life." },
              { icon: "🤝", title: "Mentorship", desc: "We connect girls with positive encouragement, guidance and role models." },
            ].map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD LEADERSHIP */}
      <section className={`section ${styles.ownersSection}`}>
        <div className="container">
          <SectionTitle
            mini="THE LEADERSHIP"
            heading="Meet Our Board"
            paragraph="Our board members provide leadership, guidance and support as Rachel's Refuge continues to create opportunities for girls to grow through basketball and mentorship."
          />
          <OwnerGrid owners={owners} />
        </div>
      </section>

      {/* PROGRESS STATS */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <SectionTitle
            mini="OUR IMPACT"
            heading="Progress So Far"
          />
          <StatsGrid stats={stats} />
        </div>
      </section>

      {/* TIMELINE */}
      <section className={`section ${styles.progressSection}`}>
        <div className="container">
          <SectionTitle
            mini="OUR JOURNEY"
            heading="Progress Timeline"
            paragraph="A story of how Rachel's Refuge is growing."
          />
          <Timeline entries={timeline} />
        </div>
      </section>

      {/* GOALS */}
      <section className={`section ${styles.goalsSection}`}>
        <div className="container">
          <SectionTitle
            mini="LOOKING AHEAD"
            heading="Our Next Goals"
            paragraph="The next stage of growth for Rachel's Refuge."
          />
          <GoalsGrid goals={goals} />
        </div>
      </section>

      {/* MISSION */}
      <CTASection
        id="mission"
        heading="Our Mission"
        paragraph="Rachel's Refuge exists to empower girls through basketball and mentorship by building confidence, developing leadership, encouraging perseverance and helping young women recognize that their dreams are possible."
        buttonLabel="Join Us"
        buttonHref="/contact"
      />

      <Footer />
    </>
  );
}

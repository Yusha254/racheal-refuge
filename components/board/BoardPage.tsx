import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { owners, rachelOdima } from "@/data/owners";
import styles from "./BoardPage.module.css";

export function BoardPage() {
  return (
    <>
      <Navbar activePath="/board" />

      <PageHero
        eyebrow="Leadership beyond the game"
        heading={
          <>
            Our Board <em>Members</em>
          </>
        }
        paragraph="Meet the dedicated people who help guide Rachel's Refuge and support our mission of empowering girls through basketball, mentorship, leadership and purpose."
      />

      <section className={styles.section} id="board-top">
        <div className={styles.intro}>
          <SectionTitle
            mini="Leadership"
            heading="Meet Our Board"
            paragraph="Our board members provide leadership, guidance and support as Rachel's Refuge continues to create opportunities for girls to grow through basketball and mentorship."
          />
          <div className={styles.yellowLine} />
        </div>

        <div className={styles.boardGrid}>
          {owners.map((member, index) => {
            const profileId = `member-profile-${index}`;
            return (
              <div key={member.name} className={styles.boardCard}>
                <div className={styles.photoBox}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={styles.photo}
                      sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "4rem",
                        color: "var(--purple-700)",
                        fontWeight: 800,
                      }}
                    >
                      {member.initial}
                    </div>
                  )}
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <div className={styles.memberRole}>{member.role}</div>
                  <p className={styles.memberDesc}>{member.paragraphs[0]}</p>

                  <Link
                    href={`#${profileId}`}
                    className={styles.profileButton}
                  >
                    View Full Profile →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rachel Odima Bio Section */}
        <div className={styles.profileSection} id="rachel-profile">
          <div className={styles.profileHeader}>
            <div>
              <h2 className={styles.profileName}>{rachelOdima.name}</h2>
              <div className={styles.profileRoleBadge}>{rachelOdima.role}</div>
            </div>
          </div>

          {rachelOdima.paragraphs.map((p, idx) => (
            <p key={idx} className={styles.profileParagraph}>
              {p}
            </p>
          ))}

          <Link href="#board-top" className={styles.backButton}>
            ↑ Back to Board Members
          </Link>
        </div>

        {/* Board Members Detailed Profile Sections */}
        {owners.map((member, index) => (
          <div
            key={member.name}
            className={styles.profileSection}
            id={`member-profile-${index}`}
          >
            <div className={styles.profileHeader}>
              <div>
                <h2 className={styles.profileName}>{member.name}</h2>
                <div className={styles.profileRoleBadge}>{member.role}</div>
              </div>
            </div>

            {member.paragraphs.map((p, idx) => (
              <p key={idx} className={styles.profileParagraph}>
                {p}
              </p>
            ))}

            <blockquote
              style={{
                background: "rgba(134, 41, 208, 0.08)",
                borderLeft: "4px solid var(--gold)",
                padding: "16px 20px",
                borderRadius: "0 12px 12px 0",
                fontStyle: "italic",
                margin: "18px 0",
                color: "var(--purple-800)",
                fontWeight: 600,
              }}
            >
              &ldquo;{member.quote}&rdquo;
            </blockquote>

            <h3
              style={{
                color: "var(--purple-700)",
                fontSize: "1.15rem",
                marginTop: "20px",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Leadership & Focus Areas:
            </h3>
            <ul className={styles.profileList}>
              {(
                member.focusAreas || [
                  "Strategic organizational leadership and governance",
                  "Mentorship and empowerment of young female athletes",
                  "Expanding community and institutional partnerships",
                  "Promoting education and life skills development",
                  "Advancing the vision and mission of Rachel's Refuge",
                ]
              ).map((area, idx) => (
                <li key={idx}>{area}</li>
              ))}
            </ul>

            <Link href="#board-top" className={styles.backButton}>
              ↑ Back to Board Members
            </Link>
          </div>
        ))}
      </section>

      {/* Mission Commitment */}
      <section className={styles.mission}>
        <h2 className={styles.missionTitle}>Our Commitment</h2>
        <p className={styles.missionText}>
          Rachel&apos;s Refuge is committed to empowering girls through
          basketball and mentorship while building confidence, leadership,
          perseverance and a belief that every girl has the potential to achieve
          extraordinary things.
        </p>
      </section>

      <Footer />
    </>
  );
}

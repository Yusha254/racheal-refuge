"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/types";
import styles from "./GalleryPage.module.css";

export function GalleryPage() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    },
    [setActiveItem]
  );

  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, handleKeyDown]);

  return (
    <>
      <Navbar activePath="/gallery" />

      <PageHero
        eyebrow="Our Gallery"
        heading={
          <>
            Moments That <em>Inspire</em>
          </>
        }
        paragraph="Explore moments from Rachel's Refuge and celebrate the girls, basketball, mentorship, teamwork and community that make our mission possible."
      />

      <section className={styles.section}>
        <div className={styles.intro}>
          <SectionTitle
            mini="Photo & Video Gallery"
            heading="Rachel's Refuge Gallery"
            paragraph="Every picture and video tells a story. Watch our featured video and browse our collection of memorable moments."
          />
          <div className={styles.yellowLine} />
        </div>

        {/* Featured Promo Video Player */}
        <div className={styles.featuredVideoSection}>
          <div className={styles.videoCard}>
            <div className={styles.videoContainer}>
              <video
                controls
                preload="metadata"
                poster="/images/thumbnail.jpeg"
                className={styles.videoPlayer}
              >
                <source src="/images/promo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.videoInfo}>
              <div className={styles.videoBadge}>▶ Featured Video</div>
              <h3 className={styles.videoTitle}>Rachel&apos;s Refuge Story &amp; Mission</h3>
              <p className={styles.videoDescription}>
                Experience how Rachel&apos;s Refuge empowers young girls through basketball development, mentorship, and community leadership.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => setActiveItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveItem(item);
                }
              }}
              aria-label={`View ${item.isVideo ? "video" : "photo"}: ${item.title}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 992px) 50vw, 25vw"
                  className={styles.cardImage}
                />
                {item.isVideo && (
                  <div className={styles.playBadge}>
                    <span className={styles.playIcon}>▶</span>
                  </div>
                )}
              </div>

              <div className={styles.overlay}>
                <div className={styles.overlayTitle}>{item.title}</div>
                <div className={styles.overlaySubtitle}>{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.messageBox}>
          <h2 className={styles.messageTitle}>More Than Basketball</h2>
          <p className={styles.messageText}>
            At Rachel&apos;s Refuge, every game, training session and gathering is
            an opportunity to build confidence, friendships, leadership and hope.
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className={styles.lightbox}
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Media preview modal"
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setActiveItem(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            {activeItem.isVideo ? (
              <div className={styles.lightboxVideoWrapper}>
                <video
                  controls
                  autoPlay
                  preload="metadata"
                  poster={activeItem.poster || "/images/thumbnail.jpeg"}
                  className={styles.lightboxVideo}
                >
                  <source
                    src={activeItem.videoUrl || "/images/promo-video.mp4"}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className={styles.lightboxImageWrapper}>
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className={styles.lightboxImage}
                  sizes="90vw"
                  priority
                />
              </div>
            )}
            <div className={styles.lightboxCaption}>
              <h3>{activeItem.title}</h3>
              <p>{activeItem.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

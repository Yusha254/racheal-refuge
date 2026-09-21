import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import styles from "@/components/contact/ContactForm.module.css";

/** Full contact page with unified Navbar and Footer. */
export function ContactPage() {
  return (
    <div className={styles.page}>
      <Navbar activePath="/contact" />

      <section className={styles.section}>
        <div className={styles.box}>
          <h1>💜 Get In Touch 💛</h1>
          <p>
            Have a question, want to support our basketball programs, or
            want to join us? Send us a message!
          </p>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

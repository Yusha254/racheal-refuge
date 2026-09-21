import { contactReasons } from "@/data/contact";
import styles from "./ContactForm.module.css";

/**
 * The contact form itself. This is presentation-only, matching the original
 * page's markup and FormSubmit.co wiring exactly — no client-side handling
 * or validation logic has been added, per the "UI only" scope of this pass.
 */
export function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/ianyeshua06@gmail.com"
      method="POST"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Message from Rachel's Refuge Website"
      />
      <input type="hidden" name="_captcha" value="true" />
      <input
        type="hidden"
        name="_next"
        value="https://yourwebsite.com/thank-you.html"
      />

      <label className={styles.field} htmlFor="name">
        Your Name
      </label>
      <input
        className={styles.input}
        type="text"
        id="name"
        name="name"
        placeholder="Enter your full name"
        required
      />

      <label className={styles.field} htmlFor="email">
        Your Email
      </label>
      <input
        className={styles.input}
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        required
      />

      <label className={styles.field} htmlFor="phone">
        Phone Number
      </label>
      <input
        className={styles.input}
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter your phone number"
      />

      <label className={styles.field} htmlFor="reason">
        Reason for Contact
      </label>
      <select className={styles.select} id="reason" name="reason" required defaultValue="">
        <option value="">-- Select an option --</option>
        {contactReasons.map((reason) => (
          <option key={reason} value={reason}>
            {reason}
          </option>
        ))}
      </select>

      <label className={styles.field} htmlFor="message">
        Your Message
      </label>
      <textarea
        className={styles.textarea}
        id="message"
        name="message"
        placeholder="Write your message here..."
        required
      />

      <button className={styles.submit} type="submit">
        🏀 SEND MESSAGE
      </button>
    </form>
  );
}

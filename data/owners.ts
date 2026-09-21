import type { OwnerProfile, StatItem, TimelineEntry, GoalItem } from "@/types";

export const owners: OwnerProfile[] = [
  {
    initial: "M",
    name: "Dr. Mary Machira",
    role: "Founder and Executive Director",
    image: "/images/Dr Mary.jpeg",
    paragraphs: [
      "A legacy of purpose, perseverance and empowerment through basketball.",
      "Dr. Mary Machira leads Rachel's Refuge with a deep commitment to creating opportunities for girls through basketball, mentorship, leadership and purpose.",
    ],
    quote: "Every girl deserves a place where she can dream bigger.",
    focusAreas: [
      "Strategic organizational leadership and governance",
      "Mentorship and empowerment of young female athletes",
      "Expanding community and institutional partnerships",
      "Promoting education and life skills development",
      "Advancing the vision and mission of Rachel's Refuge",
    ],
  },
  {
    initial: "K",
    name: "Rev. Ken Aringo",
    role: "Director & Founder of PHD Ministries",
    image: "/images/pastor-image.png",
    paragraphs: [
      "Driving community development and cultivating strategic partnerships to expand the vision and impact of Rachel's Refuge.",
      "Rev. Ken Aringo brings deep expertise in community building and collaborative outreach, strengthening our mission to empower girls by bridging the gap between our basketball programs and broader local initiatives.",
    ],
    quote: "Strong communities give young people the confidence to lead.",
    focusAreas: [
      "Driving community-centric governance",
      "Amplifying impact and reach",
      "Cultivating grassroots partnerships",
      "Championing collaborative life skills",
      "Advancing the mission through belonging",
    ],
  },
  {
    initial: "I",
    name: "Ian Oduor",
    role: "Board Member",
    image: "/images/ian-oduor.png",
    paragraphs: [
      "Spearheading technology, digital strategy and platform innovation for Rachel's Refuge.",
      "Ian Oduor oversees technical initiatives, outreach infrastructure, and digital platforms to amplify the organization's reach and impact for young girls.",
    ],
    quote: "Technology and sport together create boundless opportunities for the next generation.",
    focusAreas: [
      "Supporting strategic governance",
      "Facilitating digital mentorship",
      "Enabling community partnerships",
      "Assisting in life skills development",
      "Bolstering the core mission",
    ],
  },
];

export const rachelOdima = {
  name: "Rachel Odima",
  role: "Inspiration",
  paragraphs: [
    "Rachel Odima was a brilliant, compassionate force who played with a purpose. From a determined young athlete to a collegiate basketball champion, she turned every setback into motivation.",
    "As a proud American and Kenyan woman, Rachel dreamed of breaking barriers in sports and empowering young girls to see what was possible. Though her life was tragically cut short at age 20, her light still shines.",
    "Today, Rachel’s Refuge carries her mission forward—using mentorship, opportunity, and the game of basketball to transform youth.",
  ],
  quote: "Every setback can become motivation to keep moving forward.",
  image: "https://phdmini.org/wp-content/uploads/2025/06/WhatsApp-Image-2023-11-18-at-08.47.24.jpeg",
};

export const stats: StatItem[] = [
  { value: "250+", label: "Girls Reached" },
  { value: "12", label: "Training Sessions" },
  { value: "8", label: "Community Events" },
  {
    value: "5",
    label: "Core Programs",
    note: "Basketball • Mentorship • Education",
  },
];

export const timeline: TimelineEntry[] = [
  {
    eyebrow: "Beginning",
    title: "The Vision",
    description:
      "Rachel's Refuge begins with a vision to use basketball as a pathway to confidence, belonging and opportunity for girls.",
  },
  {
    eyebrow: "Growth",
    title: "First Training Programs",
    description:
      "Regular basketball sessions are introduced, giving girls a place to train, compete and build friendships.",
  },
  {
    eyebrow: "Community",
    title: "Mentorship & Education",
    description:
      "The organization expands beyond sport by adding mentorship, leadership and education support for young girls.",
  },
  {
    eyebrow: "Next Chapter",
    title: "School Visitation Week",
    description:
      "Rachel's Refuge launches its school visitation program, reaching students across schools with basketball, mentorship and inspiration.",
  },
];

export const goals: GoalItem[] = [
  {
    title: "Reach More Girls",
    description:
      "Expand basketball opportunities and make training accessible to more girls and young women across communities.",
  },
  {
    title: "Build a Strong Team",
    description:
      "Grow our coaching, volunteer and mentorship network so every participant receives quality support and guidance.",
  },
  {
    title: "Education & Careers",
    description:
      "Create more education, leadership and career pathways that continue beyond the basketball court.",
  },
];

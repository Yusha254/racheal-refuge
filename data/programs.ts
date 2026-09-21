import type { ProgramItem, NumberedFact } from "@/types";

export const programs: ProgramItem[] = [
  {
    id: "basketball",
    icon: "🏀",
    title: "Basketball Development",
    image: "/images/basketball-development.jpg",
    description:
      "Girls receive opportunities to develop basketball fundamentals, teamwork, discipline and confidence on and off the court.",
    bullets: [
      "Basketball fundamentals",
      "Shooting and dribbling",
      "Teamwork and discipline",
      "Confidence on and off the court",
      "Game experience",
    ],
    linkLabel: "JOIN TRAINING →",
    linkHref: "/contact",
  },
  {
    id: "mentorship",
    icon: "💜",
    title: "Girls Mentorship",
    image: "/images/girls-mentorship.jpg",
    description:
      "Mentorship sessions encourage young girls to develop confidence, positive values, personal responsibility and strong relationships.",
    bullets: [
      "One-on-one mentorship",
      "Confidence building",
      "Positive values",
      "Personal responsibility",
      "Strong relationships",
    ],
    linkLabel: "BECOME A MENTOR →",
    linkHref: "/contact",
  },
  {
    id: "outreach",
    icon: "📚",
    title: "School Outreach",
    image: "/images/school-outreach.jpg",
    description:
      "We visit schools to connect with students, share experiences and encourage girls to pursue education, sports and their dreams.",
    bullets: [
      "School visits",
      "Student engagement",
      "Experience sharing",
      "Encouraging education",
      "Sports inspiration",
    ],
    linkLabel: "SUPPORT OUTREACH →",
    linkHref: "/contact",
  },
  {
    id: "leadership",
    icon: "⭐",
    title: "Leadership Development",
    image: "/images/leadership-development.jpg",
    description:
      "Participants are encouraged to become leaders, role models and positive influences within their schools and communities.",
    bullets: [
      "Leadership skills",
      "Role model development",
      "Community influence",
      "Decision making",
      "Team captain training",
    ],
    linkLabel: "LEARN MORE →",
    linkHref: "/contact",
  },
  {
    id: "community",
    icon: "🤝",
    title: "Community Engagement",
    image: "/images/community-engagement.jpg",
    description:
      "Rachel's Refuge works to build relationships with schools, families, coaches and community partners.",
    bullets: [
      "School partnerships",
      "Family engagement",
      "Coach collaboration",
      "Community building",
      "Fundraising events",
    ],
    linkLabel: "GET INVOLVED →",
    linkHref: "/contact",
  },
  {
    id: "empowerment",
    icon: "🌟",
    title: "Girls Empowerment",
    image: "/images/girls-empowerment.jpg",
    description:
      "Our programs encourage girls to recognize their potential and understand that their circumstances do not have to determine their future.",
    bullets: [
      "Self-belief",
      "Potential recognition",
      "Overcoming barriers",
      "Future-focused goals",
      "Inspiring stories",
    ],
    linkLabel: "EXPLORE EMPOWERMENT →",
    linkHref: "/contact",
  },
];

export const featuredProgram = {
  eyebrow: "🏫 Featured Program",
  title: "School Visitation Week",
  image: "/images/featured-program.jpg",
  description:
    "Rachel's Refuge will conduct a week-long school visitation program from Monday, May 10, 2027 through Sunday, May 16, 2027.",
  features: [
    "Introduce students to basketball, mentorship, education and leadership opportunities",
    "Interact with students, coaches, teachers and school communities",
    "Encourage girls to believe in their abilities and pursue their goals",
    "Build lasting relationships between Rachel's Refuge and local schools",
    "MAY 10 – MAY 16, 2027",
  ],
  linkLabel: "JOIN THE PROGRAM ♡",
  linkHref: "/contact",
};

export const joinRoles: NumberedFact[] = [
  {
    number: "01",
    title: "Young Athletes",
    description: "Girls who want to learn, play and grow through basketball.",
  },
  {
    number: "02",
    title: "Coaches",
    description: "Basketball coaches who want to develop young athletes.",
  },
  {
    number: "03",
    title: "Mentors",
    description: "Positive role models ready to encourage and guide girls.",
  },
  {
    number: "04",
    title: "Supporters",
    description: "Partners, donors and volunteers who want to make an impact.",
  },
];

export const impactFacts: NumberedFact[] = [
  {
    number: "01",
    title: "Confidence",
    description:
      "Girls develop courage, self-belief and confidence through sport and mentorship.",
  },
  {
    number: "02",
    title: "Community",
    description:
      "Girls build friendships and relationships that create a sense of belonging.",
  },
  {
    number: "03",
    title: "Opportunity",
    description:
      "We connect young women with opportunities in sport, education and leadership.",
  },
];

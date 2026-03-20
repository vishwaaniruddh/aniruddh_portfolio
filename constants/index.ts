import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/akshar_aniruddh/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/aniruddh.vishwakarma.3",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/aniruddhvishwa",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/aniruddh-vishwakarma-164814b9/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/vishwaaniruddh",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Tailwind",
    image: "tailwind.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 50,
    height: 50,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Express",
    image: "express.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 50,
    height: 50,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [] as const;

export const PROJECTS = [
  {
    title: "Sri Shringarr Fashion Studio",
    description:
      "Full-featured e-commerce platform for fashion rental and sales. Integrated payment gateway, inventory management, order tracking, and customer management system with responsive design for seamless shopping experience.",
    image: "/projects/srishringarr.png",
    link: "https://srishringarr.com/",
    tech: ["PHP", "MySQL", "E-commerce"],
    metrics: "Rental & Sales Platform"
  },
  {
    title: "Yosshita Neha Fashion Studio",
    description:
      "E-commerce website for premium fashion brand with product catalog, shopping cart, secure checkout, and order management. Optimized for performance and user experience with modern UI/UX design.",
    image: "/projects/yosshitaneha.png",
    link: "https://yosshitaneha.com/",
    tech: ["PHP", "MySQL", "E-commerce"],
    metrics: "Fashion E-commerce"
  },
  {
    title: "Cymetrix Software",
    description:
      "Corporate website for CRM & Analytics company. Built with modern web technologies featuring service showcases, client testimonials, and lead generation forms. Optimized for SEO and conversion.",
    image: "/projects/cymetrix.png",
    link: "https://www.cymetrixsoft.com/",
    tech: ["Web Development", "CMS"],
    metrics: "Corporate Website"
  },
  {
    title: "Singularity Credit",
    description:
      "NBFC platform offering embedded credit solutions. Built secure financial platform with technology-backed credit systems, business partnerships management, and compliance features.",
    image: "/projects/singularity.png",
    link: "https://singularitycredit.com/",
    tech: ["FinTech", "Security"],
    metrics: "Financial Platform"
  },
  {
    title: "Eastspring Investments",
    description:
      "Global asset management platform with Asia focus. Developed investment solutions portal with client management, financial tools, and secure data handling for enterprise-level operations.",
    image: "/projects/eastspring.png",
    link: "https://www.eastspring.com/",
    tech: ["Enterprise", "Finance"],
    metrics: "Asset Management"
  },
  {
    title: "Clinics On Cloud",
    description:
      "India's first CDSCO-licensed Health ATM platform. Built health kiosk management system screening 65+ parameters. HIPAA & ISO 13485 certified with real-time health data processing.",
    image: "/projects/clinicsoncloud.png",
    link: "https://clinicsoncloud.com/",
    tech: ["HealthTech", "IoT"],
    metrics: "Health Monitoring"
  },
  {
    title: "AB VFX Studios",
    description:
      "TPN Certified VFX studio platform. Developed project management system, client portal, and service showcase. Features 24/7 operations support and high-quality talent management system.",
    image: "/projects/abvfx.png",
    link: "https://www.abvfxstudios.com/",
    tech: ["Media", "Project Management"],
    metrics: "VFX Production"
  },
] as const;

export const CRM_PROJECTS = [
  {
    title: "Project Management Portal",
    description:
      "Comprehensive CRM and project management system with role-based access control, task tracking, client management, and reporting. Features secure authentication and multi-user collaboration.",
    image: "/projects/crm-portal.png",
    link: "https://aniruddh.kesug.com/",
    tech: ["CRM", "Project Management", "RBAC"],
    metrics: "Demo Available",
    demoCredentials: {
      username: "admin",
      password: "AVav@@2026"
    }
  },
  {
    title: "eSurveillance Reporting System",
    description:
      "High-performance reporting system handling 20-30 million records. Built with Laravel + PostgreSQL, featuring optimized queries, scheduled report generation, and CSV/Excel exports. Enterprise-level data management.",
    image: "/projects/esurveillance.png",
    link: "https://github.com/vishwaaniruddh/21_reporting_laravel_crm",
    tech: ["Laravel", "PostgreSQL", "PHP"],
    metrics: "20-30M Records",
    demoCredentials: null
  },
  {
    title: "ATM Monitoring System",
    description:
      "Real-time monitoring system for ATM infrastructure built with Python Flask + MySQL. Multi-threaded architecture for parallel health checks of network, DVR, cameras, and hardware with automated status updates.",
    image: "/projects/atm_monitoring.png",
    link: "https://sarsspl.com/css/dash/esir/",
    tech: ["Python", "Flask", "MySQL"],
    metrics: "Real-time Monitoring",
    demoCredentials: null
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/vishwaaniruddh",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/aniruddh-vishwakarma-164814b9/",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/akshar_aniruddh/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/aniruddhvishwa",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/aniruddh.vishwakarma.3",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: null,
        link: "mailto:vishwaaniruddh@gmail.com",
      },
      {
        name: "Call: +91 7021889883",
        icon: null,
        link: "tel:+917021889883",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

import caiqueProfile1 from "../img/Caique_Who_I_am.webp";
import caiqueProfile2 from "../img/Caique_Who_I_am_2.webp";
import aisCertificate from "../img/AIS certificate.webp"; // Assuming this path
import unipCertificate from "../img/certificadounip.webp"; // Assuming this path

// New interface for carousel items within a section's page
export interface CarouselItem {
  image: string;
  title: string;
  description: string;
  details: string[];
}

export interface AboutPage {
  title: string;
  description: string;
  details?: readonly string[];
  image?: string; // For single-image pages
  carouselContent?: readonly CarouselItem[]; // For carousel pages
}

export interface AboutSection {
  readonly id: string;
  readonly label: string;
  readonly pages: readonly AboutPage[];
  readonly title: string[];
  readonly images?: string[]; // Main image for each page (if not using carouselContent)
  readonly description: string[]; // Main description for each page
  readonly details: readonly string[][]; // Main details for each page
  readonly carouselContent?: CarouselItem[]; // Optional: for sections with an internal carousel
}

export const aboutSections: readonly AboutSection[] = [
  {
    id: "who-I-am",
    label: "Who I am",
    pages: [
      {
        title: "Hey there, great to have you here!",
        description: `\nI’m Caique, but you can call me Cai or Caiquinho—whichever feels right. I’ve been around since 1993; saying that out loud makes it feel like a century ago, but I’m proud of the miles I’ve put in. Every year has been an opportunity to learn, rethink my experiences, and jump into new ones with a fresh perspective.
\n\n  Born in Brazil, now living in New Zealand—I’m grateful for the perspective that comes with having two homes.`,
        image: caiqueProfile1,
      },
      {
        title: "My way, hobbies and philosophy",
        description: `I’m a mix of forward-thinking and careful craftsmanship. While I can be quiet initially, I really hit my stride once there’s a bit of rapport. I can talk about anything, but I value listening even more; for me, the best conversations are the ones that help us both grow.`,
        image: caiqueProfile2,
      },
    ],
    // Legacy properties - can be removed after full refactor
    images: [caiqueProfile1, caiqueProfile2],
    title: ["Hey there, great to have you here!", "My way, hobbies and philosophy"],
    description: [],
    details: [[], []],
  },
  {
    id: "education",
    label: "Education",
    pages: [
      {
        title: "Post-graduation Diploma",
        description: "Auckland Institute of Studies (AIS) — Auckland, New Zealand. Full Time—September 2024 / August 2025",
        image: aisCertificate,
        details: [
          "Post-graduation Diploma in Software Development.",
          "The programme included five market-focused areas: Web and Mobile Development, Cloud Applications, Continuous Integration & Continuous Deployment, Software User Experience.",
          "Covered Languages & Technologies: Kotlin, C#, SQLite, Firebase, Figma, Cloud Computing, Visio, Python, Web Languages, Visual Studio Code, SQL Server Management, Cloud Computing – Azure and AWS",
        ],
      },
      {
        title: "Bachelor's Diploma",
        description: "Paulista University (UNIP) — Sao Paulo, Brazil. Full Time—February 2015 / December 2017",
        image: unipCertificate,
        details: [
          "Bachelor’s diploma in Systems Analysis and Development.",
          "The course focused on computer science, and its branches included four main topics: Hardware, Network, Internet and Software.",
          "Covered Languages & Technologies: C, C++, Java, JavaScript, MySQL 8, MySQL Workbench.",
        ],
      },
      {
        title: "Languages",
        description: "My language proficiency is a key asset in diverse environments, enabling effective communication and collaboration.",
        details: [
          "• Portuguese: Native Speaker",
          "• IELTS: Band 7.5 (Speaking: 8.0, Listening: 8.0, Reading: 7.5, Writing: 6.5)",
          "• NZLC - New Zealand Language College: C3",
        ],
      },
    ],
    // Legacy properties - can be removed after full refactor
    title: ["Post-graduation Diploma", "Bachelor's Diploma", "Languages"],
    description: [],
    details: [[], []],
  },
  {
    id: "work-experience",
    label: "Work Experience",
    pages: [
      {
        title: "Scholar Spark - Auckland",
        description: "Front End Developer (Internship & Volunteer) | Feb 2024 – Present",
        details: [
          "Contributed to an LLM-powered web application streamlining academic research by:",
          "• Building reusable components (+20) as part of the development of a comprehensive Design System from the ground up.",
          "• Engineering a library of reusable, controlled components using Next.js, Storybook, and the Tamagui UI toolkit, adhering to modern best practices like token-based styling for maximum scalability.",
          "• Creating a responsive, user-friendly interface based on product requirements, directly impacting the usability and accessibility of the core application for academics and researchers.",
          "• Participating in weekly meetings for project alignment and progression.",
        ],
      },
      {
        title: "Tivit - Brazil",
        description: "Support Analyst | 2018 – 2019",
        details: [
          "Delivered enterprise-level IT support for Itaú, South America's largest bank. Tivit inherited the support contract from HPE, keeping the same duties, and added a few more functions, such as:",
          "• Managing user accounts, network file permissions, and security groups using Windows Active Directory, and configured endpoints with McAfee antivirus to maintain a secure corporate environment.",
          "• Exceeding service delivery goals by consistently meeting strict Service Level Agreement (SLA) targets (98%) for resolving technical support.",
          "• Configuring and maintaining critical business systems, including a proprietary version of Itaú SAP and Windows Remote Desktop, minimising downtime for end-users.",
        ],
      },
      {
        title: "DXC (former Hewlett-Packard Enterprise) - Brazil",
        description: "Technical Support | 2016 – 2018",
        details: [
          "Served as a key technical resource, bridging end-user support and software development at Bank Itaú.",
          "• Acting as a liaison to development teams by identifying, reporting, and remotely resolving bugs in SAP and Visual Basic source code.",
          "• Delivering comprehensive remote support for all Windows OS versions, Outlook, and internal applications, resolving issues through remote access, CMD, and Intranet package deployment.",
          "• Diagnosing and resolved complex hardware and software conflicts, ensuring high levels of system performance and user productivity.",
          "• Solving hardware and software issues regarding malfunctioning, preventive loss and basic user doubts.",
          "• Assisting users with file recovery/backup.",
          "• Managing tickets through an internal ticketing system.",
        ],
      },
    ],
    // Legacy properties - can be removed after full refactor
    images: [],
    title: ["Scholar Spark", "Tivit", "DXC"],
    description: [],
    details: [[]],
  },
];
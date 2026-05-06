export interface AboutSection {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly details: readonly string[];
}

export const aboutSections: readonly AboutSection[] = [
  {
    id: "who-I-am",
    label: "Who I am",
    title: "Hi, I’m Caique.",
    description:
      "I’ve always been someone who pays attention to how things feel, whether it’s the vibe of a room or how people are actually connecting. Outside of work, I’m into the simple stuff: gaming, grabing a beer with friends, or just hanging out with my cat, Mile, and watching her just exist.\n\nI’ve realized I value the balance between silence and connection. I like quiet spaces where I can focus and notice the small details—the kind of things most people overlook. At the same time, I’m all about real conversations and making sure everyone feels included. I’m naturally reflective and I take my commitments seriously; I like finishing what I start and pushing myself past my comfort zone, even if that means slowing down and taking a breather when needed. People usually see me as calm and resilient, but I always try to bring a bit of humor to the room. For me, it’s about building meaningful connections and helping the people around me move forward.",
    details: [
      "On the professional side, I do my best work in stable environments where there’s a clear sense of purpose. That structure is what helps me stay in the zone and consistently deliver. I don’t go for quick fixes; I like to understand the scale of a problem first and then build solutions that actually last.\n\nA lot of my persistence and adaptability comes from the experience of starting over in a new country navigating New Zealand without a roadmap forced me to be resourceful and stay cool under pressure. Right now, I’m focused on the 'building' phase turning ideas into long-term execution. Ultimately, I want to create tools and experiences that are simple but meaningful, something people can use easily when they just want to slow down and feel at ease.",
    ],
  },
  {
    id: "technologies-tools",
    label: "Technologies & Tools",
    title: "Technologies & Tools",
    description:
      "My core skills include React, TypeScript, Tailwind CSS, component design, and responsive UI implementation.",
    details: [
      "I am comfortable building typed React components with predictable state flows.",
      "I use Tailwind utility composition to keep design systems cohesive.",
      "I structure code for readability, scalability, and easier future refactoring.",
    ],
  },
  {
    id: "education",
    label: "Education",
    title: "Education",
    description:
      "My education includes hands-on learning, continuous practice, and adapting to modern frontend tools and best practices.",
    details: [
      "I combine foundational theory with practical implementation in real projects.",
      "I keep learning through documentation, experimentation, and code reviews.",
      "Continuous learning helps me stay aligned with modern frontend standards.",
    ],
  },
  {
    id: "work-experience",
    label: "Work Experience",
    title: "Work Experience",
    description:
      "I have worked on responsive components and interfaces, balancing structure, styling, and usability across different screen sizes.",
    details: [
      "I have built reusable components for interfaces used across multiple pages.",
      "I collaborate to align design intent with engineering constraints and timelines.",
      "I prioritize performance, accessibility, and responsive behavior across devices.",
    ],
  },
];
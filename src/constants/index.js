import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  restapi,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  quiz,
  library,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
    icon: creator,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Restapi",
    icon: restapi,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Hydro Tribe",
    icon: web,
    iconBg: "#383E56",
    date: "September 2023 - December 2023",
    points: [
      "Developed dynamic and interactive web applications using JavaScript, enhancing user experience.",
      "Designed responsive UI components for a seamless experience across different browsers.",
      "Worked closely with the team to integrate APIs and optimize application performance.",
      "Gained practical experience in debugging, code reviews,version control with Git,and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "TechnicalHub",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "july 2024 - August 2024",
    points: [
      "Independently developing and deploying web applications for diverse clients using a full-stack approach.",
      "Implementing back-end functionalities and using MongoDB to manage data storage and retrieval efficiently.",
      "Integrating third-party APIs and services to extend the functionality of web applications and improve user experiences",
      "Collaborating closely with clients to understand their needs and requirements, and delivering customized solutions that align with their goals.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "QUIZ BY OPENAI",
    description:
      "AI-powered quiz application, built using the MERN stack, enhances traditional quiz platforms by generating unique quiz sessions with the Open AI API. This prevents copying and boosts engagement. It stores user sign-ins and marks but not questions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/YANAGANTIDEEPIKA/ai-powered-quiz",
  },
  {
    name: "LIBRARY MANAGEMENT SYSTEM",
    description:
      "Digital Library project, built with PHP, PHPMyAdmin, and MySQL, streamlines library management. It features admin and student/teacher logins, allowing admins to manage books, users, and fines, while students and teachers can request books and track records efficiently.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "XAMPP",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/YANAGANTIDEEPIKA/Digital_Library",
  },
  {
    name: "TWITTER-24",
    description:
      "Twitter-24 is an e-commerce platform built with the MERN stack, offering region-specific products for better quality and lower prices. It focuses on sourcing items based on their local specialty, ensuring a unique shopping experience. Your main challenge was gathering and managing regional product data.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/YANAGANTIDEEPIKA/TwitterTweet",
  },
];

export { services, technologies, experiences, testimonials, projects };

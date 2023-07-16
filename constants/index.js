import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
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
  github,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
  {
    title: "Android Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: threejs,
  },
  {
    name: "Python",
    icon: redux,
  },
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
    name: "React JS",
    icon: reactjs,
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
    name: "SQL",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Github",
    icon: github,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Tidbeat",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jun 2022",
    points: [
      "Assisted in developing mobile applications using React Native framework for Android platforms.",
      "Participated in testing and debugging to identify and resolve software defects.",
      "Assisted in optimizing app performance and responsiveness through code refactoring and performance analysis.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Suvidha Foundation",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2022 - Mar 2022",
    points: [
      "Assisted in developing and maintaining responsive websites using HTML, CSS, and JavaScript.",
      "Supported the implementation of front-end frameworks such as React.js and Node.js to enhance user interfaces",
      "Collaborated with team members to gather project requirements and translate them into actionable tasks.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "CodeWind",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Apr 2022",
    points: [
      "Collaborated with team members to gather requirements",
      "Created a movie recommendation system. using Python and Machine Learning.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Durgesh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Durgesh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Durgesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CEO",
    company: "Meta",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Spotify Clone",
    description:
      "Structure the Spotify clone using HTML elements and forms for user input Apply styling to create a visually appealing interface resembling Spotify Add interactivity for playing songs, managing playlists, and dynamic content.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/durgeshsahani25/Spotify-Clone",
  },
  {
    name: "User Registration Form",
    description:
      "Utilize TextUtils function within Django views or models for text-related task Integrated TextUtils library into Django projects for text processing and analysis.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/durgeshsahani25/User-Resistration-form",
  },
  {
    name: "Pokemon Evalution",
    description:
      "Developed a visually appealing and responsive user interface for a Pokémon evaluation project using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/durgeshsahani25/Pokemon-Evalution",
  },
];

export { services, technologies, experiences, testimonials, projects };

import {
  emajin,
  skinman,
  mobile,
  computer,
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
  tableTennis,
  solution,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "feedback",
    title: "Feedback",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Technological Solution Provider",
    icon: solution,
  },
  {
    title: "Gamer",
    icon: computer,
  },
  {
    title: "Table Tennis Player",
    icon: tableTennis,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
];

const language = {
  javascript: 'text-yellow-200',
  java: 'orange-text-gradient',
  css: 'text-purple-500',
  php: 'text-purple-100',
  react: 'blue-text-gradient',
  'c#': 'text-purple-900',
  html:'text-orange-900',
  python: 'text-blue-300',
};

const experiences = [
  {
    title: "Backend Developer",
    company_name: "AnyCode",
    icon: skinman,
    iconBg: "#383E56",
    date: "March 2021 - November 2021",
    points: [
      "Developing web applications using PHP and Laravel-specific technologies.",
      "Collaboration with other team members including designers, product managers, and other developers.",
      "Providing constructive feedback/criticism during code reviews.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Tiu.One",
    icon: emajin,
    iconBg: "#383E56",
    date: "Jun 2023 - Till Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Working with Tiu has been a great experience!",
    name: "Stella Nguyen",
    designation: "Student",
    company: "JCU",
    image: "https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
  },
];

export { services, technologies, experiences, testimonials, language };

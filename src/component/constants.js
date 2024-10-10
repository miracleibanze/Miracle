import {
  brainwaveProject,
  brainwaveProjectSmall,
  css3Svg,
  envelopeSvg,
  facebook,
  github,
  gitSvg,
  html5Svg,
  IMConnectProject,
  IMConnectProjectSmall,
  IMMoviesProject,
  IMMoviesProjectSmall,
  jsSvg,
  linkedin,
  mapPinSvg,
  MukingiSSProject,
  MukingiSSProjectSmall,
  nextJsSvg,
  npmSvg,
  phoneSvg,
  reactSvg,
  sassSvg,
  tailwindCssSvg,
} from "../assets";

export const navlinks = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "Skills",
    link: "/skills",
  },
  {
    id: 2,
    name: "Resume",
    link: "/resume",
  },
  {
    id: 3,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

export const social = [
  {
    name: "Github",
    icon: github,
    url: "https://github.com/miracleibanze/",
  },
  {
    name: "linkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/ibanze-miracle/",
  },
  {
    name: "facebook",
    icon: facebook,
    url: "https://facebook.com/MiracleCode/",
  },
];

export const skills = [
  {
    id: 0,
    name: "HTML",
    title: "HTML",
    icon: html5Svg,
    level: "Expert",
    count: 92,
    status: "Ready to work",
  },
  {
    id: 1,
    name: "CSS",
    title: "Cascading StyleSheet",
    icon: css3Svg,
    level: "Expert",
    count: 89,
    status: "Ready to work",
  },
  {
    id: 2,
    name: "SASS",
    title: "SASS",
    icon: sassSvg,
    level: "intermediate",
    count: 68,
    status: "Ready to work",
  },
  {
    id: 3,
    name: "Javascript",
    title: "Javascript",
    icon: jsSvg,
    level: "Expert",
    count: 90,
    status: "Ready to work",
  },
  {
    id: 4,
    name: "Tailwind",
    title: "Tailwind CSS",
    icon: tailwindCssSvg,
    level: "Expert",
    count: 85,
    status: "Ready to work",
  },
  {
    id: 5,
    name: "React",
    title: "React.JS",
    icon: reactSvg,
    level: "Intermediate",
    count: 78,
    status: "Ready to work",
  },
  {
    id: 6,
    name: "Next",
    title: "Next.JS",
    icon: nextJsSvg,
    level: "Begginer",
    count: 30,
    status: "Ready in a week later",
  },
  {
    id: 7,
    name: "Git",
    title: "Git",
    icon: gitSvg,
    level: "Intermediate",
    count: 70,
    status: "Ready to work",
  },
];

export const resume = [
  {
    id: 0,
    name: "Summary",
  },
  {
    id: 1,
    name: "Education",
  },
  {
    id: 2,
    name: "Skills",
  },
  {
    id: 3,
    name: "About Me",
  },
];

export const projects = [
  {
    id: 1,
    name: "IMMovies",
    description:
      "ImMovies is a sleek front-end application designed to provide users with an intuitive movie browsing experience. Built with React and Tailwind CSS, it showcases a modern interface where users can effortlessly search for and explore their favorite films, complete with detailed information and vibrant visuals.",
    technologies: "React.js, Javascript, Tailwind CSS, Vite",
    status: "Ready",
    image: {
      img: IMMoviesProject,
      imgPlaceHolder: IMMoviesProjectSmall,
    },
    url: "https://immovies.vercel.app/",
  },
  {
    id: 2,
    name: "Mukingi Secondary School",
    description:
      "E-S Mukingi is a front-end platform for Mukingi Secondary School, offering essential information such as news, events, educational facilities, and resources. Built with React and Tailwind CSS, the site provides a user-friendly experience for students, parents, and the community, complete with contact details for inquiries.",
    technologies: "React.js, Javascript, Tailwind CSS, Vite",
    status: "Ready",
    image: {
      img: MukingiSSProject,
      imgPlaceHolder: MukingiSSProjectSmall,
    },
    url: "https://e-s-mukingi.vercel.app/",
  },
  {
    id: 3,
    name: "BrainWave app",
    description:
      "BrainWave is a front-end application that utilizes AI to generate images and videos aimed at enhancing focus and productivity. Built with React.js and Tailwind CSS, it features a user-friendly interface for exploring captivating visuals. Hosted on Vercel, this project highlights my skills in modern web development.",
    technologies: "React.js, Javascript, Tailwind CSS, Vite",
    status: "Ready",
    image: {
      img: brainwaveProject,
      imgPlaceHolder: brainwaveProjectSmall,
    },
    url: "https://imbrainwave.vercel.app/",
  },
  {
    id: 4,
    name: "IMConnect",
    description:
      "ImConnect is a user-friendly front-end application designed to facilitate seamless communication and collaboration. Built with React.js and styled with Tailwind CSS, it offers an intuitive interface for connecting users, sharing messages, and managing interactions. Hosted on Vercel, ImConnect showcases my skills in modern web development and real-time application features.",
    technologies: "React.js, Javascript, Tailwind CSS, Vite",
    status: "pending",
    image: {
      img: IMConnectProject,
      imgPlaceHolder: IMConnectProjectSmall,
    },
    url: "https://imconnect.vercel.app/",
  },
];

export const contact = [
  {
    id: 0,
    title: "Phone",
    name: "(+250) 794881466",
    icon: phoneSvg,
  },
  {
    id: 1,
    title: "Email",
    name: "miracleibanze@gmail.com",
    icon: envelopeSvg,
  },
  {
    id: 2,
    title: "Address",
    name: "Ruhango, Rwanda",
    icon: mapPinSvg,
  },
];

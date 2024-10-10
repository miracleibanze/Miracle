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
    name: "NPM",
    title: "NPM",
    icon: npmSvg,
    level: "Intermediate",
    count: 65,
    status: "Ready to work",
  },
  {
    id: 8,
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
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, id.",
  },
  {
    id: 1,
    name: "Education",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, id.",
  },
  {
    id: 2,
    name: "Skills",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, id.",
  },
  {
    id: 3,
    name: "About Me",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, id.",
  },
];

export const projects = [
  {
    id: 1,
    name: "IMMovies",
    description:
      "orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,",
    technologies: "React.js, Tailwind CSS",
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
      "orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,",
    technologies: "React.js, Tailwind CSS",
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
      "orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,",
    technologies: "React.js, Tailwind CSS",
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
      "orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,",
    technologies: "React.js, Tailwind CSS",
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

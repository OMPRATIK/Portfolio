import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaGitAlt,
  FaGithub,
  FaGuitar,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";

import {
  SiAxios,
  SiDaisyui,
  SiExpress,
  SiJavascript,
  SiLeaflet,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSocketdotio,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, type: "frontend" },
  { name: "CSS", icon: <IoLogoCss3 />, type: "frontend" },
  { name: "Java", icon: <FaJava />, type: "language" },
  { name: "Go", icon: <FaGolang />, type: "language" },
  { name: "Javascript", icon: <SiJavascript />, type: "language" },
  { name: "TypeScript", icon: <SiTypescript />, type: "language" },
  { name: "Python", icon: <FaPython />, type: "language" },
  { name: "React", icon: <FaReact />, type: "frontend" },
  { name: "Tailwindcss", icon: <RiTailwindCssFill />, type: "frontend" },
  { name: "Daisy UI", icon: <SiDaisyui />, type: "frontend" },
  { name: "Axios", icon: <SiAxios />, type: "frontend" },
  { name: "React-router", icon: <SiReactrouter />, type: "frontend" },
  { name: "Zustand", icon: <FaGuitar />, type: "frontend" },
  { name: "Redux-toolkit", icon: <SiRedux />, type: "frontend" },
  { name: "Styled-components", icon: <SiStyledcomponents />, type: "frontend" },
  { name: "Tanstack-query", icon: <SiReactquery />, type: "frontend" },
  { name: "React-hook-form", icon: <SiReacthookform />, type: "frontend" },
  { name: "Node.js", icon: <FaNodeJs />, type: "backend" },
  { name: "Express JS", icon: <SiExpress />, type: "backend" },
  { name: "Socket.io", icon: <SiSocketdotio />, type: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, type: "backend" },
  { name: "Mongoose", icon: <SiMongoose />, type: "backend" },
  { name: "PostgreSQL", icon: <BiLogoPostgresql />, type: "backend" },
  { name: "Github", icon: <FaGithub />, type: "tools" },
  { name: "Git", icon: <FaGitAlt />, type: "tools" },
  { name: "Supabase", icon: <RiSupabaseFill />, type: "backend" },
  { name: "Postman API", icon: <SiPostman />, type: "tools" },
  { name: "Leaflet", icon: <SiLeaflet />, type: "frontend" },
];

export default skills;

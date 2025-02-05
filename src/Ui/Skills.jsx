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
  FaTools,
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

import SubHeading from "../components/SubHeading";
import Skill from "./Skill";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS", icon: <IoLogoCss3 /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Go", icon: <FaGolang /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwindcss", icon: <RiTailwindCssFill /> },
  { name: "Daisy UI", icon: <SiDaisyui /> },
  { name: "Axios", icon: <SiAxios /> },
  { name: "React-router", icon: <SiReactrouter /> },
  { name: "Zustand", icon: <FaGuitar /> },
  { name: "Redux-toolkit", icon: <SiRedux /> },
  { name: "Styled-components", icon: <SiStyledcomponents /> },
  { name: "Tanstack-query", icon: <SiReactquery /> },
  { name: "React-hook-form", icon: <SiReacthookform /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express JS", icon: <SiExpress /> },
  { name: "Socket.io", icon: <SiSocketdotio /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Mongoose", icon: <SiMongoose /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Supabase", icon: <RiSupabaseFill /> },
  { name: "Postman API", icon: <SiPostman /> },
  { name: "Leaflet", icon: <SiLeaflet /> },
];

function Skills() {
  return (
    <section className="mb-6 sm:mb-10">
      <div className="mb-1.5 sm:mb-3">
        <SubHeading heading="Skills And Tools" icon={<FaTools />} />
      </div>
      <div className="flex flex-wrap gap-2 text-sm sm:text-xl">
        {skills.map(({ name, icon }) => (
          <Skill name={name} icon={icon} key={name} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

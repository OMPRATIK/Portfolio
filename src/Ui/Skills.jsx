import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaGitAlt,
  FaGithub,
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
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";

import PropTypes from "prop-types";
import SubHeading from "../components/SubHeading";

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
  { name: "Redux-toolkit", icon: <SiRedux /> },
  { name: "React-router", icon: <SiReactrouter /> },
  { name: "Styled-components", icon: <SiStyledcomponents /> },
  { name: "Tanstack-query", icon: <SiReactquery /> },
  { name: "React-hook-form", icon: <SiReacthookform /> },
  { name: "Axios", icon: <SiAxios /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express JS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { name: "Mongoose", icon: <SiMongoose /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Supabase", icon: <RiSupabaseFill /> },
  { name: "Postman API", icon: <SiPostman /> },
];

function Skills() {
  return (
    <section className="mb-6">
      <SubHeading heading="Skills And Tools" icon={<FaTools />} />
      <div className="flex flex-wrap gap-2 text-sm sm:text-base">
        {skills.map(({ name, icon }) => (
          <Skill name={name} icon={icon} key={name} />
        ))}
      </div>
    </section>
  );
}

function Skill({ name, icon }) {
  return (
    <div
      className="flex items-center justify-center gap-2 rounded-md border-[1px] border-zinc-700
        bg-zinc-800 px-3 py-1"
    >
      <span className="text-xl">{icon}</span>
      {name}
    </div>
  );
}

Skill.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.any,
};

export default Skills;

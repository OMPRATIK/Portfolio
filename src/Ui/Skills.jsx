import { useState } from "react";
import { FaFilter, FaTools } from "react-icons/fa";
import SubHeading from "../components/SubHeading";
import Skill from "./Skill";
import skills from "../data/skills";

function Skills() {
  const [skillsType, setSkillsType] = useState("All");

  const filteredSkills =
    skillsType === "All"
      ? skills
      : skills.filter((skill) => skill.type === skillsType);

  return (
    <section className="mb-6 sm:mb-10">
      <div className="mb-3 flex justify-between sm:mb-3">
        <SubHeading heading="Skills And Tools" icon={<FaTools />} />
        <div className="flex items-center gap-2">
          <FaFilter className="text-zinc-400" />
          <select
            value={skillsType}
            onChange={(e) => setSkillsType(e.target.value)}
            className="cursor-pointer rounded-md border-[1px] border-zinc-700 bg-zinc-800 px-2 py-1
              text-sm text-zinc-400 focus:outline-none focus:ring-[0.5px] focus:ring-zinc-600
              sm:text-base"
          >
            <option value="All">All</option>
            <option value="language">Languages</option>
            <option value="frontend">Front-end</option>
            <option value="backend">Back-end</option>
            <option value="tools">Tools</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 text-sm sm:text-xl">
        {filteredSkills.map(({ name, icon }) => (
          <Skill name={name} icon={icon} key={name} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

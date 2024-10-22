import { GrProjects } from "react-icons/gr";
import SubHeading from "../components/SubHeading";
import { useState } from "react";

const options = ["Front-end", "Back-end", "Full-stack"];

function Projects() {
  const [op, setOp] = useState("full-stack");
  return (
    <div className="mt-5 sm:mt-10">
      <div>
        <SubHeading heading={"Projects"} icon={<GrProjects />} />
        <select
          value={op}
          onChange={(e) => setOp(e.target.value)}
          className="rounded-md border-[1px] border-zinc-700 bg-zinc-800 px-2 py-1 text-zinc-400
            focus:border-[1px] focus:border-zinc-700"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Projects;

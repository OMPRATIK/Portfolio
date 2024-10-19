import { SiLeetcode } from "react-icons/si";
import SubHeading from "../components/SubHeading";

import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function Leetcode() {
  return (
    <section className="mb-6 mt-10 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading heading="Leetcode" icon={<SiLeetcode />} />
        <Link
          className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 sm:text-base"
          to="/projects"
        >
          <span>Leetcode Profile</span>
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      </div>
      <div
        className="flex flex-col gap-0 rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2
          sm:gap-2 sm:p-4"
      >
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <img
            src="https://leetcard.jacoblin.cool/OMPRATIK?border=0&theme=transparent&font=inconsolata&ext=heatmap"
            className="w-full sm:w-[60%]"
          />
          <ul className="hidden p-2 text-base text-zinc-400 sm:flex sm:flex-col sm:gap-2">
            <h3 className="text-xl font-semibold text-zinc-300">OMPRATIK</h3>
            <li>
              I excel in problem-solving, having completed over 500 coding
              questions on LeetCode.
            </li>

            <li>
              I thrive on tackling complex problems and continuously seek to
              improve my coding proficiency.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Leetcode;

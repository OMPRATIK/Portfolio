import { SiLeetcode } from "react-icons/si";
import SubHeading from "../components/SubHeading";
import LeetCodeCalendar from "leetcode-calendar";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const theme = {
  dark: ["#383838", "#14532d", "#15803d", "#16a34a", "#22c55e"],
};

function Leetcode() {
  return (
    <section className="mb-6 sm:mb-10">
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
        <div className="mb-2 flex gap-2.5">
          <img
            src="https://leetcard.jacoblin.cool/OMPRATIK?border=0&theme=transparent&font=inconsolata"
            className="w-full sm:w-[60%]"
          />
          <ul className="hidden p-2 text-base text-zinc-400 sm:flex sm:flex-col sm:gap-2">
            <li>
              I thrive on tackling complex problems and continuously seek to
              improve my coding proficiency. I have solved more than 500
              questions.
            </li>
          </ul>
        </div>
        <div>
          <LeetCodeCalendar
            username="OMPRATIK" // Replace with your LeetCode username
            blockSize={12} // Optional: Size of each block in pixels (default: 15)
            blockMargin={3} // Optional: Margin between blocks in pixels (default: 5)
            fontSize={14} // Optional: Font size of the text within blocks (default: 16)
            theme={theme} // Optional: A custom theme object to style the calendar
            style={{ maxWidth: "100%" }} // Optional: Inline styles for the calendar container
          />
        </div>
      </div>
    </section>
  );
}

export default Leetcode;

import { FaCircle } from "react-icons/fa";

import Socials from "./Socials";
import { Link } from "react-router-dom";

function About() {
  return (
    <section
      className="mb-6 flex flex-col gap-2 rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2
        sm:mb-10 sm:gap-4 sm:p-4"
    >
      <div className="flex items-center justify-between">
        <Socials />
        <p
          className="flex items-center gap-1 rounded-full bg-green-200 px-1.5 py-0.5 font-sans
            text-[9px] font-bold text-green-800 sm:px-2 sm:py-1 sm:text-xs"
        >
          <span className="relative flex items-center justify-center text-[8px]">
            <FaCircle className="absolute animate-ping text-[12px]" />
            <FaCircle className="inset-0" />
          </span>
          AVAILABLE FOR WORK
        </p>
      </div>

      <div>
        <div className="flex flex-col gap-1.5 sm:gap-3 sm:text-xl">
          <p>
            I am a pre-final year{" "}
            <span className="font-bold">Computer Science</span> student and a{" "}
            <span className="font-bold">Full-stack developer</span>. Primarily
            focused on frontend technologies like{" "}
            <span className="font-bold">React</span>, I also excel in backend
            development using <span className="font-bold">Node.js</span> and{" "}
            <span className="font-bold">Go</span>.
          </p>
          <p>
            I have a strong foundation in problem-solving and Data Structures
            and Algorithms. I have tackled over{" "}
            <span className="font-bold">500</span> questons on{" "}
            <span className="font-bold">Leetcode</span>.
          </p>
        </div>

        <div className="flex justify-end">
          <Link
            className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 sm:text-base"
            to="/profile"
          >
            <span>Learn more</span>
            <span className="text-xl">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;

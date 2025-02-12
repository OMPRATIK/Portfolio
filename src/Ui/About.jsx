import { FaArrowCircleRight, FaCircle } from "react-icons/fa";

import Socials from "./Socials";
import { Link } from "react-router-dom";
import Highlight from "../components/Highlight";

function About() {
  return (
    <section
      className="mb-6 flex flex-col gap-2 rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2
        sm:mb-10 sm:gap-4 sm:p-3"
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
          <p className="mb-4 text-base sm:text-lg">
            Hi, I am a pre-final year <Highlight>Computer Science</Highlight>{" "}
            student and a <Highlight>Full-stack developer</Highlight>. Primarily
            focused on frontend technologies like React, I also excel in backend
            development using Node.js and Go.
          </p>
        </div>
        <ul className="">
          <li className="flex items-center gap-1.5">
            <FaArrowCircleRight />
            Pre-final Computer Science student
          </li>
          <li className="flex items-center gap-1.5">
            <FaArrowCircleRight />
            Full-stack Developer
          </li>
          <li className="flex items-center gap-1.5">
            <FaArrowCircleRight />
            Strong foundation in problem solving
          </li>
          <li className="flex items-center gap-1.5">
            <FaArrowCircleRight />
            600+ DSA problems solved
          </li>
        </ul>

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

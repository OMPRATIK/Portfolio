import { FaCircle } from "react-icons/fa";

import Socials from "./Socials";

function About() {
  return (
    <section
      className="text-zinc mb-6 flex flex-col gap-2 rounded-md border-[1px] border-zinc-700
        bg-zinc-800 p-2 sm:gap-4 sm:p-4"
    >
      <div className="flex items-center justify-between">
        <Socials />
        <p
          className="flex items-center gap-1 rounded-full bg-green-200 px-1.5 py-0.5 font-sans
            text-[9px] font-bold text-green-800 sm:px-2 sm:py-1 sm:text-xs"
        >
          <span className="text-[8px]">
            <FaCircle />
          </span>
          AVAILABLE FOR WORK
        </p>
      </div>

      <div className="flex flex-col gap-1.5 sm:gap-3 sm:text-xl">
        <p>
          I am a pre-final year{" "}
          <span className="font-bold">Computer Science</span> student and a{" "}
          <span className="font-bold">Full-stack developer</span>. Primarily
          focused on frontend technologies like React, I also excel in backend
          development using Node.js, Bun and Go.
        </p>
        <p>
          I have a strong foundation in problem-solving and Data Structures and
          Algorithms. I have tackled over <span className="font-bold">500</span>{" "}
          questons on Leetcode.
        </p>
        <p>
          I have a keen interest in <span className="font-bold">Devops</span>{" "}
          practices and <span className="font-bold">mobile development</span>,
          continuously exploring new tools and techniques to enhance my skill
          set and deliver efficient, scalable applications.
        </p>
      </div>
      {/* <div>
        <img src="https://leetcard.jacoblin.cool/OMPRATIK?theme=dark" />
      </div> */}
    </section>
  );
}

export default About;

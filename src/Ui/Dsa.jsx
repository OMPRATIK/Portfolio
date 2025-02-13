import SubHeading from "../components/SubHeading";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFileCircleQuestion } from "react-icons/fa6";
import topics from "../data/dsaTopics";

function Dsa() {
  return (
    <section className="mb-6 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading heading="DSA With JAVA" icon={<FaFileCircleQuestion />} />
        <Link
          className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 sm:text-base"
          to="https://github.com/OMPRATIK/DSA-with-JAVA"
          target="_blank"
        >
          <span>All Code</span>
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      </div>
      <div
        className="flex flex-col gap-0 rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2
          sm:gap-2 sm:p-4"
      >
        <p className="mb-2 opacity-75">
          Whether you&apos;re preparing for coding interviews, competitive
          programming, or simply sharpening your skills, this section is
          designed to guide you through the essentials and beyond. Explore
          categorized topics like Arrays, Linked Lists, Trees, Graphs, Dynamic
          Programming, and more. Each topic includes:
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4">
          {topics.map(({ name, link }) => (
            <Link
              key={name}
              to={link}
              target="_blank"
              className="text-blue-500 underline hover:text-blue-400"
            >
              <span className="flex items-center gap-1">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dsa;

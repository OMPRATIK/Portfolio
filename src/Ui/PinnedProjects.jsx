import { TbBrandThreejs, TbPinnedFilled } from "react-icons/tb";
import SubHeading from "../components/SubHeading";
import VirtualGarden from "../assets/PinnedProjects/VirtualGarden.png";
import { FaReact } from "react-icons/fa";
import Skill from "./Skill";
import {
  SiAxios,
  SiFastapi,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import NotLive from "../components/projectStatus/NotLive";
import Live from "../components/projectStatus/Live";
import OnProgress from "../components/projectStatus/OnProgress";
import PropTypes from "prop-types";
import { IoLogoCss3 } from "react-icons/io";

import QuizzoImage from "../assets/PinnedProjects/Quizzo.png";
import WildOasis from "../assets/PinnedProjects/WildOasis.png";
import { RiSupabaseFill } from "react-icons/ri";
import { MdLink, MdLinkOff, MdOutlinePreview } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const pinnedProjects = [
  {
    name: "Virtual-garden",
    status: "notLive",
    image: VirtualGarden,
    contributors: [
      "Aashif Ali",
      "Sambhav Choudhary",
      "Aditya Kumar",
      "Praganya Mittal",
      "Arpan Gupta",
      "Pratik Rout",
    ],
    description:
      "The virtual garden project for the Smart India Hcakathon allows users to explore medicinal plants through an interactive tour. Users can view detailed 3D models of the plants and learn about their medicinal properties in an engaging digital environment.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "React-router", icon: <SiReactrouter /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
      { name: "Threejs", icon: <TbBrandThreejs /> },
      { name: "Fast API", icon: <SiFastapi /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    ],
  },
  {
    name: "Quizzo",
    status: "notLive",
    image: QuizzoImage,
    contributors: ["Pratik Rout"],
    description:
      "Quizzo is an innovative quiz application designed to enhance your knowledge in a fun and engaging manner. Built on advanced data structures like heaps, hashmaps, and binary search trees. The app features two primary categories: Computer Science and General Knowledge.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS", icon: <IoLogoCss3 /> },
      { name: "React-router", icon: <SiReactrouter /> },
      { name: "Typescript", icon: <SiTypescript /> },
    ],
  },
  {
    name: "The Wild Oasis",
    status: "onProgress",
    image: WildOasis,
    contributors: ["Pratik Rout"],
    description:
      "The Wild Oasis is a small boutique hotel with luxurious wooden cabins. This is a custom-built application to manage everything about the hotel: bookings, cabins and guests. It's used to check in guests as they arrive",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "React-router", icon: <SiReactrouter /> },
      { name: "Styled-components", icon: <SiStyledcomponents /> },
      { name: "Tanstack-query", icon: <SiReactquery /> },
      { name: "React-hook-form", icon: <SiReacthookform /> },
      { name: "Supabase", icon: <RiSupabaseFill /> },
    ],
  },
];

function PinnedProjects() {
  return (
    <section className="mb-6 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading heading="Pinned Projects" icon={<TbPinnedFilled />} />

        <Link
          className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 sm:text-base"
          to="/projects"
        >
          <span>More Projects</span>
          <span className="text-xl">&rarr;</span>
        </Link>
      </div>

      <Carousel
        numItemInFrame={1}
        items={pinnedProjects}
        size={pinnedProjects.length}
      >
        {pinnedProjects.map(
          ({ name, image, status, contributors, description, skills }) => {
            return (
              <div
                className="flex w-[95%] shrink-0 flex-col gap-4 rounded-md border-[1px] border-zinc-700
                  bg-zinc-800 p-2 sm:flex-row sm:gap-8 sm:p-4"
                key={name}
              >
                <div>
                  <div className="mb-4 flex gap-4">
                    <img
                      src={image}
                      alt="Pinned project logo"
                      className="h-24 w-24 rounded-md sm:h-36 sm:w-36"
                    />

                    <div>
                      <div className="">
                        <div className="mb-2 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                            <h3 className="text-xl font-semibold">{name}</h3>
                            <ProjectMetaData />
                          </div>

                          {status === "notLive" && <NotLive />}
                          {status === "live" && <Live />}
                          {status === "onProgress" && <OnProgress />}
                        </div>

                        <p className="mb-2 hidden text-zinc-400 sm:block">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mb-2 text-zinc-400 sm:hidden">{description}</p>

                  <div>
                    {contributors && (
                      <div className="mb-3 flex flex-col sm:flex-row sm:gap-2">
                        <h4 className="font-semibold">Contributors</h4>
                        <ul className="flex flex-wrap items-center gap-1 text-sm text-zinc-400">
                          {contributors.join(", ")}
                        </ul>
                      </div>
                    )}
                    {/* <h4 className="mb-1 font-semibold">Technologies Used</h4> */}
                    <div className="flex flex-wrap gap-1">
                      {skills.map(({ name, icon }) => (
                        <Skill name={name} icon={icon} key={name} type="tech" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </Carousel>
    </section>
  );
}

function ProjectMetaData({ link, github }) {
  return (
    <div className="flex gap-2.5 text-xl">
      {link ? (
        <button>
          <MdLink />
        </button>
      ) : (
        <MdLinkOff className="text-red-300" />
      )}
      <Link to={github}>
        <FiGithub className="text-blue-500 hover:text-blue-400" />
      </Link>
      <button>
        <MdOutlinePreview className="text-yellow-200" />
      </button>
    </div>
  );
}

ProjectMetaData.propTypes = {
  link: PropTypes.string,
  github: PropTypes.string,
};

export default PinnedProjects;

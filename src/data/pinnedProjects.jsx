import { TbBrandThreejs } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
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
import { RiSupabaseFill } from "react-icons/ri";

import VirtualGarden from "/PinnedProjects/VirtualGarden.png";
import QuizzoImage from "/PinnedProjects/Quizzo.png";
import WildOasis from "/PinnedProjects/WildOasis.png";

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

export default pinnedProjects;

import { TbBrandThreejs } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAxios,
  SiDaisyui,
  SiExpress,
  SiFastapi,
  SiGoogle,
  SiGooglegemini,
  SiJavascript,
  SiJsonwebtokens,
  SiLeaflet,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPhp,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSocketdotio,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";

import VirtualGarden from "/PinnedProjects/VirtualGarden.webp";
import QuizzoImage from "/PinnedProjects/Quizzo.webp";
import WildOasis from "/PinnedProjects/WildOasis.webp";

import Jwt from "/Projects/jwt.webp";
import Jobs from "/Projects/jobs.webp";
import Mapty from "/Projects/mapty.webp";
import WorldWise from "/Projects/worldWise.webp";
import FastReactPizza from "/Projects/fastReactPizza.webp";
import Sparks from "/Projects/sparks.webp";
import UsePopcorn from "/Projects/usePopcorn.webp";
import TaskManger from "/Projects/taskManager.webp";
import Store from "/Projects/store.webp";
import Omnifood from "/Projects/omnifood.webp";
import proMa from "/Projects/proMa.webp";
import yap from "/Projects/yap.webp";
import searchSpace from "/Projects/searchSpace.webp";

import omnifoodVideo from "/projectVideos/omnifood.mp4";
import proMaVideo from "/projectVideos/proma.mp4";
import quizzoVideo from "/projectVideos/quizzo.mp4";
import yapVideo from "/projectVideos/yap.mp4";
import searchSpaceVideo from "/projectVideos/searchSpace.mp4";
import sparksVideo from "/projectVideos/sparks.mp4";
import virtualGardenVideo from "/projectVideos/virtualGarden.mp4";

const projects = [
  {
    name: "Search Space",
    status: "live",
    image: searchSpace,
    contributors: ["Pratik Rout"],
    description:
      "This is a responsive full-stack application that demonstrates a robust search functionality for a questions database using modern web technologies like gRPC. Advance filtering options, selecting no of responses per page, filter based on type of questions, pagination and advance search with mongo DB",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "Node.jS", icon: <FaNodeJs /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "gRPC", icon: <SiGoogle /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
    type: "Full-stack",
    github: "https://github.com/OMPRATIK/SpeakX",
    link: "https://speakx-8yjv.onrender.com",
    video: searchSpaceVideo,
  },
  {
    name: "Yap!",
    status: "live",
    image: yap,
    contributors: ["Pratik Rout"],
    description:
      "Yap is a feature-rich chat application that offers 32 customizable themes, seamless image uploads, and a fully responsive UI for optimal user experience. It is a cutting-edge chat app that provides real-time communication and designed to enhance modern communication.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "React-router", icon: <SiReactrouter /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "Daisy UI", icon: <SiDaisyui /> },
      { name: "Node.jS", icon: <FaNodeJs /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
    ],
    type: "Full-stack",
    github: "https://github.com/OMPRATIK/Yap",
    link: "https://yap-ddgx.onrender.com/",
    video: yapVideo,
  },

  {
    name: "Virtual-garden",
    status: "onProgress",
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
    type: "Full-stack",
    github: "",
    link: "",
    video: virtualGardenVideo,
  },
  {
    name: "Pro-Ma",
    status: "notLive",
    image: proMa,
    contributors: ["Pratik Rout"],
    description:
      "A smart app to manage projects and generate innovative ideas using AI. Streamline workflows, track progress, and get inspired with tailored suggestions for your next big project. Perfect for individuals, teams, and businesses looking to stay organized and creative.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS", icon: <IoLogoCss3 /> },
      { name: "Javascript", icon: <SiJavascript /> },
      { name: "My SQL", icon: <SiMysql /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Gemini API", icon: <SiGooglegemini /> },
    ],
    type: "Full-stack",
    github: "https://github.com/OMPRATIK/Proma",
    link: "",
    video: proMaVideo,
  },
  {
    name: "Quizzo",
    status: "live",
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
    type: "Front-end",
    github: "https://github.com/OMPRATIK/Quizzo",
    link: "https://quizzo-78j9.onrender.com",
    video: quizzoVideo,
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
    type: "Full-stack",
    github: "https://github.com/OMPRATIK/The-Wild-Oasis",
    link: "",
    video: "",
  },
  {
    name: "JWT Basics",
    status: "notLive",
    image: Jwt,
    contributors: ["Pratik Rout"],
    description:
      "This project, JWT Basics, is a back-end authorization system utilizing JWT (JSON Web Token) technology to manage and secure user authentication. Developed with Node.js and Express.js, this system provides a solid framework for handling user sessions and permissions in web applications",
    skills: [
      { name: "Node.jS", icon: <FaNodeJs /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
    ],
    type: "Back-end",
    github: "https://github.com/OMPRATIK/JWT-Basics",
    link: "",
    video: "",
  },
  {
    name: "Jobs API",
    status: "notLive",
    image: Jobs,
    contributors: ["Pratik Rout"],
    description:
      "The Jobs API is a secure backend for managing job listings, built with Node.js, Express.js, JWT authentication, and MongoDB. It supports CRUD operations and uses MongoDB aggregation pipelines for advanced data filtering, enabling efficient job application tracking and analytics.",
    skills: [
      { name: "Node.jS", icon: <FaNodeJs /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
    type: "Back-end",
    github: "https://github.com/OMPRATIK/Jobs-API",
    link: "",
    video: "",
  },
  {
    name: "Mapty",
    status: "notLive",
    image: Mapty,
    contributors: ["Pratik Rout"],
    description:
      "Mapty is a dynamic web application that allows users can track their outdoor exercise activities, such as running and cycling, in various locations. With an intuitive interface powered by Leaflet, users can easily mark their favorite routes on an interactive map.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS", icon: <IoLogoCss3 /> },
      { name: "Javascript", icon: <SiJavascript /> },
      { name: "Leaflet", icon: <SiLeaflet /> },
    ],
    type: "Front-end",
    github: "https://github.com/OMPRATIK/Mapty",
    link: "",
    video: "",
  },
  {
    name: "World Wise",
    status: "notLive",
    image: WorldWise,
    contributors: ["Pratik Rout"],
    description:
      "World Wise is an interactive web application that lets users track their travels by selecting countries and locations on a dynamic map. Powered by Leaflet, it automatically identifies corresponding cities and countries, offering a seamless way to document journeys.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "React-router", icon: <SiReactrouter /> },
      { name: "CSS", icon: <IoLogoCss3 /> },
      { name: "Leaflet", icon: <SiLeaflet /> },
    ],
    type: "Front-end",
    github: "https://github.com/OMPRATIK/WorldWise",
    link: "",
    video: "",
  },
  {
    name: "Fast-react-pizza",
    status: "live",
    image: FastReactPizza,
    contributors: ["Pratik Rout"],
    description:
      "Fast-react-pizza is a mobile-responsive web application that allows users to manage their pizza orders by adding, deleting, and prioritizing them using Redux for state management. The intuitive interface ensures a seamless ordering experience for pizza lovers.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "React-router", icon: <SiReactrouter /> },
      { name: "Tailwindcss", icon: <RiTailwindCssFill /> },
      { name: "Redux-toolkit", icon: <SiRedux /> },
    ],
    type: "Front-end",
    github: "https://github.com/OMPRATIK/Fast-react-pizza-co",
    link: "http://ompratik.me/Fast-react-pizza-co/",
    video: "",
  },
  {
    name: "Sparks",
    status: "live",
    image: Sparks,
    contributors: ["Pratik Rout"],
    description:
      "Sparks is a full-stack CRUD application that allows users to create, delete, and update blog posts with authentication and authorization features. Built with React, Node.js, and Express, it provides a secure and seamless platform for bloggers to manage their content.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "React-router", icon: <SiReactrouter /> },
      { name: "CSS", icon: <IoLogoCss3 /> },
      { name: "Node.jS", icon: <FaNodeJs /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
    type: "Full-stack",
    github: "https://github.com/OMPRATIK/Sparks-Blog-App",
    link: "https://sparks-blog-app.onrender.com/",
    video: sparksVideo,
  },

  {
    name: "Use-popcorn",
    status: "live",
    image: UsePopcorn,
    contributors: ["Pratik Rout"],
    description:
      "Use-popcorn is a front-end movie searching application built with React. It allows users to easily search for their favorite movies, view details, and explore a variety of film options. With an intuitive interface.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS", icon: <IoLogoCss3 /> },
    ],
    type: "Front-end",
    github: "https://github.com/OMPRATIK/Use-Popcorn",
    link: "http://ompratik.me/Use-Popcorn/",
    video: "",
  },
  {
    name: "Omnifood",
    status: "live",
    image: Omnifood,
    contributors: ["Pratik Rout"],
    description:
      "Omnifood is a front-end landing page for a healthy food ordering app. Built with HTML5 and CSS, it provides an attractive and intuitive interface that showcases menu options, features, and benefits, encouraging users to explore and order nutritious meals easily.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS", icon: <IoLogoCss3 /> },
    ],
    type: "Front-end",
    github: "https://github.com/OMPRATIK/Omnifood",
    link: "http://ompratik.me/Omnifood/",
    video: omnifoodVideo,
  },
  {
    name: "Task-managr API",
    status: "notLive",
    image: TaskManger,
    contributors: ["Pratik Rout"],
    description:
      "Task-manager API is a back-end CRUD application that enables users to efficiently manage tasks. Built with Node.js and Express, it provides a robust API for creating, reading, updating, and deleting tasks using MongoDB and Mongoose for data management.",
    skills: [
      { name: "Node.jS", icon: <FaNodeJs /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
    type: "Back-end",
    github: "https://github.com/OMPRATIK/TaskManagerAPI",
    link: "",
    video: "",
  },
  {
    name: "Store API",
    status: "notLive",
    image: Store,
    contributors: ["Pratik Rout"],
    description:
      "Store API is a back-end application that enables users to perform advanced filtering on product data. Built with Node.js and Express, it provides a robust API that allows for complex queries and efficient data management using MongoDB and Mongoose.",
    skills: [
      { name: "Node.jS", icon: <FaNodeJs /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
    type: "Back-end",
    github: "https://github.com/OMPRATIK/Store-API",
    link: "",
    video: "",
  },
];

export default projects;

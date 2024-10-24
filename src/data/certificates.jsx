import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";

import ApnaCollege from "../assets/Certificates/alpha2.png";
import CipherSchools from "../assets/Certificates/core_java_cipher_schools.png";
import Sql from "../assets/Certificates/sql.png";
import HtmlCss from "../assets/Certificates/udemy_html_css.png";
import MongoDB from "../assets/Certificates/mongoDB_basics.png";
import ProblemSolving from "../assets/Certificates/problem_solving_basic-.jpeg";
import PythonCertificate from "../assets/Certificates/python_basic-.jpeg";
import ReactCertificate from "../assets/Certificates/react_basiccertificate-.jpeg";

const certificates = [
  {
    name: "Udemy: PostgreSQL",
    image: Sql,
    skills: [{ name: "PostgreSQL", icon: <BiLogoPostgresql /> }],
  },

  {
    name: "Cipher Schools",
    image: CipherSchools,
    skills: [{ name: "JAVA", icon: <FaJava /> }],
  },
  {
    name: "Udemy: HTML & CSS",
    image: HtmlCss,
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS", icon: <IoLogoCss3 /> },
    ],
  },
  {
    name: "MongoDB Basics",
    image: MongoDB,
    skills: [{ name: "MongoDB", icon: <SiMongodb /> }],
  },
  {
    name: "Hackerrank: Problem Solving",
    image: ProblemSolving,
    skills: [{ name: "DSA", icon: <RiNewspaperLine /> }],
  },
  {
    name: "Hackerrank: Python",
    image: PythonCertificate,
    skills: [{ name: "Python", icon: <FaPython /> }],
  },
  {
    name: "Hackerrank: React",
    image: ReactCertificate,
    skills: [{ name: "React", icon: <FaReact /> }],
  },
  {
    name: "Alpha 2.0",
    image: ApnaCollege,
    skills: [
      { name: "JAVA", icon: <FaJava /> },
      { name: "DSA", icon: <RiNewspaperLine /> },
    ],
  },
];

export default certificates;

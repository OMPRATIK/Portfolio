import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";

import ApnaCollege from "/Certificates/alpha2.webp";
import CipherSchools from "/Certificates/core_java_cipher_schools.webp";
import Sql from "/Certificates/sql.webp";
import HtmlCss from "/Certificates/udemy_html_css.webp";
import MongoDB from "/Certificates/mongoDB_basics.webp";
import ProblemSolving from "/Certificates/problem_solving_basic-.webp";
import PythonCertificate from "/Certificates/python_basic-.webp";
import ReactCertificate from "/Certificates/react_basiccertificate-.webp";

const certificates = [
  {
    name: "Udemy: PostgreSQL",
    image: Sql,
    skills: [{ name: "PostgreSQL", icon: <BiLogoPostgresql /> }],
  },

  {
    name: "CipherSchools: Core JAVA",
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

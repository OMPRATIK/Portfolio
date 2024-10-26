import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";

import ApnaCollege from "/Certificates/alpha2.jpeg";
import CipherSchools from "/Certificates/core_java_cipher_schools.jpeg";
import Sql from "/Certificates/sql.jpeg";
import HtmlCss from "/Certificates/udemy_html_css.png";
import MongoDB from "/Certificates/mongoDB_basics.jpeg";
import ProblemSolving from "/Certificates/problem_solving_basic-.jpeg";
import PythonCertificate from "/Certificates/python_basic-.jpeg";
import ReactCertificate from "/Certificates/react_basiccertificate-.jpeg";

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

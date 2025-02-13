import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { TbCloudComputing } from "react-icons/tb";

import ApnaCollege from "/Certificates/alpha2.webp";
import CipherSchools from "/Certificates/core_java_cipher_schools.webp";
import Sql from "/Certificates/sql.webp";
import HtmlCss from "/Certificates/udemy_html_css.webp";
import MongoDB from "/Certificates/mongoDB_basics.webp";
import ProblemSolving from "/Certificates/problem_solving_basic-.webp";
import PythonCertificate from "/Certificates/python_basic-.webp";
import ReactCertificate from "/Certificates/react_basiccertificate-.webp";
import nptelCloud from "/Certificates/nptel_cloud.webp";

const certificates = [
  {
    name: "NPTEL: Cloud Computing",
    image: nptelCloud,
    skills: [{ name: "Cloud Computing", icon: <TbCloudComputing /> }],
    description:
      "Awarded by NPTEL (IIT Kharagpur) from July 2024 to October 2024, this certification reflects my theoretical understanding of cloud architecture, deployment models, and cloud security.",
  },

  {
    name: "Udemy: PostgreSQL",
    image: Sql,
    skills: [{ name: "PostgreSQL", icon: <BiLogoPostgresql /> }],
    description:
      "Issued by Udemy on December 2, 2023, this certification confirms my mastery of SQL for database management, including queries, joins, and aggregations.",
  },

  {
    name: "CipherSchools: Core JAVA",
    image: CipherSchools,
    skills: [{ name: "JAVA", icon: <FaJava /> }],
    description:
      "Issued by CipherSchools from January 2024 to May 2024, this certification highlights my proficiency in Core Java, including OOPs, collections, and multithreading.",
  },
  {
    name: "Udemy: HTML & CSS",
    image: HtmlCss,
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS", icon: <IoLogoCss3 /> },
    ],
    description:
      "Awarded by Udemy on April 17, 2024, this certification demonstrates my ability to build responsive, real-world websites using HTML and CSS.",
  },
  {
    name: "MongoDB Basics",
    image: MongoDB,
    skills: [{ name: "MongoDB", icon: <SiMongodb /> }],
    description:
      "Issued by MongoDB, Inc on November 7, 2024, this certification validates my foundational knowledge of MongoDB, including CRUD operations and document-based data models.",
  },
  {
    name: "Hackerrank: Problem Solving",
    image: ProblemSolving,
    skills: [{ name: "DSA", icon: <RiNewspaperLine /> }],
    description:
      "Issued by HackerRank on September 21, 2023, this certification validates my strong problem-solving skills in algorithmic challenges.",
  },
  {
    name: "Hackerrank: Python",
    image: PythonCertificate,
    skills: [{ name: "Python", icon: <FaPython /> }],
    description:
      "Awarded by HackerRank on January 12, 2023, this certification confirms my foundational skills in Python, including syntax and data structures.",
  },
  {
    name: "Hackerrank: React",
    image: ReactCertificate,
    skills: [{ name: "React", icon: <FaReact /> }],
    description:
      "Issued by HackerRank on September 3, 2024, this certification demonstrates my proficiency in React fundamentals, including components, props, and state management.",
  },
  {
    name: "Alpha 2.0",
    image: ApnaCollege,
    skills: [
      { name: "JAVA", icon: <FaJava /> },
      { name: "DSA", icon: <RiNewspaperLine /> },
    ],
    description:
      "Awarded by Apna College, this certification demonstrates my mastery of Data Structures and Algorithms (DSA) using Java, enhancing my problem-solving skills for coding interviews.",
  },
];

export default certificates;

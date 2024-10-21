import { useState, useEffect } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";

import Skill from "./Skill";
import SubHeading from "../components/SubHeading";
import Carousel from "../components/Carousel";
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
    name: "Alpha 2.0",
    image: ApnaCollege,
    skills: [
      { name: "JAVA", icon: <FaJava /> },
      { name: "DSA", icon: <RiNewspaperLine /> },
    ],
  },
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
];

function Certificates() {
  const [numItemInFrame, setNumItemInFrame] = useState(2);
  const [itemIdx, setItemIdx] = useState(0);

  useEffect(function () {
    function handleResize() {
      if (window.innerWidth < 640) {
        setNumItemInFrame(1);
      } else {
        setNumItemInFrame(2);
      }

      setItemIdx(0);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="mb-6 mt-10 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading
          heading={"Certifications"}
          icon={<LiaCertificateSolid className="text-3xl" />}
        />
      </div>

      <Carousel
        numItemInFrame={numItemInFrame}
        items={certificates}
        size={certificates.length}
        itemIdx={itemIdx}
        setItemIdx={setItemIdx}
      >
        {certificates.map(({ name, image, skills }) => {
          return (
            <div
              key={name}
              className={`flex ${numItemInFrame === 2 ? "w-[47.5%]" : "w-[95%]"} shrink-0 flex-col gap-2
              rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2 sm:p-4`}
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={`${name} certificate`}
                  className="cursor-pointer rounded-md transition-transform ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-between gap-2">
                <h3 className="text-xl font-bold">{name}</h3>

                <p className="text-zinc-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum deserunt sint consectetur fugiat accusantium quae nemo
                </p>
                <div className="flex flex-wrap gap-1">
                  {skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      type="tech"
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Certificates;

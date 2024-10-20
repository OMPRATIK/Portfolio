import { LiaCertificateSolid } from "react-icons/lia";
import SubHeading from "../components/SubHeading";
import { FaJava } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import Skill from "./Skill";

import ApnaCollege from "../assets/Certificates/alpha2.png";
import sql from "../assets/Certificates/sql.png";
import { BiLogoPostgresql } from "react-icons/bi";
import Carousel from "../components/Carousel";
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
    name: "PostgreSQL",
    image: sql,
    skills: [{ name: "PostgreSQL", icon: <BiLogoPostgresql /> }],
  },
  {
    name: "Alpha (JAVA and DSA)",
    image: ApnaCollege,
    skills: [
      { name: "JAVA", icon: <FaJava /> },
      { name: "DSA", icon: <RiNewspaperLine /> },
    ],
  },
];

function Certificates() {
  return (
    <section className="mb-6 mt-10 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading
          heading={"Certifications"}
          icon={<LiaCertificateSolid className="text-3xl" />}
        />
      </div>

      <Carousel
        numItemInFrame={2}
        items={certificates}
        size={certificates.length}
      >
        {certificates.map(({ name, image, skills }) => {
          return (
            <div
              key={name}
              className="flex w-[48%] shrink-0 flex-col gap-2 rounded-md border-[1px] border-zinc-700
                bg-zinc-800 p-2 sm:p-4"
            >
              <img
                src={image}
                alt="Alpha 2.0 certificate"
                className="rounded-md"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">{name}</h3>

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

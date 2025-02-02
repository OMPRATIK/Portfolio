import { useState } from "react";

import { LiaCertificateSolid } from "react-icons/lia";
import Skill from "./Skill";
import SubHeading from "../components/SubHeading";

import CertificateModal from "./CertificateModal";

import certificates from "../data/certificates";

function Certificates() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="mb-6 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading
          heading={"Certifications"}
          icon={<LiaCertificateSolid className="text-3xl" />}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {certificates.map(({ name, image, skills }) => {
          return (
            <div
              key={name}
              className="flex flex-col gap-1 rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2"
            >
              <div className="w-full overflow-hidden rounded-md">
                <img
                  src={image}
                  alt={`${name} certificate`}
                  onClick={() => setOpenModal(name)}
                  className="cursor-pointer rounded-md transition-transform ease-in-out hover:scale-110"
                />
              </div>
              <CertificateModal
                image={image}
                openModal={openModal === name}
                setOpenModal={setOpenModal}
              />
              <div className="flex flex-grow flex-col justify-between gap-1">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm opacity-75">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla atque id perferendis deserunt cumque in sapiente illum
                  obcaecati sed iusto.
                </p>
                <div className="flex flex-wrap items-center gap-1">
                  <p className="text-sm font-semibold">Skills: </p>
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
      </div>
    </section>
  );
}
export default Certificates;

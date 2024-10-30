import { useState, useEffect } from "react";

import { LiaCertificateSolid } from "react-icons/lia";
import Skill from "./Skill";
import SubHeading from "../components/SubHeading";
import Carousel from "../components/Carousel";
import CertificateModal from "./CertificateModal";

import certificates from "../data/certificates";

function Certificates() {
  const [numItemInFrame, setNumItemInFrame] = useState(2);
  const [itemIdx, setItemIdx] = useState(0);
  const [openModal, setOpenModal] = useState(false);

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
    <section className="mb-6 sm:mb-10">
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
              className={`flex ${numItemInFrame === 2 ? "w-[47.5%]" : "w-[94%]"} shrink-0 flex-col gap-2
              rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2 sm:p-4`}
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={`${name} certificate`}
                  className="cursor-pointer rounded-md transition-transform ease-in-out hover:scale-110"
                  onClick={() => setOpenModal(name)}
                />
              </div>
              <CertificateModal
                image={image}
                openModal={openModal === name}
                setOpenModal={setOpenModal}
              />
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

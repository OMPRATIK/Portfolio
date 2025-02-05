import { useState } from "react";
import CertificateModal from "./CertificateModal";
import Skill from "./Skill";
import PropTypes from "prop-types";

function Certificate({ certificate }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex flex-col gap-1 rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2">
      <div className="w-full overflow-hidden rounded-md">
        <img
          src={certificate.image}
          alt={`${certificate.name} certificate`}
          onClick={() => setOpenModal(true)}
          className="cursor-pointer rounded-md transition-transform ease-in-out hover:scale-110"
        />
      </div>
      <CertificateModal
        image={certificate.image}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <div className="flex flex-grow flex-col justify-between gap-1">
        <h3 className="text-xl font-semibold">{certificate.name}</h3>
        <p className="text-sm opacity-75">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla atque
          id perferendis deserunt cumque in sapiente illum obcaecati sed iusto.
        </p>
        <div className="flex flex-wrap items-center gap-1">
          <p className="text-sm font-semibold">Skills: </p>
          {certificate.skills.map((skill) => (
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
}

Certificate.propTypes = {
  certificate: PropTypes.object,
};

export default Certificate;

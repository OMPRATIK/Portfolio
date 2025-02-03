import { useState } from "react";

import { LiaCertificateSolid } from "react-icons/lia";
import Skill from "./Skill";
import SubHeading from "../components/SubHeading";

import CertificateModal from "./CertificateModal";

import certificates from "../data/certificates";
import Certificate from "./Certificate";

function Certificates() {
  return (
    <section className="mb-6 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading
          heading={"Certifications"}
          icon={<LiaCertificateSolid className="text-3xl" />}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {certificates.map((certificate) => {
          return (
            <Certificate key={certificate.name} certificate={certificate} />
          );
        })}
      </div>
    </section>
  );
}
export default Certificates;

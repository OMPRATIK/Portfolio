import { LiaCertificateSolid } from "react-icons/lia";

import SubHeading from "../components/SubHeading";

import certificates from "../data/certificates";
import Certificate from "./Certificate";
import { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

function Certificates() {
  const [showMore, setShowMore] = useState(false);

  const previewCertificates = certificates.slice(0, 2);
  const restCertificates = certificates.slice(2);

  return (
    <section className="mb-6 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading
          heading={"Certifications"}
          icon={<LiaCertificateSolid className="text-3xl" />}
        />
      </div>
      <div className="mb-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {previewCertificates.map((certificate) => {
          return (
            <Certificate key={certificate.name} certificate={certificate} />
          );
        })}
        {showMore &&
          restCertificates.map((certificate) => {
            return (
              <Certificate key={certificate.name} certificate={certificate} />
            );
          })}
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="bg- flex w-full items-center justify-center rounded-md border-[1px]
          border-zinc-700 bg-zinc-800 p-1 text-center hover:opacity-85"
      >
        {showMore ? (
          <span className="flex items-center gap-1">
            Show Less <FaAngleDoubleUp className="animate-pulse" />
          </span>
        ) : (
          <span className="flex items-center gap-1">
            Show More <FaAngleDoubleDown className="animate-pulse" />
          </span>
        )}
      </button>
    </section>
  );
}
export default Certificates;

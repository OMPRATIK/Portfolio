import { FaSuitcase } from "react-icons/fa";
import SubHeading from "../components/SubHeading";
import { GoDotFill } from "react-icons/go";

const exp = [
  {
    companyName: "Autodesk",
    logo: "./exp/autodesk.svg",
    role: "Software Engineer",
    mode: "Internship",
    location: "Bengaluru, India - Hybrid",
    duration: `Jul '25 - Present`,
  },
];

function Exprience() {
  return (
    <section className="mb-6 sm:mb-10">
      <div className="mb-3 flex justify-between sm:mb-3">
        <SubHeading heading="Experience" icon={<FaSuitcase />} />
      </div>
      <div>
        {exp.map((job) => {
          return (
            <div key={job.companyName} className="flex items-start gap-4">
              <div className="rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2.5">
                <img
                  src={job.logo}
                  alt={`${job.companyName} logo`}
                  className="size-14"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold text-yellow-400 sm:text-xl">
                    {job.role}
                  </h2>
                  <span className="text-[10px] sm:text-sm">{job.duration}</span>
                </div>
                <h3 className="flex items-center gap-1 text-sm sm:text-base">
                  {job.companyName} <GoDotFill className="size-2" /> {job.mode}
                </h3>
                <div className="text-xs opacity-75 sm:text-sm">
                  {job.location}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Exprience;

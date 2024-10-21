import { MdLocationOn, MdOutlinePerson } from "react-icons/md";
import ProfilePhoto from "./ProfilePhoto";
import { GiBrain, GiWok } from "react-icons/gi";
import { BiJoystick } from "react-icons/bi";
import { Link } from "react-router-dom";

function AboutProfile() {
  return (
    <section
      className="text- mb-6 mt-3 flex items-center justify-between rounded-md border-[1px]
        border-zinc-700 bg-zinc-800 p-1 text-sm sm:mb-10 sm:mt-7 sm:p-4 sm:text-xl"
    >
      <div>
        <p className="flex items-center gap-2">
          <MdLocationOn /> Pubjab, India
        </p>
        <p className="flex gap-2">
          <span className="flex items-center gap-2">
            <MdOutlinePerson /> Full-stack developer
          </span>

          <span className="hidden sm:block">: Open for collaborations</span>
        </p>
        <p className="flex gap-2">
          <span className="flex items-center gap-2">
            <GiBrain /> <span className="hidden sm:block">Interested in: </span>
          </span>{" "}
          <span className="font-semibold">UI/UX</span> |{" "}
          <span className="font-semibold">Mobile development</span> |{" "}
          <span className="font-semibold">Devops</span>
        </p>
        <p className="flex items-center gap-2">
          <GiWok />
          <Link className="text-blue-500 hover:text-blue-400">
            Loves to cook{" "}
          </Link>
        </p>
        <p className="flex items-center gap-2">
          <BiJoystick /> Loves playing video games
        </p>
      </div>
      <ProfilePhoto type="profile" />
    </section>
  );
}

export default AboutProfile;

import { FaCalendar } from "react-icons/fa";
import ProfilePhoto from "./ProfilePhoto";
import Socials from "./Socials";

function User() {
  return (
    <section className="flex justify-between px-2 sm:px-6">
      <div className="flex justify-between gap-4">
        <div className="z-[999] translate-y-[-10px]">
          <h1 className="mb-2 text-2xl font-semibold sm:text-4xl">
            Hi, It&apos;s <span className="text-yellow-500">Pratik</span>👋
          </h1>
          <Socials />
        </div>
        <div className="flex items-center justify-center gap-2 text-xs opacity-50">
          <FaCalendar />
          <span>5 June 2004</span>
        </div>
      </div>

      <ProfilePhoto />
    </section>
  );
}

export default User;

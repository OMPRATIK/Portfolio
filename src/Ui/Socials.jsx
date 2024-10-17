import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const socialsLinks = [
  { logo: <FiGithub />, name: "Github", link: "" },
  { logo: <SlSocialLinkedin />, name: "Linkedin", link: "" },
  { logo: <SiLeetcode />, name: "Leetcode", link: "" },
  // { logo: <FaHackerrank />, name: "Hackerrank", link: "" },
  { logo: <FaXTwitter />, name: "X", link: "" },
  { logo: <FaInstagram />, name: "Instagram", link: "" },
];

function Socials() {
  return (
    <div className="flex gap-3 text-xl sm:gap-5 sm:text-2xl">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5">
        {socialsLinks.map(({ logo, name, link }) => {
          return (
            <Link
              to={link}
              key={name}
              className="text-zinc-50 transition-all duration-300 hover:text-zinc-400"
            >
              {logo}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Socials;

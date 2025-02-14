import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const socialsLinks = [
  { logo: <FiGithub />, name: "Github", link: "https://github.com/OMPRATIK" },
  {
    logo: <SlSocialLinkedin />,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/pratik-rout/",
  },
  {
    logo: <SiLeetcode />,
    name: "Leetcode",
    link: "https://leetcode.com/u/OMPRATIK/",
  },
  { logo: <FaXTwitter />, name: "X", link: "https://x.com/_pratik2026_" },
  {
    logo: <FaInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/__theitchepicure__/",
  },
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
              className="text-zinc-50 hover:text-blue-400"
              target="_blank"
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

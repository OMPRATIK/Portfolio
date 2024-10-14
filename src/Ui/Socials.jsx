import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const socialsLinks = [
  { logo: <FaGithub />, name: "Github", link: "" },
  { logo: <FaLinkedin />, name: "Linkedin", link: "" },
  { logo: <SiLeetcode />, name: "Leetcode", link: "" },
  { logo: <FaHackerrank />, name: "Hackerrank", link: "" },
  { logo: <FaSquareXTwitter />, name: "X", link: "" },
  { logo: <RiInstagramFill />, name: "Instagram", link: "" },
];

function Socials() {
  const hoverStyles = "transition-all duration-300 hover:text-zinc-400";

  return (
    <div className="flex gap-3 text-2xl sm:gap-5">
      <div className="flex gap-1 sm:gap-2.5">
        {socialsLinks.map(({ logo, name, link }) => {
          return (
            <Link to={link} key={name} className={hoverStyles}>
              {logo}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Socials;

import { Link } from "react-router-dom";

const socialsLinks = [
  {
    logo: "./icons/github.svg",
    name: "Github",
    link: "https://github.com/OMPRATIK",
  },
  {
    logo: "./icons/linkedin.svg",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/pratik-rout/",
  },
  {
    logo: "./icons/leetcode.svg",
    name: "Leetcode",
    link: "https://leetcode.com/u/OMPRATIK/",
  },
  { logo: "./icons/x.svg", name: "X", link: "https://x.com/_pratik2026_" },
  {
    logo: "./icons/instagram.svg",
    name: "Instagram",
    link: "https://www.instagram.com/__theitchepicure__/",
  },
];

function Socials() {
  return (
    <div className="flex gap-3 text-xl sm:gap-5 sm:text-2xl">
      <div className="flex items-center justify-center gap-3">
        {socialsLinks.map(({ logo, name, link }) => {
          return (
            <Link
              to={link}
              key={name}
              className="text-zinc-50 hover:text-blue-400"
              target="_blank"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-md bg-zinc-700" />
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="relative z-10 size-5 sm:size-7"
                  loading="lazy"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Socials;

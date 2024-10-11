import { HiPencilAlt } from "react-icons/hi";
import { IoHome, IoPerson } from "react-icons/io5";
import { MdArticle, MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";

const nav = [
  { name: "Home", icon: <IoHome />, link: "/" },
  { name: "Profile", icon: <IoPerson />, link: "/profile" },
  { name: "Projects", icon: <MdArticle />, link: "/projects" },
  { name: "Blogs", icon: <HiPencilAlt />, link: "/blogs" },
];

function NavBar() {
  const base =
    "flex items-center gap-1.5 rounded-md px-2 py-1 hover:bg-zinc-300 hover:text-zinc-800 transition-colors duration-300";

  const setActive = ({ isActive }) =>
    isActive ? "bg-zinc-300 text-zinc-800 " + base : base;

  return (
    <div className="fixed bottom-5 flex w-full justify-center">
      <nav className="flex items-center justify-center gap-4">
        <ul
          className="flex items-center gap-1 rounded-md border-[1px] border-zinc-700 bg-zinc-800
            font-semibold"
        >
          {nav.map(({ name, icon, link }) => {
            return (
              <li className="flex gap-1 rounded-md px-2 py-2" key={name}>
                <NavLink to={link} className={setActive}>
                  {icon}
                  <span className="hidden md:block">{name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <span className="text-3xl hover:cursor-pointer">
          <MdLightMode />
        </span>
      </nav>
    </div>
  );
}

export default NavBar;

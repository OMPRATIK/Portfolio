import { IoHome, IoPerson } from "react-icons/io5";
import { MdArticle } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const nav = [
  { name: "Home", icon: <IoHome />, link: "/" },
  { name: "Profile", icon: <IoPerson />, link: "/profile" },
  { name: "Projects", icon: <MdArticle />, link: "/projects" },
  // { name: "Blogs", icon: <HiPencilAlt />, link: "/blogs" },
];

function NavBar() {
  const location = useLocation();
  const activeTab = location.pathname;

  const base = "relative flex items-center gap-1.5 rounded-md px-2 py-1";
  return (
    <div className="fixed bottom-5 left-0 right-0 z-[999] flex w-full justify-center">
      <nav className="z-[999] flex items-center justify-center gap-4">
        <ul
          className="z-[999] flex items-center gap-1 rounded-md border-[1px] border-zinc-700
            bg-zinc-900 font-semibold"
        >
          {nav.map(({ name, icon, link }) => {
            return (
              <li className="flex gap-1 rounded-md px-2 py-2" key={name}>
                <NavLink
                  to={link}
                  className={`${activeTab === link ? "text-zinc-800 " + base : base}`}
                >
                  {activeTab === link && (
                    <motion.div
                      // layoutId="active-tab"
                      layoutId="bubble"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      className="absolute inset-0 rounded-md bg-zinc-300 mix-blend-difference"
                    />
                  )}
                  <div
                    className={`relative flex items-center gap-1.5 ${ activeTab !== link &&
                    "hover:text-zinc-400" }`}
                  >
                    <span className="text-xl sm:text-base">{icon}</span>
                    <span className="hidden sm:block">{name}</span>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

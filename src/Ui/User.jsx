import { FaCalendar, FaFileAlt } from "react-icons/fa";
import ProfilePhoto from "./ProfilePhoto";
import { Link } from "react-router-dom";
import { IoPersonAdd } from "react-icons/io5";
import ShinyButton from "../components/ShinyButton";
import { useState } from "react";
import Modal from "../components/Modal";
import ContactForm from "./ContactForm";

import cv from "/cv.pdf";

function User() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="relative mb-2 flex flex-col justify-between px-2 sm:mb-0 sm:h-20 sm:flex-row">
        <div className="flex h-14 gap-3 sm:h-0 sm:gap-4">
          <ProfilePhoto />
          <div className="z-[999] translate-y-[-25px]">
            <h1 className="text-2xl font-semibold sm:text-3xl">
              <span className="text-yellow-400">Pratik</span> Rout
              <span>🙎‍♂️</span>
            </h1>

            <div>
              <p className="text-sm text-zinc-400 sm:text-base">
                Software Engineer
              </p>

              <p className="flex items-center gap-1.5 text-xs text-zinc-400 sm:text-sm">
                <FaCalendar className="text-xs" /> 5 June 2004
              </p>
            </div>
          </div>
        </div>
        <div className="z-[999] flex items-start gap-2 font-semibold sm:text-xl">
          <ShinyButton onClick={() => setOpenModal(true)}>
            <span className="flex items-center gap-2 rounded-md bg-zinc-950 px-3 py-[5px]">
              <IoPersonAdd /> Hire me
            </span>
          </ShinyButton>

          <Link
            className="flex items-center gap-2 rounded-md bg-zinc-300 px-3 py-1 text-zinc-800
              hover:bg-zinc-400"
            to={cv}
            target="_blank"
            download
          >
            <FaFileAlt /> Resume
          </Link>
        </div>
      </section>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <ContactForm />
      </Modal>
    </>
  );
}

export default User;

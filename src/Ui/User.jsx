import ProfilePhoto from "./ProfilePhoto";
import { Link } from "react-router-dom";

import { useState } from "react";
import Modal from "../components/Modal";
import ContactForm from "./ContactForm";

import cv from "/cv.pdf";
import { FaFileAlt } from "react-icons/fa";
import AnimatedButton from "./AnimatedButton";

function User() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="relative mb-4 flex flex-col justify-between px-2 sm:mb-0 sm:h-20 sm:flex-row">
        <div className="flex h-14 gap-3 sm:h-0 sm:gap-4">
          <ProfilePhoto />
          <div className="z-[999] flex translate-y-[-25px] flex-col">
            <h1 className="text-2xl font-semibold sm:text-3xl">
              <span className="text-yellow-400">Pratik</span> Rout
            </h1>
            <h2 className="text-sm opacity-75 sm:text-base">
              Software Developer
            </h2>
            <h2 className="text-xs opacity-75 sm:text-sm">Fullstack</h2>
          </div>
        </div>
        <div className="z-[999] flex items-start gap-2 font-semibold sm:text-xl">
          <div className="flex items-center gap-2">
            <AnimatedButton onClick={() => setOpenModal(true)} />

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
        </div>
      </section>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <ContactForm />
      </Modal>
    </>
  );
}

export default User;

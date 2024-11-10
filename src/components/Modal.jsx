import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import PropTypes from "prop-types";

function Modal({ children, openModal, setOpenModal }) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) setOpenModal(false);
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [setOpenModal],
  );

  if (!openModal) return null;

  return createPortal(
    <div className="fixed top-0 z-[999] h-screen w-full backdrop-blur-md">
      <div
        ref={ref}
        className="absolute left-[50%] top-[50%] w-[95%] translate-x-[-50%] translate-y-[-50%]
          sm:w-auto"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
};

export default Modal;

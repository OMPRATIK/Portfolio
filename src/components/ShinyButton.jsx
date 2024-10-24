import { motion } from "framer-motion";
import PropTypes from "prop-types";

function ShinyButton({ children, onClick }) {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      onClick={onClick}
      className="radial-gradient relative rounded-md"
    >
      <span
        className="linear-mask relative block h-full w-full font-light tracking-wide
          text-neutral-100"
      >
        {children}
      </span>
      <span className="linear-overlay absolute inset-0 block rounded-md p-px" />
    </motion.button>
  );
}

ShinyButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default ShinyButton;

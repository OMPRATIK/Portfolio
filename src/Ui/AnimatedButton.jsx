import { useTime, useTransform } from "framer-motion";
import { IoPersonAdd } from "react-icons/io5";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function AnimatedButton({ onClick }) {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff4545, #facc15 , #006aff, #ff0095, #ff4545)`;
  });

  return (
    <div className="relative">
      <button
        className="relative z-10 rounded-md bg-neutral-900 px-2 py-1 transition-colors duration-200
          hover:bg-neutral-800"
        onClick={onClick}
      >
        <span className="flex items-center gap-1.5">
          <IoPersonAdd />
          Hire me
        </span>
      </button>
      <motion.div
        className="absolute -inset-[1px] rounded-md"
        style={{
          background: rotatingBg,
        }}
      />
    </div>
  );
}

AnimatedButton.propTypes = {
  onClick: PropTypes.func,
};
export default AnimatedButton;

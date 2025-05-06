import { motion } from "framer-motion";
import PropTypes from "prop-types";

const pageTransitionVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 50 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  exit: { opacity: 0, y: -30 },
};

function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

PageTransition.propTypes = {
  children: PropTypes.any,
};

export default PageTransition;

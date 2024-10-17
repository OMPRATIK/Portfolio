import { motion } from "framer-motion";
import PropTypes from "prop-types";

const pageTransitionVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0 },
};

function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

PageTransition.propTypes = {
  children: PropTypes.any,
};

export default PageTransition;

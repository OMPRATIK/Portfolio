import { motion } from "framer-motion";
import PropTypes from "prop-types";

const pageTransitionVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state (invisible, moved down)
  visible: { opacity: 1, y: 0 }, // Final state (visible, in original position)
  exit: { opacity: 0, y: -50 }, // On page exit (invisible, moved up)
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

import { FaCircle } from "react-icons/fa";
import PropTypes from "prop-types";

function Status({ children }) {
  return (
    <div
      className="absolute right-2 top-0 z-[999] flex items-center gap-1 rounded-full bg-green-300
        px-2 py-1 text-xs font-semibold text-green-800 sm:top-[-30px]"
    >
      <span className="text-[10px]">
        <FaCircle />
      </span>
      {children}
    </div>
  );
}

Status.propTypes = {
  children: PropTypes.any,
};
export default Status;

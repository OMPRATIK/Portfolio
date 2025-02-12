import PropTypes from "prop-types";

function Highlight({ children }) {
  return <span className="border-b-[1px] border-zinc-400">{children}</span>;
}

Highlight.propTypes = {
  children: PropTypes.any,
};

export default Highlight;

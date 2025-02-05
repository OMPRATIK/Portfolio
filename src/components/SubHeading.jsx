import PropTypes from "prop-types";

function SubHeading({ heading, icon }) {
  return (
    <h2 className="flex items-center gap-2 text-xl sm:text-2xl">
      {heading} {icon}
    </h2>
  );
}

SubHeading.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.any,
};

export default SubHeading;

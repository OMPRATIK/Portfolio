import PropTypes from "prop-types";

function Skill({ name, icon, type = "default" }) {
  const isTech = type === "tech";
  return (
    <div
      className={`flex items-center justify-center gap-2 rounded-md ${ !isTech &&
        "border-[1px] border-zinc-700" } ${isTech ? "bg-zinc-900" : "bg-zinc-800"}
        ${isTech ? "px-2" : "px-3"} ${isTech ? "py-1" : "py-1"}`}
    >
      <span className={`${isTech ? "text-base" : "text-base sm:text-xl"}`}>
        {icon}
      </span>
      <span className={`${isTech ? "text-xs" : "text-sm sm:text-xl"}`}>
        {name}
      </span>
    </div>
  );
}

Skill.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.any,
  type: PropTypes.string,
};

export default Skill;

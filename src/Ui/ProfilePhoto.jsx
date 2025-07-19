import profilePhoto from "/pfp2.jpg";
import PropTypes from "prop-types";

function ProfilePhoto({ type }) {
  return (
    <div
      className={`z-[999] h-24 w-24 ${!type && "translate-y-[-50%]"} overflow-hidden rounded-full
        border-2 border-zinc-900 bg-zinc-100 sm:h-32 sm:w-32 ${ type &&
        "hidden sm:block" }`}
    >
      <img
        src={profilePhoto}
        alt="prfile photo"
        className={"z-[999] h-24 w-24 sm:h-32 sm:w-32"}
      />
    </div>
  );
}

ProfilePhoto.propTypes = {
  type: PropTypes.string,
};

export default ProfilePhoto;

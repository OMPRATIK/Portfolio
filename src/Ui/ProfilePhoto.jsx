import profilePhoto from "../assets/profileImage.jpeg";

function ProfilePhoto() {
  return (
    <div
      className="z-50 h-24 w-24 translate-y-[-50%] overflow-hidden rounded-full border-2
        border-zinc-300 bg-zinc-100 sm:h-32 sm:w-32"
    >
      <img
        src={profilePhoto}
        alt="prfile photo"
        className="h-24 w-24 sm:h-32 sm:w-32"
      />
    </div>
  );
}

export default ProfilePhoto;

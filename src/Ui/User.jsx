import ProfilePhoto from "./ProfilePhoto";
import Socials from "./Socials";

function User() {
  return (
    <section className="mb-4 flex justify-between">
      <div>
        <h1 className="mb-2 text-3xl font-semibold sm:text-4xl">
          Hi, It&apos;s <span className="text-yellow-500">Pratik</span>👋
        </h1>
        <Socials />
      </div>
      <ProfilePhoto />
    </section>
  );
}

export default User;

import Certificates from "../Ui/Certificates";
import Github from "../Ui/Github";
import Leetcode from "../Ui/Leetcode";

function Profile() {
  return (
    <div className="pb-20">
      {/* <AboutProfile /> */}
      <Github />
      <Leetcode />
      <Certificates />
    </div>
  );
}

export default Profile;

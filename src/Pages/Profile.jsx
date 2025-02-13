import Certificates from "../Ui/Certificates";
import Github from "../Ui/Github";
import Leetcode from "../Ui/Leetcode";
import Dsa from "../Ui/Dsa";
function Profile() {
  return (
    <div className="pb-20">
      {/* <AboutProfile /> */}
      <Leetcode />
      <Github />
      <Dsa />
      <Certificates />
    </div>
  );
}

export default Profile;

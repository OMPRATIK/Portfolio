import Certificates from "../Ui/Certificates";
import Github from "../Ui/Github";
import Leetcode from "../Ui/Leetcode";
import Dsa from "../Ui/Dsa";
import Activity from "../Ui/Activity";
function Profile() {
  return (
    <div className="pb-20">
      {/* <AboutProfile /> */}
      <Leetcode />
      <Github />
      <Activity />
      <Dsa />
      <Certificates />
    </div>
  );
}

export default Profile;

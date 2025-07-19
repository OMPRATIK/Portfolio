import Certificates from "../Ui/Certificates";
import Github from "../Ui/Github";
import Dsa from "../Ui/Dsa";
import Activity from "../Ui/Activity";
function Profile() {
  return (
    <div className="pb-20">
      <Github />
      <Activity />
      <Dsa />
      <Certificates />
    </div>
  );
}

export default Profile;

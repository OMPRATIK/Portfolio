import Certificates from "../Ui/Certificates";
import Github from "../Ui/Github";
import Leetcode from "../Ui/Leetcode";
import { Test } from "../Ui/Test";

function Profile() {
  return (
    <>
      {/* <AboutProfile /> */}
      <Github />
      <Leetcode />
      <Certificates />
    </>
  );
}

export default Profile;

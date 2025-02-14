import SubHeading from "../components/SubHeading";

import { FiActivity } from "react-icons/fi";

function Activity() {
  return (
    <section className="mb-6 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading heading={"Activity"} icon={<FiActivity />} />
      </div>
      <div
        className="flex flex-col gap-2 rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2
          sm:gap-4 sm:p-4"
      >
        <figure>
          <embed src="https://wakatime.com/share/@018b054d-dc82-4246-a80d-91ae8370008d/8db02e56-b920-4cec-8b96-09eb5465e1f5.svg"></embed>
        </figure>
      </div>
    </section>
  );
}

export default Activity;

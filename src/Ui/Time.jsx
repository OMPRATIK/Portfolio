import { useEffect, useState } from "react";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  timeZone: "Asia/Kolkata",
};

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  return (
    <div
      className="absolute left-2 top-2 z-[999] flex items-center justify-center gap-2 rounded-md
        bg-zinc-950 px-2 py-1 text-xs opacity-80 sm:text-base"
    >
      <span>
        {(hours >= 20 && hours <= 24) || (hours >= 1 && hours <= 3) ? (
          <FaCloudMoon />
        ) : (
          <FaCloudSun />
        )}
      </span>
      {time.toLocaleTimeString("en-US", options)}
    </div>
  );
}

export default Time;

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const options = ["All", "Tech", "Games", "Food"];

function Blogs() {
  const [op, setOp] = useState("All");

  return (
    <section className="flex min-h-screen flex-col pb-10 pt-5 sm:pt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <input
            placeholder="Search blogs..."
            type="text"
            className="w-[200px] rounded-md border-[1px] border-zinc-700 bg-zinc-800 px-2 py-1
              text-zinc-300 outline-none focus:outline-[0.5px] focus:outline-offset-1
              focus:outline-zinc-600 sm:w-[400px]"
          />
          <button className="text-2xl sm:text-3xl">
            <CiSearch />
          </button>
        </div>
        <select
          value={op}
          onChange={(e) => setOp(e.target.value)}
          className="cursor-pointer rounded-md border-[1px] border-zinc-700 bg-zinc-800 px-2 py-1
            text-zinc-400 outline-none focus:outline-[0.5px] focus:outline-offset-1
            focus:outline-zinc-600"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-grow items-center justify-center">
        Coming soon...
      </div>
    </section>
  );
}

export default Blogs;

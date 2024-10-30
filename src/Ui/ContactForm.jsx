import { FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ContactForm() {
  return (
    <form
      className="flex w-[300px] flex-col gap-5 rounded-md border-[1px] border-zinc-700
        bg-zinc-900 p-4 sm:w-full sm:p-6"
    >
      <div className="">
        <h1 className="text-base sm:text-2xl">Let&apos;s work together !</h1>
        <p className="text-xs text-zinc-500 sm:text-sm">
          Send me a message or contact me on Whatsapp or my email
        </p>
      </div>
      <div className="flex flex-col gap-4 text-sm sm:text-base">
        <input
          placeholder="Name"
          type="text"
          className="rounded-md bg-zinc-800 px-2 py-1 text-zinc-300"
        />
        <input
          placeholder="Email"
          type="text"
          className="rounded-md bg-zinc-800 px-2 py-1 text-zinc-300"
        />
        <textarea
          placeholder="Message"
          className="rounded-md border-zinc-500 bg-zinc-800 px-2 py-1 text-zinc-300
            focus:border-zinc-500 focus:outline-none"
          name=""
          id=""
          rows={5}
        ></textarea>
        <button
          className="flex items-center justify-center gap-2 rounded-md bg-zinc-400 px-2 py-1
            text-zinc-900 outline-none transition-all duration-300 ease-in-out"
        >
          <IoIosSend />
          <span>Send</span>
        </button>
      </div>
      <div className="flex gap-3 text-2xl sm:text-3xl">
        <Link>
          <FaWhatsapp />
        </Link>
        <Link>
          <IoMailOutline />
        </Link>
      </div>
    </form>
  );
}

export default ContactForm;

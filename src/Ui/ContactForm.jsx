import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function ContactForm() {
  const form = useRef();
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID; // Use process.env.REACT_APP_SERVICE_ID for Create React App
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID; // Use process.env.REACT_APP_TEMPLATE_ID for Create React App
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY; // Use process.env.REACT_APP_PUBLIC_KEY for Create React App
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Failed to send message!");
          console.log("FAILED...", error);
        },
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex w-full flex-col gap-5 rounded-md border-[1px] border-zinc-700 bg-zinc-900
        p-4 sm:p-6"
    >
      <div className="">
        <h1 className="text-base sm:text-2xl">Let&apos;s work together🤝</h1>
        <p className="text-xs text-zinc-500 sm:text-sm">
          Send me a message or contact me on Whatsapp or my email
        </p>
      </div>
      <div className="flex flex-col gap-4 text-sm sm:text-base">
        <input
          name="user_name"
          placeholder="Name"
          type="text"
          className="rounded-md bg-zinc-800 px-2 py-1 text-zinc-300 outline-none
            focus:outline-offset-1 focus:outline-zinc-600"
        />
        <input
          placeholder="Email"
          type="email"
          className="rounded-md bg-zinc-800 px-2 py-1 text-zinc-300 outline-none
            focus:outline-offset-1 focus:outline-zinc-600"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="h-20 rounded-md border-zinc-500 bg-zinc-800 px-2 py-1 text-zinc-300 outline-none
            focus:outline-offset-1 focus:outline-zinc-600 sm:h-28"
        ></textarea>
        <button
          className="flex items-center justify-center gap-2 rounded-md bg-zinc-400 px-2 py-1
            font-semibold text-zinc-900 outline-none transition-all duration-300 ease-in-out
            hover:bg-zinc-300"
        >
          <IoIosSend />
          <span>Send</span>
        </button>
      </div>
      <div className="flex gap-3 text-2xl sm:text-3xl">
        <Link to="https://wa.me/917846902017" target="_blank">
          <FaWhatsapp />
        </Link>
        <Link to="mailto:routprateek4@gmail.com">
          <IoMailOutline />
        </Link>
      </div>
    </form>
  );
}

export default ContactForm;

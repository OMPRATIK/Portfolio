function ContactForm() {
  return (
    <form className="flex flex-col gap-2 rounded-md bg-zinc-800 p-4 text-xl">
      <input
        type="text"
        className="rounded-md bg-zinc-300 px-2 py-1 text-zinc-800"
      />
      <textarea
        className="rounded-md bg-zinc-300 px-2 py-1 text-zinc-800"
        name=""
        id=""
      ></textarea>
      <button className="rounded-md bg-zinc-900 px-2 py-1">Submit</button>
    </form>
  );
}

export default ContactForm;

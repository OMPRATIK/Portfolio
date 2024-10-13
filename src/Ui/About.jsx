function About() {
  return (
    <div
      className="text-zinc rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-4 text-sm
        sm:text-base"
    >
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea
        atque alias modi inventore dolorum magni esse ipsam voluptates ut nam
        quod quam id repellat, sunt, sequi vel suscipit praesentium.
      </p>
      <ul className="mb-3 flex flex-col gap-2">
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam
          🚀
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam
          🚀
        </li>
      </ul>
      <div>
        <h2 className="text-4xl font-semibold">
          <span className="text-5xl text-yellow-500">+</span>500
        </h2>
        <h2></h2>
      </div>
    </div>
  );
}

export default About;

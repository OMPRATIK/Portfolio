function OnProgress() {
  return (
    <div
      className="flex items-center gap-1 rounded-[3.5px] bg-blue-200 px-1 py-0.5 text-xs
        font-bold uppercase tracking-widest text-blue-900"
    >
      <div className="size-2.5 animate-pulse rounded-full bg-blue-900" />{" "}
      working
    </div>
  );
}

export default OnProgress;

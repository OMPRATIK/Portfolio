function NotLive() {
  return (
    <div
      className="flex items-center gap-1 rounded-[3.5px] bg-red-200 px-1 py-0.5 text-xs font-bold
        uppercase tracking-wider text-red-900"
    >
      <div className="size-2.5 animate-pulse rounded-full bg-red-900" /> not
      live
    </div>
  );
}

export default NotLive;

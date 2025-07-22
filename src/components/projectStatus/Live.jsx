// function Live() {
//   return (
//     <span
//       className="rounded-sm bg-green-700 px-2 py-0.5 align-top font-sans text-[10px] font-bold
//         uppercase tracking-widest text-green-200 sm:text-[12px]"
//     >
//       live
//     </span>
//   );
// }

// export default Live;

function Live() {
  return (
    <div
      className="flex items-center gap-1 rounded-[3.5px] bg-green-200 px-1 py-0.5 text-xs
        font-bold uppercase tracking-wide text-green-900"
    >
      <div className="size-2.5 animate-pulse rounded-full bg-green-900" /> live
    </div>
  );
}

export default Live;

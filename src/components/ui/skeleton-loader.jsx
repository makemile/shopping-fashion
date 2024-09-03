export const Loading = () => {
  return (
    <div className="border border-slate-300 shadow  w-80 h-80 rounded-lg justify-center">
      <figure className="animate-pulse flex relative mb-1 w-full justify-center pt-4">
        <span className="absolute bottom-0 left-0 backdrop-blur-sm bg-white/30 rounded-lg text-black/80 text-xs m-2 px-3 py-0.5 font-medium"></span>

        <div className="rounded-lg bg-slate-200 h-60 w-72"></div>
      </figure>
      <div className="flex justify-center items-center">
      <div className="rounded-lg bg-slate-200 h-12 w-72"></div>
      </div>
    </div>
  );
};

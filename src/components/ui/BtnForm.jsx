

export const BtnForm = ({ children, ...props }) => {
  return (
    <button
      className="flex w-48 justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      {...props}
    >
      {children}
    </button>
  );
};

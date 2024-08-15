export const CustomInput = ({...props}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <label htmlFor="site-search">Found your produt Favorite</label>
      <input
        type="search"
        onChange={props.onChange}
        value={props.value}
        placeholder="Search product exclusive"
        className="p-2.5 rounded-full w-96 border border-slate-600 focus:outline-none"
      />
    </div>
  );
};

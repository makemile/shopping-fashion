export const BtnAdd = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
    >
      +
    </button>
  );
};

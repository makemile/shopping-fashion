import "../ui/index.css";

export const Button = ({ onClick, children, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center btn-w h-11 text-white bg-black gap-1 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

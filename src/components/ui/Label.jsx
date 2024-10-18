export const LabelForm = ({ children, ...props }) => {
  return (
    <label
      className="block text-sm font-medium leading-6 text-gray-900"
      {...props}
    >
      {children}
    </label>
  );
};

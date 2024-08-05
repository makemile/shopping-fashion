export const CloseCircle = ({fillColor}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      width="28"
      height="28"
      stroke="currentColor"
    >
      <path
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};
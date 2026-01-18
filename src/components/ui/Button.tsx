import React from "react";
import { ButtonProps } from "../../types/ButtonProps";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type,
  className,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center btn-w h-11 text-white bg-black gap-1 rounded-md ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

import { ReactNode } from "react";

export interface WithChildren {
  children: ReactNode;
}

export interface ButtonProps extends WithChildren {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset"; 
  className?: string;
  disabled?: boolean;
}

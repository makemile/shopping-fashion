import { ReactNode } from "react";

export interface WithChildren {
    children: ReactNode;
  }

export interface ButtonProps extends WithChildren {
    type: "button" | "submit" | "reset";
    onClick: () => void;
    className: string;
};

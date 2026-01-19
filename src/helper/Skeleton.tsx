import React from "react";
import { Sekeleton } from "../types/dataTypes";

export const CardSkeleton = ({}: Sekeleton) => {
  return (
    <div
      aria-hidden="true"
      className="bg-white w-72 h-auto rounded-lg border border-slate-200 animate-pulse"
    >
      <div className="w-full h-60 bg-slate-200 rounded-t-lg"></div>
      <div className="p-3 space-y-3">
        <div className="flex justify-between items-center">
          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
          <div className="h-5 bg-slate-200 rounded w-1/4 ml-2"></div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="h-10 w-full bg-slate-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

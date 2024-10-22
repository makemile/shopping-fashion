import React, { forwardRef } from "react";

export const InputForm = forwardRef(
  (
    {
      label,
      type,
      id,
      className,
      placeholder,
      ...props // Use ...props to get everything else
    },
    ref
  ) => {
    return (
      <div className="mb-4">
        <label htmlFor={id} className={`text-sm font-medium leading-6 text-gray-900`}>{label}</label>
        <input
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          className={`px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-100 sm:text-sm sm:leading-6 ${className}`}
          {...props}
        />
      </div>
    );
  }
);

export const ref = React.createRef();

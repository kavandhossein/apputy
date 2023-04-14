import { useField } from "formik";
import React from "react";

interface TextField extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  errors?: any;
}

export const TextField = ({ label, errors, name,className, ...props }: TextField) => {
  return (
    <div className="flex flex-col ">
      {label && <label className="text-sm" htmlFor={name}>{label}: </label>}
      <input className={`border rounded-md w-full px-2 ${className || ""}`} id={name} {...props} />
      {errors && name && errors[name] && <p className="">{errors[name]}</p>}
    </div>
  );
};

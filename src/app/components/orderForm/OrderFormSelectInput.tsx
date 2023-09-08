import React from "react";
import { IOrderInputProps } from "@/app/interfaces/IOrderInputProps";

export function OrderFormSelectInput({
  label,
  required = true,
  options,
  onChange,
}: IOrderInputProps) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <select
        id="orderFormSelectInput"
        className="w-60 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required={required}
        onChange={onChange}
      >
        <option value="">Select {label}</option>
        {options?.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Controller } from "react-hook-form";

type SelectTypes = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  options: SelectTypes[];
  error?: string;
};

export default function CustomSelect({
  control,
  name,
  label,
  placeholder,
  options,
  error,
}: CustomSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="lg:w-[352px] w-full mb-4">
          {label && <label className="mb-2 block text-sm font-medium">{label}</label>}
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <SelectTrigger
              className={`w-full py-[26px] border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-[14px]`}
            >
              <SelectValue placeholder={placeholder || "اختر..."} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </div>
      )}
    />
  );
}

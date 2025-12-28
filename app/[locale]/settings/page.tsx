"use client";

import { useForm } from "react-hook-form";
import { UploadCloud } from "lucide-react";
import CustomSelect from "@/components/shared/reusableComponents/CustomSelect";
import Image from "next/image";
import { useState } from "react";

// Component Input عادي
function Input({ label, error, ...props }: any) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <input
        {...props}
        className={`w-full border rounded-xl px-4 py-3 outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

// Component رفع الصور
function ImageUpload({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string | null;
  onChange: (val: string) => void;
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">{label}</label>

      <label className="relative flex items-center justify-center h-40 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-50">
        {value ? (
          <Image
            src={value}
            alt="preview"
            fill
            className="object-contain rounded-xl"
          />
        ) : (
          <div className="flex flex-col items-center text-gray-500">
            <UploadCloud size={32} />
            <span className="mt-2 text-sm">رفع صورة</span>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              onChange(URL.createObjectURL(file));
            }
          }}
        />
      </label>
    </div>
  );
}

export default function SettingsPage() {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [logo, setLogo] = useState<string | null>(null);
  const [favicon, setFavicon] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    console.log({ ...data, logo, favicon });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 max-w-5xl mx-auto space-y-6"
    >
      <h2 className="text-xl font-bold">إعدادات  </h2>

      <Input
        label="اسم النشاط التجاري"
        {...register("name", { required: "مطلوب" })}
        error={errors.name?.message}
      />

      <Input
        label="الرقم الضريبي (15 رقم)"
        {...register("taxNumber", {
          required: "مطلوب",
          minLength: { value: 15, message: "يجب أن يتكون من 15 رقم" },
          maxLength: { value: 15, message: "يجب أن يتكون من 15 رقم" },
        })}
        error={errors.taxNumber?.message}
      />

      <div className="grid md:grid-cols-3 gap-4">
        <Input label="العنوان" {...register("address")} />
        <Input label="رقم المبنى" {...register("building")} />
        <Input label="الشارع" {...register("street")} />
      </div>

      <Input label="الجوال" {...register("phone")} />
      <Input label="رأس المال" {...register("capital")} />
      <Input label="نسبة الضريبة" type="number" {...register("taxPercent")} />

      {/* رفع الصور */}
      <div className="grid md:grid-cols-2 gap-6">
        <ImageUpload label="صورة الشعار" value={logo} onChange={setLogo} />
        <ImageUpload
          label="صورة أيقونة المتصفح"
          value={favicon}
          onChange={setFavicon}
        />
      </div>

      {/* CustomSelect */}
      <CustomSelect
        control={control}
        name="currency"
        label="العملة الافتراضية"
        options={[
          { value: "SAR", label: "SAR" },
          { value: "USD", label: "USD" },
          { value: "S$", label: "S$" },
        ]}
      />

      <CustomSelect
        control={control}
        name="payment"
        label="طريقة الدفع الافتراضية"
        options={[
          { value: "cash", label: "نقدي" },
          { value: "card", label: "بطاقة" },
        ]}
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-xl mt-4"
      >
        حفظ الإعدادات
      </button>
    </form>
  );
}

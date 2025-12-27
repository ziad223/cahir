// components/actions/AddCostCenterButton.tsx
'use client';

import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const AddCostCenterButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim()) {
      // هنا تقدر تبعت البيانات لـ API
      console.log('تمت إضافة:', name);

      // بعد الإرسال، اقفل المودال وافرغ الفورم
      setName('');
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 bg-[#7451ab] px-3 py-2 text-white rounded-[5px]"
      >
        اضافة مركز تكلفة
        <FaPlus />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>
            <h2 className="text-lg font-bold mb-4">إضافة مركز تكلفة</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="اسم مركز التكلفة"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="bg-[#7451ab] text-white py-2 px-4 rounded hover:bg-[#0b90aa]"
              >
                إضافة
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCostCenterButton;

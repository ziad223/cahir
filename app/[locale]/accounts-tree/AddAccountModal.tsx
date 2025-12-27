'use client';

import { FaPlus } from 'react-icons/fa6';

interface AddAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddAccountModal = ({ isOpen, onClose }: AddAccountModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-lg font-semibold">إضافة قسم جديد</h4>
          <button onClick={onClose} className="text-red-500">
            إغلاق
          </button>
        </div>
        <div className="text-sm text-gray-600 mb-4">
          إذا كان القسم خاص بإيرادات الموظفين، يجب اختيار موظف.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="الاسم" className="border p-2 rounded w-full" />
          <select className="border p-2 rounded w-full">
            <option>اختر أصل رئيسي</option>
          </select>
          <select className="border p-2 rounded w-full">
            <option>اختر طبيب</option>
          </select>
          <input type="number" placeholder="تكلفة القسم" className="border p-2 rounded w-full" />
          <label className="flex items-center gap-2">
            <input type="checkbox" /> قابل للاستهلاك
          </label>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            إلغاء
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded">
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAccountModal;
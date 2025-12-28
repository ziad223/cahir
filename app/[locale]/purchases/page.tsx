'use client';

import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FiEdit, FiTrash2, FiPlus, FiSettings } from 'react-icons/fi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { HiOutlineCash } from 'react-icons/hi';

const PurchasesPage = () => {
  const columns: Column[] = [
    { label: '#', key: 'id' },
    { label: 'الكود', key: 'code' },
    { label: 'المورد', key: 'supplier' },
    { label: 'المبلغ', key: 'amount' },
    { label: 'الضريبة', key: 'tax' },
    { label: 'الإجمالي', key: 'total' },
    { label: 'تاريخ الإنشاء', key: 'createdAt' },
    { label: 'التحكم', key: 'actions' },
  ];

  const [data] = useState([
    {
      id: 1,
      code: 'PUR-001',
      supplier: 'مورد 1',
      amount: '1000 ج',
      tax: '150 ج',
      total: '1150 ج',
      createdAt: '2025-01-10',
      actions: (
        <div className="flex gap-2 justify-center">
          <button className="bg-blue-100 text-blue-600 p-2 rounded hover:bg-blue-200">
            <FiEdit size={16} />
          </button>
          <button className="bg-red-100 text-red-600 p-2 rounded hover:bg-red-200">
            <FiTrash2 size={16} />
          </button>
        </div>
      ),
    },
  ]);

  return (
    <div className="p-4">
      {/* الشريط العلوي */}
      <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
        {/* أزرار التنقل */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
            <MdOutlineAccountBalanceWallet size={18} />
            المحاسبة
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
            <HiOutlineCash size={18} />
            المصروفات
          </button>

          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
            <FiSettings size={18} />
            الإعدادات
          </button>
        </div>

        {/* إضافة فاتورة */}
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600">
          <FiPlus size={18} />
          إضافة فاتورة جديدة
        </button>
      </div>

      {/* الجدول */}
      <Table columns={columns} data={data} />
    </div>
  );
};

export default PurchasesPage;

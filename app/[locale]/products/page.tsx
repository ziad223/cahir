'use client';

import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const page = () => {
  const columns: Column[] = [
    { label: 'صورة المنتج', key: 'image' },
    { label: 'اسم المنتج', key: 'name' },
    { label: 'القسم', key: 'category' },
    { label: 'السعر', key: 'price' },
    { label: 'تفعيل الكمية', key: 'stockActive' },
    { label: 'الكمية', key: 'quantity' },
    { label: 'باركود', key: 'barcode' },
    { label: 'الوحدة', key: 'unit' },
    { label: 'التحكم', key: 'actions' },
  ];

  const [data, setData] = useState([
    {
      image: <img src="/images/product1.jpg" alt="product1" className="w-10 h-10 mx-auto rounded" />,
      name: 'منتج 1',
      category: 'قسم 1',
      price: '50 جنيه',
      stockActive: 'نشط',
      quantity: 10,
      barcode: '1234567890',
      unit: 'قطعة',
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
    {
      image: <img src="/images/product2.jpg" alt="product2" className="w-10 h-10 mx-auto rounded" />,
      name: 'منتج 2',
      category: 'قسم 2',
      price: '100 جنيه',
      stockActive: 'غير نشط',
      quantity: 0,
      barcode: '0987654321',
      unit: 'كجم',
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

  const [searchName, setSearchName] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const filteredData = data.filter(
    (item) =>
      item.name.toString().includes(searchName) &&
      item.category.toString().includes(searchCategory)
  );

  return (
    <div className="p-4">
      {/* شريط البحث والإحصائيات */}
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <input
          type="text"
          placeholder="بحث بالاسم"
          className="border border-none px-3 py-2 rounded flex-1 min-w-[150px]"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="text"
          placeholder="بحث بالقسم"
          className="border border-none px-3 py-2 rounded flex-1 min-w-[150px]"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow min-w-[150px] text-center">
          منتجات منتهية الكمية : 8056
        </div>
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded shadow min-w-[150px] text-center">
          منتجات منتهية الصلاحية : 0
        </div>
      </div>

      {/* الجدول */}
      <Table columns={columns} data={filteredData} />
    </div>
  );
};

export default page;

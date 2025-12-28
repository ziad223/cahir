'use client';

import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import Container from '@/components/shared/formcomponents/Container';

const SuppliersPage = () => {
  const columns: Column[] = [
    { label: '#', key: 'id' },
    { label: 'الاسم', key: 'name' },
    { label: 'الكود', key: 'code' },
    { label: 'الجوال', key: 'phone' },
    { label: 'البريد', key: 'email' },
    { label: 'رقم الضريبة', key: 'taxNumber' },
    { label: 'السجل التجاري', key: 'commercialRecord' },
    { label: 'ملاحظات', key: 'notes' },
    { label: 'طرق الدفع', key: 'paymentMethods' },
    { label: 'التحكم', key: 'actions' },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      name: 'مورد 1',
      code: 'SUP001',
      phone: '01012345678',
      email: 'supplier1@example.com',
      taxNumber: '123456',
      commercialRecord: 'CR12345',
      notes: 'ملاحظات 1',
      paymentMethods: 'تحويل بنكي',
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
      id: 2,
      name: 'مورد 2',
      code: 'SUP002',
      phone: '01087654321',
      email: 'supplier2@example.com',
      taxNumber: '654321',
      commercialRecord: 'CR54321',
      notes: 'ملاحظات 2',
      paymentMethods: 'كاش',
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

  const [searchPhone, setSearchPhone] = useState('');

  const filteredData = data.filter((item) =>
item.phone.toString().includes(searchPhone)
  );

  return (
    <Container >
      <div className="flex flex-wrap gap-4 mb-4 items-center justify-between">
        <div className="flex gap-4 flex-1 max-w-[200px]">
          <input
            type="text"
            placeholder="بحث برقم الجوال"
            className="border px-3 py-2 rounded flex-1 outline-none"
            value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)}
          />
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600">
          <FiPlus size={18} />
          إضافة مورد
        </button>
      </div>

      {/* الجدول */}
      <Table columns={columns} data={filteredData} />
    </Container>
  );
};

export default SuppliersPage;

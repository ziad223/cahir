'use client';

import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import Container from '@/components/shared/formcomponents/Container';

const CustomersPage = () => {
  const columns: Column[] = [
    { label: '#', key: 'id' },
    { label: 'الاسم', key: 'name' },
    { label: 'الجوال', key: 'phone' },
    { label: 'البريد', key: 'email' },
    { label: 'العنوان', key: 'address' },
    { label: 'رقم الضريبة', key: 'taxNumber' },
    { label: 'الفواتير', key: 'invoices' },
    { label: 'التحكم', key: 'actions' },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      name: 'عميل 1',
      phone: '01012345678',
      email: 'client1@example.com',
      address: 'العنوان 1',
      taxNumber: '123456',
      invoices: 5,
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
      name: 'عميل 2',
      phone: '01087654321',
      email: 'client2@example.com',
      address: 'العنوان 2',
      taxNumber: '654321',
      invoices: 2,
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
    <Container className="">
      <div className="flex flex-wrap gap-4 mb-4 items-center justify-between">
        <div className="flex gap-4 flex-1 max-w-[300px]">
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
          إضافة عميل
        </button>
      </div>

      {/* الجدول */}
      <Table columns={columns} data={filteredData} />
    </Container>
  );
};

export default CustomersPage;

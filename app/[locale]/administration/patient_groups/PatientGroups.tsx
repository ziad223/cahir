'use client';

import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import AddPatientGroupModal from './AddPatientGroupModal';
import EditPatientGroupModal from './EditPatientGroupModal';
import { useTranslations } from 'next-intl';

const PatientGroups = () => {
  const t = useTranslations('patientsGroups');

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const columns: Column[] = [
    { label: '#', key: 'id' },
    { label: t('table.name'), key: 'name' },
    { label: t('table.subscriptionDiscount'), key: 'subscriptionDiscount' },
    { label: t('table.examinationDiscount'), key: 'examinationDiscount' },
    { label: t('table.count'), key: 'count' },
    { label: t('table.actions'), key: 'actions' },
  ];

  const data = [
    {
      id: 1,
      name: 'مجموعة أ',
      subscriptionDiscount: '10%',
      examinationDiscount: '5%',
      count: '20',
      actions: (
        <div className="flex gap-2 justify-center">
          <div
            onClick={() => {
              setEditData({
                id: 1,
                name: 'مجموعة أ',
                subscriptionDiscount: '10%',
                examinationDiscount: '5%',
                count: '20',
              });
              setIsEditModalOpen(true);
            }}
            className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#7451ab] cursor-pointer"
          >
            <FaEdit className="text-white text-lg" title={t('actions.edit')} />
          </div>
          <div
            className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer"
          >
            <FaTrash className="text-white text-sm" title={t('actions.delete')} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('title')}</h2>
      <div className="bg-white rounded-lg p-6">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 bg-[#7451ab] text-white py-2 px-5 h-[40px] rounded-[10px] mb-6"
        >
          <span>{t('add')}</span>
          <FaPlus />
        </button>

        <Table columns={columns} data={data} />
      </div>

      {isAddModalOpen && <AddPatientGroupModal onClose={() => setIsAddModalOpen(false)} />}
      {isEditModalOpen && editData && (
        <EditPatientGroupModal data={editData} onClose={() => setIsEditModalOpen(false)} />
      )}
    </div>
  );
};

export default PatientGroups;

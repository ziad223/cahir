'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface Props {
  onClose: () => void;
  data: {
    id: number;
    name: string;
    subscriptionDiscount: string;
    examinationDiscount: string;
    count: string;
  };
}

const EditPatientGroupModal: React.FC<Props> = ({ onClose, data }) => {
  const t = useTranslations('patientsGroups');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <h2 className="text-xl font-bold mb-4">{t('editModal.title')}</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder={t('form.groupName')}
            defaultValue={data.name}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder={t('form.subscriptionDiscount')}
            defaultValue={data.subscriptionDiscount}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder={t('form.examinationDiscount')}
            defaultValue={data.examinationDiscount}
            className="border border-gray-300 p-2 rounded"
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              {t('common.cancel')}
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {t('common.save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPatientGroupModal;

'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

interface EditPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditPatientModal: React.FC<EditPatientModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const t = useTranslations('patients');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[400px]">
        <h2 className="text-xl font-bold mb-4">{t('editPatientTitle')}</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder={t('patientNamePlaceholder')}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder={t('locationPlaceholder')}
            className="border border-gray-300 p-2 rounded"
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              {t('cancel')}
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {t('save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPatientModal;

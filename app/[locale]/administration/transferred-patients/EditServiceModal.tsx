'use client';

import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

interface EditServiceModalProps {
  service: {
    service_number: number;
    name: string;
    clinic: string;
    price: string;
  };
}

const EditServiceModal: React.FC<EditServiceModalProps> = ({ service }) => {
  const t = useTranslations('managment');

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(service);
  const locale = useLocale()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated data:', formData);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#7451ab] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <FaEdit className="text-white text-lg" title={t('actions.edit')} />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
              {t('modal.editTitle')}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name"   className={`text-sm font-medium text-gray-700 ${locale === 'ar' ? 'text-right' : 'text-left'} w-full`}>
                  {t('form.serviceName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={t('form.serviceName')}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="name"   className={`text-sm font-medium text-gray-700 ${locale === 'ar' ? 'text-right' : 'text-left'} w-full`}>
                  {t('form.selectClinic')}
                </label>
                <input
                  type="text"
                  id="clinic"
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={t('form.selectClinic')}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="name"   className={`text-sm font-medium text-gray-700 ${locale === 'ar' ? 'text-right' : 'text-left'} w-full`}>
                  {t('form.price')}
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={t('form.price')}
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm border border-gray-400 rounded hover:bg-gray-100"
                >
                  {t('actions.cancel')}
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700"
                >
                  {t('actions.save')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditServiceModal;

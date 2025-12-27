'use client';

import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useLocale, useTranslations } from 'next-intl';

interface EditPlanModalProps {
  row: {
    service_number: number;
    name: string;
    duration: number;
    sessions_per_day: number;
    total_sessions: number;
    price: string;
    clinic: string;
    subscribers: number;
  };
  onClose?: () => void;
}

const EditPlanModal: React.FC<EditPlanModalProps> = ({ row, onClose }) => {
  const [formData, setFormData] = useState(row);
  const t = useTranslations('treatmentPlans');
  const locale = useLocale();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Plan:', formData);
    onClose?.(); // إغلاق المودال بعد الحفظ
  };

  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const textAlign = locale === 'ar' ? 'text-right' : 'text-left';

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div
        className={`bg-white rounded-xl p-6 w-full max-w-md shadow-lg ${textAlign}`}
        dir={dir}
      >
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
          {t('modal.editTitle')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Plan Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              {t('form.planName')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-1">
            <label htmlFor="duration" className="text-sm font-medium text-gray-700">
              {t('form.duration')}
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Sessions Per Day */}
          <div className="flex flex-col gap-1">
            <label htmlFor="sessions_per_day" className="text-sm font-medium text-gray-700">
              {t('form.sessionsPerDay')}
            </label>
            <input
              type="number"
              id="sessions_per_day"
              name="sessions_per_day"
              value={formData.sessions_per_day}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Total Sessions */}
          <div className="flex flex-col gap-1">
            <label htmlFor="total_sessions" className="text-sm font-medium text-gray-700">
              {t('form.totalSessions')}
            </label>
            <input
              type="number"
              id="total_sessions"
              name="total_sessions"
              value={formData.total_sessions}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1">
            <label htmlFor="price" className="text-sm font-medium text-gray-700">
              {t('form.price')}
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Clinic */}
          <div className="flex flex-col gap-1">
            <label htmlFor="clinic" className="text-sm font-medium text-gray-700">
              {t('form.selectClinic')}
            </label>
            <input
              type="text"
              id="clinic"
              name="clinic"
              value={formData.clinic}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
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
  );
};

export default EditPlanModal;

'use client'

import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useTranslations } from 'next-intl';

const EditAppointmentModal = ({
    appointment,
    onClose,
    onSave
}: {
    appointment: any,
    onClose: () => void,
    onSave: (data: any) => void
}) => {
    const t = useTranslations('appointments');
    const [formData, setFormData] = useState({
        date: appointment.appointment_date,
        time: appointment.appointment_time,
        clinic: appointment.clinic.name,
        doctor: appointment.doctor.name,
        status: appointment.appointment_status
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">{t('edit_appointment')}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FiX size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('patient_name')}
                        </label>
                        <input
                            type="text"
                            value={appointment.patient.name}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            disabled
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('appointment_date')}
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('appointment_time')}
                        </label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('clinic')}
                        </label>
                        <select
                            name="clinic"
                            value={formData.clinic}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        >
                            <option value="تحليل سلوك تطبيقي">تحليل سلوك تطبيقي</option>
                            <option value="تخاطب">تخاطب</option>
                            <option value="تنمية مهارات">تنمية مهارات</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('doctor')}
                        </label>
                        <select
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        >
                            <option value="د. علي محمد">د. علي محمد</option>
                            <option value="د. فاطمة عبدالله">د. فاطمة عبدالله</option>
                            <option value="د. خالد محمود">د. خالد محمود</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('status')}
                        </label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        >
                            <option value="confirmed">{t('confirmed')}</option>
                            <option value="pending">{t('pending')}</option>
                            <option value="examined">{t('examined')}</option>
                            <option value="cancelled">{t('cancelled')}</option>
                        </select>
                    </div>

                    <div className="flex justify-end gap-2 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded text-sm"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                        >
                            {t('save_changes')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditAppointmentModal;
'use client'
import React from 'react';
import { useTranslations } from 'next-intl';
import { FiPrinter } from 'react-icons/fi';

interface Appointment {
    id: string;
    patient: {
        id: string;
        name: string;
        country: {
            name: string;
        };
    };
    doctor: {
        name: string;
    };
    clinic: {
        name: string;
    };
    appointment_status: string;
    absent_reason: string | null;
    appointment_time: string;
    appointment_date: string;
    patient_package_id: string | null;
    attended_at: Date | null;
    doctor_attended_at: Date | null;
}

interface DetailsModalProps {
    appointment: Appointment;
    onClose: () => void;
    onPrint: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ appointment, onClose, onPrint }) => {
    const t = useTranslations('appointments');

    const getStatusText = (status: string) => {
        switch (status) {
            case 'confirmed': return t('confirmed');
            case 'pending': return t('pending');
            case 'cancelled': return t('cancelled');
            case 'examined': return t('examined');
            default: return status;
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-[90%]">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">{t('patient_details')}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>

                <div className="mb-4">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2 text-xs">{t('file')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('patient_name')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('nationality')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('doctor')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('clinic')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('status')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('reason')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('appointment_time')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('appointment_date')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('type')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('reception_presence')}</th>
                                    <th className="border px-4 py-2 text-xs">{t('doctor_presence')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 text-xs text-center">{appointment.patient.id}</td>
                                    <td className="border px-4 py-2 text-xs text-center">{appointment.patient.name}</td>
                                    <td className="border px-4 py-2 text-xs text-center">{appointment.patient.country.name}</td>
                                    <td className="border px-4 py-2 text-xs text-center">{appointment.doctor.name}</td>
                                    <td className="border px-4 py-2 text-xs text-center">{appointment.clinic.name}</td>
                                    <td className="border px-4 py-2 text-xs text-center">
                                        {getStatusText(appointment.appointment_status)}
                                    </td>
                                    <td className="border px-4 py-2 text-xs text-center">{appointment.absent_reason || '--'}</td>
                                    <td className="border px-4 py-2 text-xs text-center">{appointment.appointment_time}</td>
                                    <td className="border px-4 py-2 text-xs text-center">{appointment.appointment_date}</td>
                                    <td className="border px-4 py-2 text-xs text-center">
                                        {appointment.patient_package_id ? t('session') : t('examination')}
                                    </td>
                                    <td className="border px-4 py-2 text-xs text-center">
                                        {appointment.attended_at ? appointment.attended_at.toLocaleDateString('ar-SA', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true
                                        }) : '--'}
                                    </td>
                                    <td className="border px-4 py-2 text-xs text-center">
                                        {appointment.doctor_attended_at ? appointment.doctor_attended_at.toLocaleDateString('ar-SA', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true
                                        }) : '--'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm"
                    >
                        {t('back')}
                    </button>
                    <button
                        onClick={onPrint}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm flex items-center gap-1"
                    >
                        {t('print')}
                        <FiPrinter size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;
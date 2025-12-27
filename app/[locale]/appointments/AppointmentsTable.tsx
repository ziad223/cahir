'use client'

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCheck, FiX, FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';
import Table from '@/components/shared/reusableComponents/Table';
import PresenceModal from './PresenceModal';
import AbsenceModal from './AbsenceModal';
import DetailsModal from './DetailsModal';
import EditAppointmentModal from './EditAppointmentModal';
import { useTranslations } from 'next-intl';

const AppointmentsTable = ({
    appointments,
    tableLabels
}: {
    appointments: any[],
    tableLabels: Record<string, string>
}) => {
    const t = useTranslations('appointments');
    const [showPresenceModal, setShowPresenceModal] = useState<string | null>(null);
    const [showAbsenceModal, setShowAbsenceModal] = useState<string | null>(null);
    const [showDetailsModal, setShowDetailsModal] = useState<string | null>(null);
    const [showEditModal, setShowEditModal] = useState<string | null>(null);
    const [absentReason, setAbsentReason] = useState('');

    const handlePresence = (appointmentId: string) => {
        console.log('Marking appointment', appointmentId, 'as present');
        setShowPresenceModal(null);
    };

    const handleAbsence = (appointmentId: string) => {
        console.log('Marking appointment', appointmentId, 'as absent with reason:', absentReason);
        setAbsentReason('');
        setShowAbsenceModal(null);
    };

    const printAppointmentDetails = (appointmentId: string) => {
        console.log('Printing details for appointment', appointmentId);
    };

    const handleEditAppointment = (appointmentId: string) => {
        setShowEditModal(appointmentId);
    };

    const handleDeleteAppointment = (appointmentId: string) => {
        if (confirm(t('confirm_delete'))) {
            console.log('Deleting appointment', appointmentId);
            // هنا يمكنك إضافة منطق حذف الموعد
        }
    };

    const tableData = appointments.map((appointment, index) => ({
        index: index + 1,
        patientName: (
            <div className="min-w-[150px]">
                {appointment.patient.name}
                <div className="text-xs text-gray-500">{appointment.patient.id}</div>
            </div>
        ),
        date: appointment.created_at.toLocaleDateString('ar-SA'),
        period: `الفترة ${appointment.period_number}`,
        day: appointment.created_at.toLocaleDateString('ar-SA', { weekday: 'long' }),
        status: (
            <span className={`px-2 py-1 rounded-full text-xs ${appointment.appointment_status === 'confirmed' ? 'bg-green-100 text-green-800' :
                appointment.appointment_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    appointment.appointment_status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                }`}>
                {appointment.appointment_status === 'confirmed' ? tableLabels.confirmed :
                    appointment.appointment_status === 'pending' ? tableLabels.pending :
                        appointment.appointment_status === 'cancelled' ? tableLabels.cancelled :
                            appointment.appointment_status === 'examined' ? tableLabels.examined : appointment.appointment_status}
            </span>
        ),
        clinic: appointment.clinic.name,
        doctor: appointment.doctor.name,
        absentReason: appointment.absent_reason || tableLabels.no_reason,
        receptionPresence: (
            <>
                {!appointment.attended_at && appointment.appointment_status !== 'cancelled' && (
                    <>
                        <button
                            onClick={() => setShowPresenceModal(appointment.id)}
                            className="text-green-500 hover:text-green-700 p-1"
                            title={tableLabels.presence}
                        >
                            <FiCheck size={16} />
                        </button>
                        <button
                            onClick={() => setShowAbsenceModal(appointment.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                            title={tableLabels.absence}
                        >
                            <FiX size={16} />
                        </button>
                    </>
                )}

                {appointment.attended_at && appointment.appointment_status !== 'cancelled' && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{tableLabels.presence}</span>
                )}

                {appointment.appointment_status === 'cancelled' && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">{tableLabels.absence}</span>
                )}
            </>
        ),
        doctorPresence: (
            appointment.doctor_attended_at ? (
                appointment.doctor_attended_at.toLocaleDateString('ar-SA', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                })
            ) : tableLabels.not_attended_yet
        ),
        actions: (
            <div className="flex items-center justify-center gap-2 min-w-[120px]">
                <a
                    href={`https://wa.me/+966${appointment.patient.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700"
                    title="WhatsApp"
                >
                    <FaWhatsapp size={18} />
                </a>

                <button
                    onClick={() => setShowDetailsModal(appointment.id)}
                    className="text-purple-500 hover:text-purple-700"
                    title={tableLabels.patient_details}
                >
                    <FiEye size={16} />
                </button>

                <button
                    onClick={() => handleEditAppointment(appointment.id)}
                    className="text-blue-500 hover:text-blue-700"
                    title={tableLabels.edit_appointment}
                >
                    <FiEdit size={16} />
                </button>

                <button
                    onClick={() => handleDeleteAppointment(appointment.id)}
                    className="text-red-500 hover:text-red-700"
                    title={tableLabels.delete_appointment}
                >
                    <FiTrash2 size={16} />
                </button>
            </div>
        )
    }));

    const columns = [
        { label: '#', key: 'index', className: 'w-12' },
        { label: tableLabels.patient_name, key: 'patientName', className: 'min-w-[150px]' },
        { label: tableLabels.appointment_date, key: 'date', className: 'min-w-[100px]' },
        { label: tableLabels.status, key: 'status', className: 'min-w-[100px]' },
        { label: tableLabels.clinic, key: 'clinic', className: 'min-w-[150px]' },
        { label: tableLabels.doctor, key: 'doctor', className: 'min-w-[150px]' },
        { label: tableLabels.reason, key: 'absentReason', className: 'min-w-[120px]' },
        { label: tableLabels.reception_presence, key: 'receptionPresence', className: 'min-w-[120px]' },
        { label: tableLabels.doctor_presence, key: 'doctorPresence', className: 'min-w-[150px]' },
        { label: tableLabels.actions, key: 'actions', className: 'min-w-[120px]' }
    ];

    return (
        <div className="overflow-x-auto">
            <Table 
                columns={columns} 
                data={tableData} 
                className="min-w-full"
            />

            {showPresenceModal && (
                <PresenceModal
                    onClose={() => setShowPresenceModal(null)}
                    onConfirm={() => handlePresence(showPresenceModal)}
                />
            )}

            {showAbsenceModal && (
                <AbsenceModal
                    onClose={() => setShowAbsenceModal(null)}
                    onSave={(reason) => {
                        setAbsentReason(reason);
                        handleAbsence(showAbsenceModal);
                    }}
                />
            )}

            {showDetailsModal && (
                <DetailsModal
                    appointment={appointments.find(a => a.id === showDetailsModal)!}
                    onClose={() => setShowDetailsModal(null)}
                    onPrint={() => printAppointmentDetails(showDetailsModal)}
                />
            )}

            {showEditModal && (
                <EditAppointmentModal
                    appointment={appointments.find(a => a.id === showEditModal)!}
                    onClose={() => setShowEditModal(null)}
                    onSave={(updatedData) => {
                        console.log('Updated appointment data:', updatedData);
                        setShowEditModal(null);
                    }}
                />
            )}
        </div>
    );
};

export default AppointmentsTable;
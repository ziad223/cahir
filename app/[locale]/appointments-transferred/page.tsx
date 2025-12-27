'use client'
import React, { useState } from 'react';
import { FiCalendar, FiPrinter, FiCheck, FiX, FiEye, FiMoreVertical } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Table from '@/components/shared/reusableComponents/Table';
import { useLocale, useTranslations } from 'next-intl';
import PresenceModal from './PresenceModal';
import AbsenceModal from './AbsenceModal';
import DetailsModal from './DetailsModal';
import Link from 'next/link';

const AppointmentsPage = () => {
    const t = useTranslations('appointments');
    const locale = useLocale();
    const [search, setSearch] = useState('');
    const [department, setDepartment] = useState('');
    const [doctor, setDoctor] = useState('');
    const [appointmentType, setAppointmentType] = useState('');
    const [periodNumber, setPeriodNumber] = useState('');
    const [appointmentStatus, setAppointmentStatus] = useState('');
    const [patientId, setPatientId] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [showPresenceModal, setShowPresenceModal] = useState<string | null>(null);
    const [showAbsenceModal, setShowAbsenceModal] = useState<string | null>(null);
    const [showDetailsModal, setShowDetailsModal] = useState<string | null>(null);
    const [absentReason, setAbsentReason] = useState('');

    // Mock data - بيانات وهمية
    const appointments = [
        {
            id: '1',
            patient: { name: 'محمد أحمد', id: '12345', phone: '0512345678', country: { name: 'السعودية' } },
            created_at: new Date('2023-06-15'),
            period_number: 'period1',
            appointment_status: 'confirmed',
            clinic: { name: 'تحليل سلوك تطبيقي' },
            doctor: { name: 'د. علي محمد' },
            absent_reason: null,
            attended_at: new Date('2023-06-15 09:30'),
            doctor_attended_at: new Date('2023-06-15 10:00'),
            appointment_time: '09:30',
            appointment_date: '2023-06-15',
            patient_package_id: null
        },
        {
            id: '2',
            patient: { name: 'سارة خالد', id: '12346', phone: '0512345679', country: { name: 'السعودية' } },
            created_at: new Date('2023-06-15'),
            period_number: 'period1',
            appointment_status: 'pending',
            clinic: { name: 'تخاطب' },
            doctor: { name: 'د. فاطمة عبدالله' },
            absent_reason: null,
            attended_at: null,
            doctor_attended_at: null,
            appointment_time: '10:00',
            appointment_date: '2023-06-15',
            patient_package_id: '123'
        },
        {
            id: '3',
            patient: { name: 'أحمد سعيد', id: '12347', phone: '0512345680', country: { name: 'مصر' } },
            created_at: new Date('2023-06-15'),
            period_number: 'period2',
            appointment_status: 'examined',
            clinic: { name: 'تنمية مهارات' },
            doctor: { name: 'د. خالد محمود' },
            absent_reason: null,
            attended_at: new Date('2023-06-15 13:30'),
            doctor_attended_at: new Date('2023-06-15 14:00'),
            appointment_time: '13:30',
            appointment_date: '2023-06-15',
            patient_package_id: null
        }
    ];

    const patients = [
        { id: '12345', name: 'محمد أحمد' },
        { id: '12346', name: 'سارة خالد' },
        { id: '12347', name: 'أحمد سعيد' }
    ];

    const resetAll = () => {
        setSearch('');
        setDepartment('');
        setDoctor('');
        setAppointmentType('');
        setPeriodNumber('');
        setAppointmentStatus('');
        setPatientId('');
        setFromDate('');
        setToDate('');
    };

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

    const tableData = appointments.map((appointment, index) => ({
        index: index + 1,
        patientName: appointment.patient.name,
        date: appointment.created_at.toLocaleDateString('ar-SA'),
        period: `الفترة ${appointment.period_number}`,
        day: appointment.created_at.toLocaleDateString('ar-SA', { weekday: 'long' }),
        status: (
            <span className={`px-2 py-1 rounded-full text-xs ${appointment.appointment_status === 'confirmed' ? 'bg-green-100 text-green-800' :
                appointment.appointment_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    appointment.appointment_status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                }`}>
                {appointment.appointment_status === 'confirmed' ? t('confirmed') :
                    appointment.appointment_status === 'pending' ? t('pending') :
                        appointment.appointment_status === 'cancelled' ? t('cancelled') :
                            appointment.appointment_status === 'examined' ? t('examined') : appointment.appointment_status}
            </span>
        ),
        clinic: appointment.clinic.name,
        doctor: appointment.doctor.name,
        absentReason: appointment.absent_reason || t('no_reason'),
        receptionPresence: (
            <>
                {!appointment.attended_at && appointment.appointment_status !== 'cancelled' && (
                    <>
                        <button
                            onClick={() => setShowPresenceModal(appointment.id)}
                            className="text-green-500 hover:text-green-700 p-1"
                            title={t('presence')}
                        >
                            <FiCheck size={16} />
                        </button>
                        <button
                            onClick={() => setShowAbsenceModal(appointment.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                            title={t('absence')}
                        >
                            <FiX size={16} />
                        </button>
                    </>
                )}

                {appointment.attended_at && appointment.appointment_status !== 'cancelled' && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{t('presence')}</span>
                )}

                {appointment.appointment_status === 'cancelled' && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">{t('absence')}</span>
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
            ) : t('not_attended_yet')
        ),
        actions: (
            <div className="flex items-center justify-center gap-1">
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
                    className="text-purple-500 hover:text-purple-700 p-1"
                    title={t('patient_details')}
                >
                    <FiEye size={16} />
                </button>

                <div className="relative inline-block text-left">
                    <button
                        className="text-gray-500 hover:text-gray-700 p-1"
                        title="More"
                    >
                        <FiMoreVertical size={16} />
                    </button>
                </div>
            </div>
        )
    }));

    const columns = [
        { label: '#', key: 'index' },
        { label: t('patient_name'), key: 'patientName' },
        { label: t('appointment_date'), key: 'date' },
        { label: t('status'), key: 'status' },
        { label: t('clinic'), key: 'clinic' },
        { label: t('doctor'), key: 'doctor' },
        { label: t('reason'), key: 'absentReason' },
        { label: t('reception_presence'), key: 'receptionPresence' },
        { label: t('doctor_presence'), key: 'doctorPresence' },
        { label: t('actions'), key: 'actions' }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div></div>
                    <div className="flex flex-wrap items-center gap-2 justify-end">
                        <Link href={`/${locale}/patients/add`} className="bg-[#7451ab] hover:[#2cafc9] text-white px-4 py-2 rounded text-sm">
                            {t('new_visitor')}
                        </Link>
                        <Link href = {`/${locale}/appointments/create`} className="bg-[#7451ab] hover:[#2cafc9] text-white px-4 py-2 rounded text-sm">
                            {t('new_appointment')}
                        </Link>
                        <button
                            onClick={resetAll}
                            className="border bg-[#198754] text-white hover:bg-green-600 px-4 py-2 rounded text-sm"
                        >
                            {t('all_appointments')}
                        </button>
                       
                       
                        <Link href={`/${locale}/doctor-appointments-table`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm flex items-center gap-1">
                            {t('schedule')}
                            <FiCalendar className="text-sm" />
                        </Link>
                        <button onClick={() => window.print()} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm flex items-center gap-1">
                            <FiPrinter className="text-sm" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mb-4">
                    <div className="col-span-1">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-3 text-sm"
                            placeholder={t('search_placeholder')}
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-xs mb-1">{t('clinic')}</label>
                        <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        >
                            <option value="">{t('select_clinic')}</option>
                            <option value="1">تحليل سلوك تطبيقي</option>
                            <option value="2">دراسة الحالة</option>
                            <option value="3">تخاطب</option>
                            <option value="4">تنمية مهارات</option>
                        </select>
                    </div>

                    <div className="col-span-1">
                        <label className="block text-xs mb-1">{t('specialist')}</label>
                        <select
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        >
                            <option value="">{t('select_specialist')}</option>
                            <option value="6">مختبر</option>
                            <option value="7">مشرف تعليمي</option>
                            <option value="8">عائلة</option>
                        </select>
                    </div>

                    <div className="col-span-1">
                        <label className="block text-xs mb-1">{t('appointment_type')}</label>
                        <select
                            value={appointmentType}
                            onChange={(e) => setAppointmentType(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        >
                            <option value="">{t('all_types')}</option>
                            <option value="examination">{t('examination')}</option>
                            <option value="session">{t('session')}</option>
                        </select>
                    </div>

                    <div className="col-span-1">
                        <label className="block text-xs mb-1">{t('appointment_status')}</label>
                        <select
                            value={appointmentStatus}
                            onChange={(e) => setAppointmentStatus(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        >
                            <option value="">{t('appointment_status')}</option>
                            <option value="confirmed">{t('confirmed')}</option>
                            <option value="pending">{t('pending')}</option>
                            <option value="transferred">{t('transferred')}</option>
                            <option value="examined">{t('examined')}</option>
                            <option value="cancelled">{t('cancelled')}</option>
                            <option value="review">{t('review')}</option>
                        </select>
                    </div>

                    <div className="col-span-1">
                        <label className="block text-xs mb-1">{t('patient')}</label>
                        <select
                            value={patientId}
                            onChange={(e) => setPatientId(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        >
                            <option value="">{t('select_patient')}</option>
                            {patients.map(patient => (
                                <option key={patient.id} value={patient.id}>{patient.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-span-1">
                        <label className="block text-xs mb-1">{t('from')}</label>
                        <input
                            type="date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-xs mb-1">{t('to')}</label>
                        <input
                            type="date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        />
                    </div>
                </div>

                <Table columns={columns} data={tableData} />
            </div>

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
        </div>
    );
};

export default AppointmentsPage;
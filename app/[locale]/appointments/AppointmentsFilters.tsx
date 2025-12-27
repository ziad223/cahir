'use client'

import React from 'react';
import { useTranslations } from 'next-intl';

const AppointmentsFilters = ({
    patients,
    filterLabels
}: {
    patients: any[],
    filterLabels: Record<string, string>
}) => {
    // نستخدم useTranslations للترجمة في الكلاينت
    const t = useTranslations('appointments');

    const [search, setSearch] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [doctor, setDoctor] = React.useState('');
    const [appointmentType, setAppointmentType] = React.useState('');
    const [periodNumber, setPeriodNumber] = React.useState('');
    const [appointmentStatus, setAppointmentStatus] = React.useState('');
    const [patientId, setPatientId] = React.useState('');
    const [fromDate, setFromDate] = React.useState('');
    const [toDate, setToDate] = React.useState('');

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

    return (
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mb-4">
            <div className="col-span-1">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    placeholder={filterLabels.search_placeholder}
                />
            </div>

            <div className="col-span-1">
                <label className="block text-xs mb-1">{filterLabels.clinic}</label>
                <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                >
                    <option value="">{filterLabels.select_clinic}</option>
                    <option value="1">تحليل سلوك تطبيقي</option>
                    <option value="2">دراسة الحالة</option>
                    <option value="3">تخاطب</option>
                    <option value="4">تنمية مهارات</option>
                </select>
            </div>

            <div className="col-span-1">
                <label className="block text-xs mb-1">{filterLabels.specialist}</label>
                <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                >
                    <option value="">{filterLabels.select_specialist}</option>
                    <option value="6">مختبر</option>
                    <option value="7">مشرف تعليمي</option>
                    <option value="8">عائلة</option>
                </select>
            </div>

            <div className="col-span-1">
                <label className="block text-xs mb-1">{filterLabels.appointment_type}</label>
                <select
                    value={appointmentType}
                    onChange={(e) => setAppointmentType(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                >
                    <option value="">{filterLabels.all_types}</option>
                    <option value="examination">{filterLabels.examination}</option>
                    <option value="session">{filterLabels.session}</option>
                </select>
            </div>

            <div className="col-span-1">
                <label className="block text-xs mb-1">{filterLabels.appointment_status}</label>
                <select
                    value={appointmentStatus}
                    onChange={(e) => setAppointmentStatus(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                >
                    <option value="">{filterLabels.appointment_status}</option>
                    <option value="confirmed">{filterLabels.confirmed}</option>
                    <option value="pending">{filterLabels.pending}</option>
                    <option value="transferred">{filterLabels.transferred}</option>
                    <option value="examined">{filterLabels.examined}</option>
                    <option value="cancelled">{filterLabels.cancelled}</option>
                    <option value="review">{filterLabels.review}</option>
                </select>
            </div>

            <div className="col-span-1">
                <label className="block text-xs mb-1">{filterLabels.patient}</label>
                <select
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                >
                    <option value="">{filterLabels.select_patient}</option>
                    {patients.map(patient => (
                        <option key={patient.id} value={patient.id}>{patient.name}</option>
                    ))}
                </select>
            </div>

            <div className="col-span-1">
                <label className="block text-xs mb-1">{filterLabels.from}</label>
                <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
            </div>

            <div className="col-span-1">
                <label className="block text-xs mb-1">{filterLabels.to}</label>
                <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
            </div>
        </div>
    );
};

export default AppointmentsFilters;
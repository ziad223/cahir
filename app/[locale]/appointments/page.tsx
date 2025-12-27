import React from 'react';
import { FiCalendar, FiPrinter, FiPlus } from 'react-icons/fi';
import { getTranslations } from 'next-intl/server';
import AppointmentsTable from './AppointmentsTable';
import AppointmentsFilters from './AppointmentsFilters';

const AppointmentsPage = async () => {
    const t = await getTranslations('appointments');

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
            patient: { name: 'كريم علي', id: '12345', phone: '0512345678', country: { name: 'السعودية' } },
            created_at: new Date('2023-06-15'),
            period_number: 'period1',
            appointment_status: 'confirmed',
            clinic: { name: 'تحليل سلوك تطبيقي' },
            doctor: { name: 'د. زياد محمد' },
            absent_reason: null,
            attended_at: new Date('2023-06-15 09:30'),
            doctor_attended_at: new Date('2023-06-15 10:00'),
            appointment_time: '09:30',
            appointment_date: '2023-06-15',
            patient_package_id: null
        },
        // ... باقي البيانات
    ];

    const patients = [
        { id: '12345', name: 'محمد أحمد' },
        { id: '12346', name: 'سارة خالد' },
        { id: '12347', name: 'أحمد سعيد' }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-wrap items-center gap-2 justify-end">
                    <button className="bg-[#7451ab] hover:[#2cafc9] text-white px-4 py-2 rounded text-sm">
                        {t('new_visitor')}
                    </button>
                    <button className="bg-[#7451ab] hover:[#2cafc9] text-white px-4 py-2 rounded text-sm">
                        {t('new_appointment')}
                    </button>
                    <button className="border bg-[#198754] text-white hover:bg-green-600 px-4 py-2 rounded text-sm">
                        {t('all_appointments')}
                    </button>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm flex items-center gap-1">
                        {t('schedule')}
                        <FiCalendar className="text-sm" />
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm flex items-center gap-1">
                        <FiPrinter className="text-sm" />
                    </button>
                </div>

                <AppointmentsFilters
                    patients={patients}
                    filterLabels={{
                        search_placeholder: t('search_placeholder'),
                        clinic: t('clinic'),
                        select_clinic: t('select_clinic'),
                        specialist: t('specialist'),
                        select_specialist: t('select_specialist'),
                        appointment_type: t('appointment_type'),
                        all_types: t('all_types'),
                        examination: t('examination'),
                        session: t('session'),
                        appointment_status: t('appointment_status'),
                        confirmed: t('confirmed'),
                        pending: t('pending'),
                        transferred: t('transferred'),
                        examined: t('examined'),
                        cancelled: t('cancelled'),
                        review: t('review'),
                        patient: t('patient'),
                        select_patient: t('select_patient'),
                        from: t('from'),
                        to: t('to')
                    }}
                />

                <AppointmentsTable
                    appointments={appointments}
                    // نمرر أسماء الحقول فقط كـ strings
                    tableLabels={{
                        patient_name: t('patient_name'),
                        appointment_date: t('appointment_date'),
                        status: t('status'),
                        clinic: t('clinic'),
                        doctor: t('doctor'),
                        reason: t('reason'),
                        reception_presence: t('reception_presence'),
                        doctor_presence: t('doctor_presence'),
                        actions: t('actions'),
                        confirmed: t('confirmed'),
                        pending: t('pending'),
                        cancelled: t('cancelled'),
                        examined: t('examined'),
                        presence: t('presence'),
                        absence: t('absence'),
                        not_attended_yet: t('not_attended_yet'),
                        no_reason: t('no_reason'),
                        patient_details: t('patient_details')
                    }}
                />
            </div>
        </div>
    );
};

export default AppointmentsPage;
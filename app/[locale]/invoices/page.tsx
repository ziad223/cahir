'use client'
import Table from '@/components/shared/reusableComponents/Table';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';

interface Invoice {
    id: number;
    patient?: {
        id: number;
        name: string;
    };
    dr?: {
        name: string;
    };
    employee?: {
        name: string;
    };
    date?: string;
    created_at: string;
    amount: number;
    tax: number;
    discount_rate?: number;
    total: number;
    paid: number;
    rest: number;
    status: 'مدفوعة' | 'غير مدفوعة' | 'مرتجعة' | 'مدفوعة جزئياً';
    payment_method?: string;
}

interface Doctor {
    id: number;
    name: string;
}

interface Employee {
    id: number;
    name: string;
}

interface Clinic {
    id: number;
    name: string;
}

const InvoicesPage: React.FC = () => {
    const t = useTranslations('invoices');
    const locale = useLocale()

    // بيانات الفواتير
    const [invoices, setInvoices] = useState<Invoice[]>([
        {
            id: 1,
            patient: { id: 101, name: t('patientName1') },
            dr: { name: t('doctorName1') },
            employee: { name: t('employeeName1') },
            date: '2023-05-15',
            created_at: '2023-05-15T10:00:00Z',
            amount: 100,
            tax: 10,
            discount_rate: 5,
            total: 104.5,
            paid: 104.5,
            rest: 0,
            status: t('paidStatus') as any,
            payment_method: t('cashPayment')
        },
        {
            id: 1,
            patient: { id: 101, name: t('patientName1') },
            dr: { name: t('doctorName1') },
            employee: { name: t('employeeName1') },
            date: '2023-05-15',
            created_at: '2023-05-15T10:00:00Z',
            amount: 100,
            tax: 10,
            discount_rate: 5,
            total: 104.5,
            paid: 104.5,
            rest: 0,
            status: t('unpaidStatus') as any,
            payment_method: t('cashPayment')
        },
        {
            id: 1,
            patient: { id: 101, name: t('patientName1') },
            dr: { name: t('doctorName1') },
            employee: { name: t('employeeName1') },
            date: '2023-05-15',
            created_at: '2023-05-15T10:00:00Z',
            amount: 100,
            tax: 10,
            discount_rate: 5,
            total: 104.5,
            paid: 104.5,
            rest: 0,
            status: t('paidStatus') as any,
            payment_method: t('cashPayment')
        },
    ]);

    const [doctors, setDoctors] = useState<Doctor[]>([
        { id: 1, name: t('doctorName1') },
        { id: 2, name: t('doctorName2') },
    ]);

    const [receptions, setReceptions] = useState<Employee[]>([
        { id: 1, name: t('employeeName1') },
        { id: 2, name: t('employeeName2') },
    ]);

    const [clinics, setClinics] = useState<Clinic[]>([
        { id: 1, name: t('mainClinic') },
        { id: 2, name: t('branchClinic') },
    ]);

    // حالات الفلتر
    const [search, setSearch] = useState('');
    const [from, setFrom] = useState('2022-07-12');
    const [to, setTo] = useState('2024-03-03');
    const [dr, setDr] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [status, setStatus] = useState('');
    const [clinicId, setClinicId] = useState('');

    // حالات الباجينيشن
    const [currentPage, setCurrentPage] = useState(1);
    const [invoicesPerPage] = useState(10);

    // تعداد الفواتير
    const paidCount = invoices.filter(i => i.status === t('paidStatus')).length;
    const unpaidCount = invoices.filter(i => i.status === t('unpaidStatus')).length;

    // بيانات الجدول
    const columns = [
        { label: t('invoiceNumber'), key: 'id' },
        { label: t('medicalNumber'), key: 'medicalNumber' },
        { label: t('patient'), key: 'patient' },
        { label: t('doctor'), key: 'dr' },
        { label: t('employee'), key: 'employee' },
        { label: t('date'), key: 'date' },
        { label: t('amount'), key: 'amount' },
        { label: t('tax'), key: 'tax' },
        { label: t('discount'), key: 'discount' },
        { label: t('totalWithTax'), key: 'total' },
        { label: t('paid'), key: 'paid' },
        { label: t('remaining'), key: 'rest' },
        { label: t('status'), key: 'status' },
        { label: t('actions'), key: 'actions' },
    ];

    // فلترة البيانات حسب الصفحة الحالية
    const indexOfLastInvoice = currentPage * invoicesPerPage;
    const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
    const currentInvoices = invoices.slice(indexOfFirstInvoice, indexOfLastInvoice);

    // إعداد بيانات الجدول
    const tableData = currentInvoices.map(invoice => ({
        id: invoice.id,
        medicalNumber: invoice.patient?.id || t('notAvailable'),
        patient: invoice.patient?.name || t('noPatient'),
        dr: invoice.dr ? invoice.dr.name : t('noDoctor'),
        employee: invoice.employee ? invoice.employee.name : t('noEmployee'),
        date: invoice.date || new Date(invoice.created_at).toISOString().split('T')[0],
        amount: invoice.amount,
        tax: invoice.tax,
        discount: <span className="text-red-500">{(invoice.discount_rate || 0) + '%'}</span>,
        total: invoice.total,
        paid: invoice.paid,
        rest: invoice.rest,
        status: (
            <span className={`badge ${invoice.status === t('paidStatus') ? 'bg-green-500' : 'bg-red-500'} text-white px-2 py-1 rounded`}>
                {invoice.status}
                {invoice.status === t('paidStatus') && ` / ${invoice.payment_method}`}
            </span>
        ),
        actions: (
            <div className="flex items-center justify-center gap-1">
                <a href={`/invoices/${invoice.id}`} title={t('view')} className="btn btn-sm bg-purple-500 text-white px-2 py-1 rounded">
                    <i className="fa fa-eye"></i>
                </a>

                <button title={t('restore')} className="btn btn-sm bg-blue-500 text-white px-2 py-1 rounded">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </button>

                {invoice.status !== t('paidStatus') && (
                    <a href={`/invoices/${invoice.id}/bonds`} title={t('bonds')} className="btn btn-sm bg-yellow-500 text-white px-2 py-1 rounded">
                        <i className="fa-solid fa-file-contract"></i>
                    </a>
                )}

                <div className="dropdown relative">
                    <button className="btn btn-sm bg-gray-200 text-gray-700 px-2 py-1 rounded" type="button">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <ul className="dropdown-menu absolute hidden bg-white shadow-lg rounded mt-1 py-1 z-10">
                        <li>
                            <a className="dropdown-item px-4 py-2 hover:bg-gray-100 block" href={`/invoices/${invoice.id}/edit`}>
                                <i className="fa fa-pen-to-square mr-1"></i>
                                {t('editInvoice')}
                            </a>
                        </li>
                        <li>
                            <button className="dropdown-item px-4 py-2 hover:bg-gray-100 block w-full text-left">
                                <i className="fa fa-trash-can mr-1"></i> {t('deleteInvoice')}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }));

    return (
        <section className="p-4">
            <div className="container mx-auto">
                <h4 className="text-xl font-bold mb-4">{t('invoices')}</h4>
                <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <div className="btns-holder flex gap-2">
                            <button className="btn btn-sm bg-green-500 text-white px-3 py-1 rounded">
                                {t('paidInvoices')}: {paidCount}
                            </button>
                            <button className="btn btn-sm bg-red-500 text-white px-3 py-1 rounded">
                                {t('unpaidInvoices')}: {unpaidCount}
                            </button>
                        </div>
                        <div className="control-option flex flex-wrap items-center justify-center gap-2">
                            <div className="print-btn btn btn-sm bg-yellow-500 text-white px-3 py-1 rounded">
                                <i className="fa-solid fa-print"></i>
                            </div>
                            <a href={`/${locale}/invoices/create`} className="btn flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded text-sm">
                                <span>{t('addInvoice')}</span>
                                <i className="fa-solid fa-plus"></i>
                            </a>
                        </div>
                    </div>

                    <div className="top-area mb-3">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                            <div className="md:col-span-2 flex items-end">
                                <div className="w-full">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="form-control w-full px-3 py-2 outline-none border border-gray-300 rounded"
                                        placeholder={t('searchPlaceholder')}
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="info-data">
                                    <label htmlFor="duration-from" className="block text-sm mb-1">{t('from')}</label>
                                    <input
                                        type="date"
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                        className="form-control w-full px-3 py-2 border border-gray-300 rounded"
                                        id="duration-from"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="info-data">
                                    <label htmlFor="duration-to" className="block text-sm mb-1">{t('to')}</label>
                                    <input
                                        type="date"
                                        value={to}
                                        onChange={(e) => setTo(e.target.value)}
                                        className="form-control w-full px-3 py-2 border border-gray-300 rounded"
                                        id="duration-to"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="info-data">
                                    <label htmlFor="doctor-name" className="block text-sm mb-1">{t('doctor')}</label>
                                    <select
                                        value={dr}
                                        onChange={(e) => setDr(e.target.value)}
                                        className="form-control w-full px-3 py-1 border border-gray-300 rounded"
                                        id="doctor-name"
                                    >
                                        <option value="">{t('allDoctors')}</option>
                                        {doctors.map(doctor => (
                                            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="info-data">
                                    <label htmlFor="employee_id" className="block text-sm mb-1">{t('employees')}</label>
                                    <select
                                        value={employeeId}
                                        onChange={(e) => setEmployeeId(e.target.value)}
                                        className="form-control w-full px-3 py-1 border border-gray-300 rounded"
                                        id="employee_id"
                                    >
                                        <option value="">{t('selectEmployee')}</option>
                                        {receptions.map(reception => (
                                            <option key={reception.id} value={reception.id}>{reception.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="info-data">
                                    <label htmlFor="bill-state" className="block text-sm mb-1">{t('status')}</label>
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className="form-control w-full px-3 py-1 border border-gray-300 rounded"
                                        id="bill-state"
                                    >
                                        <option value="">{t('all')}</option>
                                        <option value={t('paidStatus')}>{t('paidStatus')}</option>
                                        <option value={t('unpaidStatus')}>{t('unpaidStatus')}</option>
                                        <option value={t('returnedStatus')}>{t('returnedStatus')}</option>
                                        <option value={t('partiallyPaidStatus')}>{t('partiallyPaidStatus')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <div className="info-data">
                                    <label htmlFor="clinic-type" className="block text-sm mb-1">{t('clinic')}</label>
                                    <select
                                        value={clinicId}
                                        onChange={(e) => setClinicId(e.target.value)}
                                        className="form-control w-full px-3 py-1 border border-gray-300 rounded"
                                        id="clinic-type"
                                    >
                                        <option value="">{t('allClinics')}</option>
                                        {clinics.map(clinic => (
                                            <option key={clinic.id} value={clinic.id}>{clinic.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Table columns={columns} data={tableData} />
                </div>
            </div>
        </section>
    );
};

export default InvoicesPage;
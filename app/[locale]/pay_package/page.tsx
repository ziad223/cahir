'use client';

import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaPrint, FaQuestionCircle, FaEye } from 'react-icons/fa';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const BillsPage = () => {
    const [statusFilter, setStatusFilter] = useState<string | null>(null);
    const [month, setMonth] = useState('');
    const [week, setWeek] = useState('');
    const [selectedRow, setSelectedRow] = useState<any | null>(null);

    const t = useTranslations('bills');
    const locale = useLocale();

    const columns: Column[] = [
        { label: t('patient'), key: 'patient' },
        { label: t('supervisor'), key: 'supervisor' },
        { label: t('start'), key: 'start' },
        { label: t('end'), key: 'end' },
        { label: t('amount'), key: 'amount' },
        { label: t('tax'), key: 'tax' },
        { label: t('total'), key: 'total' },
        { label: t('status'), key: 'status' },
        { label: t('actions'), key: 'actions' },
    ];

    const baseData = [
        {
            patient: 'أحمد علي',
            supervisor: 'أ. فاطمة',
            start: '2024-05-01',
            end: '2024-11-01',
            amount: '500',
            tax: '50',
            total: '550',
            status: <span className="badge bg-success px-2 py-1 text-white text-xs rounded">{t('paid')}</span>,
        },
        {
            patient: 'سارة محمود',
            supervisor: 'أ. محمد',
            start: '2024-06-01',
            end: '2024-12-01',
            amount: '400',
            tax: '40',
            total: '440',
            status: <span className="badge bg-danger px-2 py-1 text-white text-xs rounded">{t('not_paid')}</span>,
        },
    ];

    const data = baseData.map((row) => ({
        ...row,
        actions: (
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setSelectedRow(row)}
                    className="btn btn-sm bg-gray-600 text-white px-3 py-1 rounded text-lg inline-flex items-center"
                >
                    <FaEye className="mr-1" />
                </button>
                <Link href={`/${locale}/treatment-plans`} className="btn btn-sm bg-blue-600 text-white px-3 py-1 rounded text-xs">
                    {t('pay')}
                </Link>
            </div>
        )
    }));
    

    return (
        <section className="py-10 bg-gray-100 min-h-[calc(100vh-100px)]">
            <div className="container mx-auto px-4">
                <h4 className="text-lg font-bold mb-4">{t('title')}</h4>

                <div className="bg-white shadow p-6 rounded-lg">
                    <div className="flex justify-end gap-2 mb-3">
                        <button
                            type="button"
                            className="btn btn-sm w-8 h-8 border border-gray-300 hover:bg-gray-500 text-gray-500 hover:text-white flex items-center justify-center rounded-full"
                            title={t('tooltip')}
                        >
                            <FaQuestionCircle />
                        </button>
                        <button
                            className="btn btn-sm bg-yellow-400 text-white hover:bg-yellow-500 px-2 py-1 rounded"
                            onClick={() => window.print()}
                        >
                            <FaPrint />
                        </button>
                    </div>

                    {/* Status Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-end">
                            <button onClick={() => setStatusFilter(null)} className="text-xs h-[40px] px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
                                {t('all')}
                            </button>
                            <button onClick={() => setStatusFilter('Paid')} className="text-xs h-[40px] px-3 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50">
                                {t('paid')}
                            </button>
                            <button onClick={() => setStatusFilter('NotPaid')} className="text-xs h-[40px] px-3 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50">
                                {t('not_paid')}
                            </button>
                        </div>

                        {/* Month and Week */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm block mb-1">{t('month')}</label>
                                <select
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                >
                                    <option value="">{t('select')}</option>
                                    <option value="5">{t('may')}</option>
                                    <option value="6">{t('june')}</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm block mb-1">{t('week')}</label>
                                <select
                                    value={week}
                                    onChange={(e) => setWeek(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                >
                                    <option value="">{t('select')}</option>
                                    <option value="1">{t('week_1')}</option>
                                    <option value="2">{t('week_2')}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <Table columns={columns} data={data} />
                </div>
            </div>

            {/* Modal */}
            {selectedRow && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative animate-fade-in">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedRow(null)}
                        >
                            &times;
                        </button>
                        <h2 className="text-lg font-bold mb-4">تفاصيل الأشتراك</h2>
                        <div className="space-y-2 text-sm">
                            <p><strong>{t('patient')}:</strong> {selectedRow.patient}</p>
                            <p><strong>{t('supervisor')}:</strong> {selectedRow.supervisor}</p>
                            <p><strong>{t('start')}:</strong> {selectedRow.start}</p>
                            <p><strong>{t('end')}:</strong> {selectedRow.end}</p>
                            <p><strong>{t('amount')}:</strong> {selectedRow.amount}</p>
                            <p><strong>{t('tax')}:</strong> {selectedRow.tax}</p>
                            <p><strong>{t('total')}:</strong> {selectedRow.total}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BillsPage;

'use client';

import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaEye } from 'react-icons/fa';
import { useTranslations } from 'next-intl';



const SubscriptionsPage =  () => {
    const [status, setStatus] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const t =  useTranslations('subscription');
    const columns: Column[] = [
        { label: t('number'), key: 'id' },
        { label: t('patient'), key: 'patient' },
        { label: t('package'), key: 'package' },
        { label: t('start'), key: 'start' },
        { label: t('end'), key: 'end' },
        { label: t('status'), key: 'status' },
        { label: t('remaining'), key: 'remaining' },
        { label: t('actions'), key: 'control' },
    ];
    
   const mockData = [
    {
        id: 'EG-001',
        patient: 'أحمد علي',
        package: 'خطة العلاج الطبيعي',
        start: '2024-02-15',
        end: '2024-08-15',
        status: <span className="badge bg-success">{t('active')}</span>,
        remaining: 2,
        control: (
            <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 px-5 py-2 text-[16px] rounded inline-flex items-center">
                <FaEye className="me-1" /> {t('details')}
            </a>
        ),
    },
    {
        id: 'EG-002',
        patient: 'سارة محمود',
        package: 'خطة التغذية العلاجية',
        start: '2024-03-10',
        end: '2024-09-10',
        status: <span className="badge bg-warning text-dark">{t('in_progress')}</span>,
        remaining: 1,
        control: (
            <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 px-5 py-2 text-[16px] rounded inline-flex items-center">
                <FaEye className="me-1" /> {t('details')}
            </a>
        ),
    },
    {
        id: 'EG-003',
        patient: 'يوسف محمد',
        package: 'خطة الدعم النفسي',
        start: '2024-01-05',
        end: '2024-06-05',
        status: <span className="badge bg-danger">{t('expired')}</span>,
        remaining: 0,
        control: (
            <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 px-5 py-2 text-[16px] rounded inline-flex items-center">
                <FaEye className="me-1" /> {t('details')}
            </a>
        ),
    },
    {
        id: 'EG-004',
        patient: 'نهى عبد الرحمن',
        package: 'خطة علاج الآلام المزمنة',
        start: '2024-04-01',
        end: '2024-10-01',
        status: <span className="badge bg-success">{t('active')}</span>,
        remaining: 4,
        control: (
            <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 px-5 py-2 text-[16px] rounded inline-flex items-center">
                <FaEye className="me-1" /> {t('details')}
            </a>
        ),
    },
    {
        id: 'EG-005',
        patient: 'محمود حسني',
        package: 'خطة المتابعة النفسية للأطفال',
        start: '2024-02-20',
        end: '2024-07-20',
        status: <span className="badge bg-warning text-dark">{t('in_progress')}</span>,
        remaining: 2,
        control: (
            <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 px-5 py-2 text-[16px] rounded inline-flex items-center">
                <FaEye className="me-1" /> {t('details')}
            </a>
        ),
    },
    {
        id: 'EG-006',
        patient: 'ليلى إبراهيم',
        package: 'خطة الدعم السلوكي',
        start: '2023-11-10',
        end: '2024-05-10',
        status: <span className="badge bg-danger">{t('expired')}</span>,
        remaining: 0,
        control: (
            <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 px-5 py-2 text-[16px] rounded inline-flex items-center">
                <FaEye className="me-1" /> {t('details')}
            </a>
        ),
    },
    {
        id: 'EG-007',
        patient: 'منة خالد',
        package: 'خطة تعديل السلوك للأطفال',
        start: '2024-05-01',
        end: '2024-11-01',
        status: <span className="badge bg-success">{t('active')}</span>,
        remaining: 3,
        control: (
            <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 px-5 py-2 text-[16px] rounded inline-flex items-center">
                <FaEye className="me-1" /> {t('details')}
            </a>
        ),
    },
];
    const filteredData = mockData.filter(item =>
        item.patient.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h4 className="text-lg font-bold mb-6">{t('title')}</h4>
                <div className="bg-white shadow p-5 rounded-lg">

                    <div className="flex flex-wrap gap-2 mb-5">
                        <button onClick={() => setStatus(null)} className="py-2 px-3 bg-blue-600 text-white rounded text-sm">
                            {t('all')} <span className="bg-gray-800 text-white text-xs rounded px-2 ml-1">100</span>
                        </button>
                        <button onClick={() => setStatus('active')} className="py-2 px-3 bg-green-600 text-white rounded text-sm">
                            {t('active')} <span className="bg-gray-800 text-white text-xs rounded px-2 ml-1">42</span>
                        </button>
                        <button onClick={() => setStatus('in_active')} className="py-2 px-3 bg-yellow-500 text-white rounded text-sm">
                            {t('expired')} <span className="bg-gray-800 text-white text-xs rounded px-2 ml-1">18</span>
                        </button>
                        <button onClick={() => setStatus('stopped')} className="py-2 px-3 bg-gray-600 text-white rounded text-sm">
                            {t('stopped')} <span className="bg-gray-800 text-white text-xs rounded px-2 ml-1">8</span>
                        </button>
                        <button onClick={() => setStatus('retreat')} className="py-2 px-3 bg-cyan-500 text-white rounded text-sm">
                            {t('retreat')} <span className="bg-gray-800 text-white text-xs rounded px-2 ml-1">5</span>
                        </button>
                        <button onClick={() => setStatus('cancelled')} className="py-2 px-3 bg-red-600 text-white rounded text-sm">
                            {t('cancelled')} <span className="bg-gray-800 text-white text-xs rounded px-2 ml-1">3</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4 mt-14">
                        <div className="col-span-2">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={t('search')}
                                className="form-input w-full rounded border-gray-300 border lg:w-[350px] p-5 h-[40px] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">{t('from')}</label>
                            <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className="form-input w-full rounded border-gray-300 border lg:w-[200px] p-5 h-[40px]" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">{t('to')}</label>
                            <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className="form-input w-full rounded border-gray-300 border lg:w-[200px] p-5 h-[40px]" />
                        </div>
                    </div>

                    <Table columns={columns} data={filteredData} />
                    </div>
            </div>
        </section>
    );
};

export default SubscriptionsPage;

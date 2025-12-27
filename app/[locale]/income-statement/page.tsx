import Container from '@/components/shared/formcomponents/Container';
import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations('accounting');

    const columns1: Column[] = [
        { label: t('accountName'), key: 'accountName' },
        { label: t('balance'), key: 'balance' },
    ];

    const data1 = [
        { accountName: t('assets'), balance: '10,570.00' },
        { accountName: t('liabilities'), balance: '0.00' },
        { accountName: t('capital'), balance: '0.00' },
        { accountName: t('expenses'), balance: '-4,025.00' },
        { accountName: t('revenues'), balance: '-3,045.00' },
        { accountName: t('purchases'), balance: '-3,500.00' },
    ];

    const columns2: Column[] = [
        { label: t('item'), key: 'item' },
        { label: t('amount'), key: 'amount' },
    ];

    const data2 = [
        { item: t('totalRevenues'), amount: '3,045.00' },
        { item: t('totalExpenses'), amount: '0.00' },
        { item: t('operatingProfit'), amount: '165.00' },
        { item: t('netProfit'), amount: '165.00' },
    ];

    return (
        <Container>
            <div>
                
                <h2 className="text-xl font-bold mb-5">{t('title')}</h2>
                <div className="bg-white rounded-[10px] p-10 space-y-6">
                    {/* الحقول */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700" htmlFor="fromDate">{t('from')}</label>
                            <input
                                type="date"
                                id="fromDate"
                                name="fromDate"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700" htmlFor="toDate">{t('to')}</label>
                            <input
                                type="date"
                                id="toDate"
                                name="toDate"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700" htmlFor="level">{t('level')}</label>
                            <select
                                id="level"
                                name="level"
                                className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">{t('selectLevel')}</option>
                                {[1, 2, 3, 4, 5, 6].map((level) => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* الجدول الأول */}
                    <Table columns={columns1} data={data1} />

                    {/* الجدول الثاني */}
                    <Table columns={columns2} data={data2} />
                </div>
            </div>
        </Container>
    );
};

export default Page;

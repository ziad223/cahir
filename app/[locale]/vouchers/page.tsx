import React from 'react';
import Container from '@/components/shared/formcomponents/Container';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { getTranslations } from 'next-intl/server';
import ViewBondButton from './ViewBondButton';
import EditBondButton from './EditBondButton';

interface BondData {
    id: string;
    description: string;
    date: string;
    debit: string;
    credit: string;
}
const Page = async () => {
    const t = await getTranslations('accounting');

    const columns: Column[] = [
        { label: '#', key: 'id' },
        { label: 'البيان', key: 'description' },
        { label: 'التاريخ', key: 'date' },
        { label: 'مدين', key: 'debit' },
        { label: 'دائن', key: 'credit' },
        { label: 'التحكم', key: 'actions' },
    ];

    const data: BondData[] = [
        {
            id: '1',
            description: 'شراء معدات',
            date: '2024-06-01',
            debit: '5,000',
            credit: '0',
        },
        {
            id: '2',
            description: 'تحصيل دفعة',
            date: '2024-06-02',
            debit: '0',
            credit: '3,500',
        },
        {
            id: '3',
            description: 'إيجار',
            date: '2024-06-03',
            debit: '2,000',
            credit: '0',
        },
        {
            id: '4',
            description: 'إيداع رأس مال',
            date: '2024-06-04',
            debit: '0',
            credit: '10,000',
        },
    ];

    return (
        <Container>
            <div className="bg-white p-7">
                <h2 className="text-xl font-bold">{t('registration_bonds')}</h2>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            {t('search_by_bond_name')}
                        </label>
                        <input type="text" className="w-full border rounded p-2" />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            {t('filters.from_date')}
                        </label>
                        <input type="date" className="w-full border rounded p-2 outline-none" />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            {t('filters.to_date')}
                        </label>
                        <input type="date" className="w-full border rounded p-2" />
                    </div>
                </div>

                {/* الجدول */}
                <Table
                    columns={columns}
                    data={data.map(item => ({
                        ...item,
                        actions: (
                            <div className="flex gap-2 justify-center">
                                <ViewBondButton bondData={item} />
                                <EditBondButton bondData={item} />
                            </div>
                        ),
                    }))}
                />
            </div>
        </Container>
    );
};

export default Page;
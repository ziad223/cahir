import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import AddPaymentMethodClientWrapper from './AddPaymentMethodClientWrapper';
import { getTranslations } from 'next-intl/server';

const Page = async () => {
    const t = await getTranslations('payment_methods');

    const columns: Column[] = [
        { label: '#', key: 'service_number' },
        { label: t('name'), key: 'name' },
        { label: t('account'), key: 'account' },
        { label: t('active'), key: 'active' },
        { label: t('cash'), key: 'cash' }
    ];

    const generateData = () => {
        return Array.from({ length: 4 }, (_, i) => ({
            service_number: i + 1,
            name: `${t('method')} ${i + 1}`,
            account: i % 2 === 0 ? t('bank') : t('cashbox'),
            active: t('yes'),
            cash: i % 2 === 0 ? t('no') : t('yes'),
        }));
    };

    const data = generateData();

    return (
        <div className="w-[90%] lg:w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl mb-4">{t('title')}</h2>

            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <AddPaymentMethodClientWrapper />
                <div className="mt-5">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </div>
    );
};

export default Page;

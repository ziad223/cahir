import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { getTranslations } from 'next-intl/server';

const Page = async () => {
    const t = await getTranslations('forms');

    const columns: Column[] = [
        { label: '#', key: 'number' },
        { label: t('name'), key: 'name' },
        { label: t('operations'), key: 'operations' },
    ];

    const data = [
        {
            number: 1,
            name: t('behaviorAnalysis'),
            operations: t('editDelete'),
        },
        {
            number: 2,
            name: t('skillDevelopment'),
            operations: t('editDelete'),
        },
        {
            number: 3,
            name: t('speechTherapy'),
            operations: t('editDelete'),
        },
    ];

    return (
        <div className="w-[90%] lg:w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl">{t('title')}</h2>
            <p className="mt-5 bg-[#cff4fc] p-5 rounded-lg">
                {t('description')}
            </p>
            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <div className="mt-5">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </div>
    );
};

export default Page;

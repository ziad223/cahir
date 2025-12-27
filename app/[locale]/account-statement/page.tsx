import React from 'react';
import Container from '@/components/shared/formcomponents/Container';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { getTranslations } from 'next-intl/server';

const Page = async () => {
    const t = await getTranslations('accounting');

    const columns: Column[] = [
        { label: t('table.columns.date'), key: 'date' },
        { label: t('table.columns.account'), key: 'account' },
        { label: t('table.columns.cost_center'), key: 'cost_center' },
        { label: t('table.columns.description'), key: 'description' },
        { label: t('table.columns.debit'), key: 'debit' },
        { label: t('table.columns.credit'), key: 'credit' },
    ];

    const data: Record<string, React.ReactNode>[] = [
        {
            date: '2024-06-01',
            account: 'الأصول',
            cost_center: 'فرع القاهرة',
            description: 'شراء معدات',
            debit: '5,000',
            credit: '0',
        },
        {
            date: '2024-06-02',
            account: 'الإيرادات',
            cost_center: 'فرع الإسكندرية',
            description: 'تحصيل دفعة',
            debit: '0',
            credit: '3,500',
        },
        {
            date: '2024-06-03',
            account: 'المصروفات',
            cost_center: 'فرع الجيزة',
            description: 'إيجار',
            debit: '2,000',
            credit: '0',
        },
        {
            date: '2024-06-04',
            account: 'رأس المال',
            cost_center: 'فرع القاهرة',
            description: 'إيداع رأس مال',
            debit: '0',
            credit: '10,000',
        },
        {
            date: '2024-06-05',
            account: 'المشتريات',
            cost_center: 'فرع الدقي',
            description: 'شراء مستلزمات',
            debit: '1,200',
            credit: '0',
        },
        {
            date: '2024-06-06',
            account: 'الخصوم',
            cost_center: 'فرع المعادي',
            description: 'سداد قرض',
            debit: '0',
            credit: '4,000',
        },
        {
            date: '2024-06-07',
            account: 'الإيرادات',
            cost_center: 'فرع أكتوبر',
            description: 'تحصيل دفعة',
            debit: '0',
            credit: '2,500',
        },
        {
            date: '2024-06-08',
            account: 'المصروفات',
            cost_center: 'فرع الزقازيق',
            description: 'فواتير كهرباء',
            debit: '900',
            credit: '0',
        },
    ];

    return (
        <Container>
            <div className="bg-white p-7">
                <h2 className="text-xl font-bold">{t('account_statement')}</h2>

                {/* الفلاتر */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            {t('filters.account_type')}
                        </label>
                        <select className="w-full border rounded p-2">
                            <option value="">{t('filters.select_account_type')}</option>
                            <option value="assets">{t('account_types.assets')}</option>
                            <option value="liabilities">{t('account_types.liabilities')}</option>
                            <option value="capital">{t('account_types.capital')}</option>
                            <option value="expenses">{t('account_types.expenses')}</option>
                            <option value="revenues">{t('account_types.revenues')}</option>
                            <option value="purchases">{t('account_types.purchases')}</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            {t('filters.from_date')}
                        </label>
                        <input type="date" className="w-full border rounded p-2" />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            {t('filters.to_date')}
                        </label>
                        <input type="date" className="w-full border rounded p-2" />
                    </div>
                </div>

                {/* الجدول */}
                <Table columns={columns} data={data} />
            </div>
        </Container>
    );
};

export default Page;
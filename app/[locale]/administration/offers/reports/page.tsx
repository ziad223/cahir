import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaAngleRight, FaEye, FaPrint, FaFileExcel } from 'react-icons/fa';
import { getTranslations } from 'next-intl/server';

interface LayoutProps {
  params: Promise<{ locale: string | any }>;
}

const Page = async ({ params }: LayoutProps) => {
  const t = await getTranslations('offers');
  const { locale } = await params;

  const columns: Column[] = [
    { label: t('cash'), key: 'cash' },
    { label: t('card'), key: 'card' },
    { label: t('paid'), key: 'paid' },
    { label: t('unpaid'), key: 'unpaid' },
    { label: t('withoutTax'), key: 'withoutTax' },
    { label: t('totalWithTax'), key: 'totalWithTax' },
    { label: t('tax'), key: 'tax' },
  ];

  const data = [
    {
      cash: '1000',
      card: '2000',
      paid: '1500',
      unpaid: '500',
      withoutTax: '3000',
      totalWithTax: '3450',
      tax: '450',
    },
  ];

  return (
    <section className="pt-5">
      <div className="container mx-auto px-4">
        {/* العودة للقائمة */}
        <div className="flex mb-3">
          <a
            href={`/${locale}/administration/offers`}
            className="bg-[#007bff] text-white flex items-center justify-center w-[40px] h-[40px] rounded"
          >
            <FaAngleRight />
          </a>
        </div>

        {/* العنوان */}
        <h4 className="text-2xl font-bold mb-4">{t('financialReportTitle')}</h4>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex flex-wrap sm:flex-nowrap items-start justify-between mb-3 gap-3">

            {/* الفورم */}
            <form className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 w-full sm:w-auto">
              <div className="flex items-center justify-center gap-2">
                <label htmlFor="date-from" className="text-sm">{t('from')}</label>
                <input
                  type="date"
                  id="date-from"
                  className="border border-gray-300 rounded p-2 text-sm w-[160px]"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <label htmlFor="date-to" className="text-sm">{t('to')}</label>
                <input
                  type="date"
                  id="date-to"
                  className="border border-gray-300 rounded p-2 text-sm w-[160px]"
                />
              </div>
              <button
                type="button"
                className="bg-[#198754] text-white flex items-center justify-center gap-1 rounded w-32 py-2 text-sm hover:bg-green-700 transition"
              >
                <span>{t('show')}</span>
                <FaEye />
              </button>
            </form>

            {/* الأزرار الجانبية */}
            <div className="flex justify-center sm:justify-start gap-2 w-full sm:w-auto">
              <button
                type="button"
                className="flex items-center gap-1 border border-yellow-500 text-yellow-500 rounded px-3 py-2 text-sm hover:bg-yellow-50"
              >
                <FaPrint />
                <span>{t('print')}</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1 border border-sky-500 text-sky-500 rounded px-3 py-2 text-sm hover:bg-sky-50"
              >
                <FaFileExcel />
                <span>{t('exportExcel')}</span>
              </button>
            </div>
          </div>

          {/* الجدول */}
          <Table columns={columns} data={data} />
        </div>
      </div>
    </section>
  );
};

export default Page;

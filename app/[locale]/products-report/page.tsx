
import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { FaAngleRight, FaPrint } from 'react-icons/fa';
import { FaFileExcel } from 'react-icons/fa6';
import Link from 'next/link';
import Container from '@/components/shared/formcomponents/Container';
import { getTranslations } from 'next-intl/server';

interface LayoutProps {
  params: Promise<{ locale: string | any }>; 
}

const FinancialReport = async ({ params }: LayoutProps) => {
  const t = await getTranslations('managment');
    const { locale } = await params;
  
  const columns: Column[] = [
    { label: t('cash'), key: 'cash' },
    { label: t('card'), key: 'card' },
    { label: t('paid'), key: 'paid' },
    { label: t('unpaid'), key: 'unpaid' },
    { label: t('without_tax'), key: 'amount' },
    { label: t('total_with_tax'), key: 'total' },
    { label: t('tax'), key: 'tax' },
  ];

  const data = [
    {
      cash: 1500,
      card: 2000,
      paid: 3000,
      unpaid: 500,
      amount: 4000,
      total: 4400,
      tax: 400,
    },
  ];

  return (
   <Container>
     <section className="pt-5 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex mb-3">
            <Link href={`/${locale}/administration/transferred-patients`} className="btn bg-[#7451ab] text-white px-4 py-2 rounded flex items-center gap-1">
            <FaAngleRight />
          </Link>
        </div>

        <h4 className="text-lg font-bold text-gray-800 mb-4">{t('products_financial_report')}</h4>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="bg-[#7451ab] text-white px-3 py-2 rounded text-sm">
              {t('product')}: Test Product
            </div>
            <div className="bg-[#7451ab] text-white px-3 py-2 rounded text-sm">
              {t('number_of_invoices')}: 5
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
            <div className="flex flex-wrap md:flex-nowrap gap-2 items-center">
              <div className="flex items-center gap-1">
                <label htmlFor="date-from" className="text-sm font-medium">{t('from')}</label>
                <input type="date" id="date-from" className="form-input border rounded px-2 py-1 text-sm" />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="date-to" className="text-sm font-medium">{t('to')}</label>
                <input type="date" id="date-to" className="form-input border rounded px-2 py-1 text-sm" />
              </div>
            </div>
            <div className="flex gap-2 justify-center md:justify-start">
              <button className="btn btn-sm border border-yellow-500 text-yellow-600 hover:bg-yellow-400 hover:text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                <FaPrint /> <span>{t('print')}</span>
              </button>
              <button className="btn btn-sm border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                <FaFileExcel /> <span>{t('export_excel')}</span>
              </button>
            </div>
          </div>

          <Table columns={columns} data={data} />
        </div>
      </div>
    </section>
   </Container>
  );
};

export default FinancialReport;
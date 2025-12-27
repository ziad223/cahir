import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { getTranslations } from 'next-intl/server';
import AddServiceModal from './AddServiceModal';
import PrintButton from './PrintButton';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import EditServiceModal from './EditServiceModal';

interface LayoutProps {
  params: Promise<{ locale: string | any }>; 
}


const Page = async ({ params }: LayoutProps) => {
    const t = await getTranslations('managment');
  const { locale } = await params;

    const columns: Column[] = [
        { label: t('columns.serviceNumber'), key: 'service_number' },
        { label: t('columns.name'), key: 'name' },
        { label: t('columns.clinic'), key: 'clinic' },
        { label: t('columns.price'), key: 'price' },
        { label: t('columns.operations'), key: 'actions' },
    ];

    const data = [
        {
            service_number: 1,
            name: t('services.speechTherapy'),
            clinic: t('clinics.smile'),
            price: t('prices.egp200'),
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <Link href={`/${locale}/products-report`} className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                        {t('actions.financialReport')}
                    </Link>
                    <EditServiceModal
                      service={{
                        service_number: 1,
                        name: t('services.speechTherapy'),
                        clinic: t('clinics.smile'),
                        price: t('prices.egp200'),
                      }}
                    />
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title={t('actions.delete')} />
                    </div>
                </div>
            ),
        },
        {
            service_number: 2,
            name: t('services.skillsDevelopment'),
            clinic: t('clinics.care'),
            price: t('prices.egp180'),
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                        {t('actions.financialReport')}
                    </button>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#7451ab] cursor-pointer">
                        <FaEdit className="text-white text-lg" title={t('actions.edit')} />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title={t('actions.delete')} />
                    </div>
                </div>
            ),
        },
        {
            service_number: 3,
            name: t('services.behaviorAnalysis'),
            clinic: t('clinics.future'),
            price: t('prices.egp250'),
            actions: (
                <div className="flex items-center justify-center gap-3">
                    <button className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                        {t('actions.financialReport')}
                    </button>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#7451ab] cursor-pointer">
                        <FaEdit className="text-white text-lg" title={t('actions.edit')} />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                        <FaTrash className="text-white text-sm" title={t('actions.delete')} />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-[90%] lg:w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl">{t('title')}</h2>
            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4">
                    <select className="w-full md:w-[252px] px-2 rounded-[5px] h-[40px] border outline-none">
                        <option>{t('filters.clinic')}</option>
                        <option>{t('filters.behaviorAnalysis')}</option>
                        <option>{t('filters.caseStudy')}</option>
                        <option>{t('filters.speechTherapy')}</option>
                        <option>{t('filters.skillsDevelopment')}</option>
                        <option>{t('filters.evaluationClinics')}</option>
                    </select>
                    <div className="flex items-center gap-2">
                        <AddServiceModal />
                        <PrintButton />
                    </div>
                </div>

                <div className="mt-5 print:p-0">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </div>
    );
};

export default Page;

import React from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { getTranslations } from 'next-intl/server';
import AddPlanModal from './AddPlanModal';
import PaginationControls from './PaginationControls';
import PlanActions from './PlanActions';

interface LayoutProps {
  params: Promise<{ locale: string | any }>; 
}


const Page = async ({
  searchParams,
  params,
}: {
  searchParams?: { page?: string };
  params: { locale: string };
}) =>{
    const t = await getTranslations('treatmentPlans');
    const currentPage = Number(searchParams?.page || 1);
    const itemsPerPage = 10;
      const { locale } = await params;


    const columns: Column[] = [
        { label: '#', key: 'service_number' },
        { label: t('columns.planName'), key: 'name' },
        { label: t('columns.duration'), key: 'duration' },
        { label: t('columns.sessionsPerDay'), key: 'sessions_per_day' },
        { label: t('columns.totalSessions'), key: 'total_sessions' },
        { label: t('columns.price'), key: 'price' },
        { label: t('columns.clinic'), key: 'clinic' },
        { label: t('columns.subscribers'), key: 'subscribers' },
        { label: t('columns.actions'), key: 'actions' },
    ];

    const allData = Array.from({ length: 50 }, (_, i) => ({
        service_number: i + 1,
        name: `${t('data.plan')} ${i + 1}`,
        duration: 30 + (i % 5) * 10,
        sessions_per_day: 1 + (i % 3),
        total_sessions: 10 + i,
        price: `${100 + i * 5} ${t('common.egp')}`,
        clinic: `${t('clinics.prefix')} ${i % 4 === 0 ? t('clinics.hope') : i % 4 === 1 ? t('clinics.joy') : i % 4 === 2 ? t('clinics.happiness') : t('clinics.future')}`,
        subscribers: Math.floor(Math.random() * 100),
        actions: <PlanActions row={{
  service_number: i + 1,
  name: `${t('data.plan')} ${i + 1}`,
  duration: 30 + (i % 5) * 10,
  sessions_per_day: 1 + (i % 3),
  total_sessions: 10 + i,
  price: `${100 + i * 5} ${t('common.egp')}`,
  clinic: `${t('clinics.prefix')} ي`,
  subscribers: Math.floor(Math.random() * 100),
}} locale={locale} />
    }));

    const totalPages = Math.ceil(allData.length / itemsPerPage);
    const paginatedData = allData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                        <AddPlanModal />
                    </div>
                </div>

                <div className="mt-5">
                    <Table columns={columns} data={paginatedData} />
                </div>

                <div className="mt-6">
                    <PaginationControls totalPages={totalPages} currentPage={currentPage} basePath="/treatment-plans" />
                </div>
            </div>
        </div>
    );
};

export default Page;
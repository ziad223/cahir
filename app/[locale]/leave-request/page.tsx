import Table, { Column } from '@/components/shared/reusableComponents/Table';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import AddLeaveModal from './AddLeaveModal';

interface LayoutProps {
  params: Promise<{ locale: string | any }>;
}

const Page = async ({ params }: LayoutProps) => {
  const t = await getTranslations('leaveRequests');
  const { locale } = await params;

  const columns: Column[] = [
    { label: t('columns.requestNumber'), key: 'id' },
    { label: t('columns.from'), key: 'from' },
    { label: t('columns.to'), key: 'to' },
    { label: t('columns.reason'), key: 'reason' },
    { label: t('columns.status'), key: 'status' },
    { label: t('columns.rejectionReason'), key: 'rejectionReason' },
    { label: t('columns.attachment'), key: 'attachment' },
    { label: t('columns.createdAt'), key: 'createdAt' },
  ];

  const data = [
    {
      id: 1,
      from: t('sampleData.user1'),
      to: t('sampleData.shift1'),
      reason: t('sampleData.reason1'),
      status: t('statuses.pending'),
      rejectionReason: '',
      attachment: t('sampleData.attachment'),
      createdAt: '2024-06-28',
    },
  ];

  return (
    <div className="w-[90%] mx-auto mt-10">
      <h2 className="font-bold text-xl mb-5">{t('leaveRequestsTitle')}</h2>
      <div className="bg-white rounded-[10px] p-5">
        <AddLeaveModal />
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Page;

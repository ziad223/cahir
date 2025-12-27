import Container from '@/components/shared/formcomponents/Container';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import AddCostCenterButton from './AddCostCenterButton';
import React from 'react';
import { getTranslations } from 'next-intl/server';

const Page = async () => {
  const t = await getTranslations('accounting');

  const columns: Column[] = [
    { label: '#', key: 'id' },
    { label: t('name'), key: 'name' },
    { label: t('createdAt'), key: 'createdAt' },
    { label: t('subCenters'), key: 'subCenters' },
    { label: t('actions'), key: 'actions' },
  ];

  const data = [
    {
      id: 1,
      name: 'مركز تكلفة 1',
      createdAt: '2024-06-01',
      subCenters: '3',
      actions: <button className="text-blue-500 hover:underline">{t('view')}</button>,
    },
    {
      id: 2,
      name: 'مركز تكلفة 2',
      createdAt: '2024-06-15',
      subCenters: '5',
      actions: <button className="text-blue-500 hover:underline">{t('view')}</button>,
    },
  ];

  return (
    <Container>
      <div>
        <h2 className="mb-5 text-xl font-bold">{t('titlee')}</h2>
        <div className="bg-white p-10 rounded-[10px] space-y-5">
          <AddCostCenterButton />
          <Table columns={columns} data={data} />
        </div>
      </div>
    </Container>
  );
};

export default Page;

'use client';
import React, { useState } from 'react';
import Table, { Column } from '@/components/shared/reusableComponents/Table';
import OffersActions from './OffersActions';
import AddOfferModal from './AddOfferModal';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useTranslations , useLocale } from 'next-intl';
import  Link  from 'next/link';

const Page = () => {
    const t = useTranslations('offers');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState<any>(null);
    const locale = useLocale();

    const handleEdit = (offer: any) => {
        setSelectedOffer(offer);
        setIsModalOpen(true);
    };

    const columns: Column[] = [
        { label: '#', key: 'service_number' },
        { label: t('columns.productName'), key: 'name' },
        { label: t('columns.start'), key: 'clinic' },
        { label: t('columns.end'), key: 'price' },
        { label: t('columns.status'), key: 'status' },
        { label: t('columns.rate'), key: 'rate' },
        { label: t('columns.discountRatio'), key: 'discount_ratio' },
        { label: t('columns.actions'), key: 'actions' },
    ];

    const offers = [
        {
            service_number: 1,
            name: t('services.speechTherapy'),
            clinic: t('clinics.smile'),
            price: `200 ${t('common.egp')}`,
            status: t('status.active'),
            rate: '4.5',
            discount_ratio: '10%',
        },
        {
            service_number: 2,
            name: t('services.skillsDevelopment'),
            clinic: t('clinics.care'),
            price: `180 ${t('common.egp')}`,
            status: t('status.inactive'),
            rate: '4.2',
            discount_ratio: '5%',
        },
        {
            service_number: 3,
            name: t('services.behaviorAnalysis'),
            clinic: t('clinics.future'),
            price: `250 ${t('common.egp')}`,
            status: t('status.active'),
            rate: '4.8',
            discount_ratio: '15%',
        },
    ];
    
    const data = offers.map((offer) => ({
        ...offer,
        actions: (
            <div className="flex items-center justify-center gap-3">
                <Link href={`/${locale}/administration/offers/reports`} className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700">
                    {t('actions.financialReport')}
                </Link>
                <div
                    onClick={() => handleEdit(offer)}
                    className="w-[30px] h-[30px] flex items-center justify-center rounded bg-[#7451ab] cursor-pointer"
                >
                    <FaEdit className="text-white text-lg" title={t('actions.edit')} />
                </div>
                <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
                    <FaTrash className="text-white text-sm" title={t('actions.delete')} />
                </div>
            </div>
        ),
    }));

    return (
        <div className="w-[90%] lg:w-[75%] mx-auto mt-10">
            <h2 className="font-bold text-xl">{t('title')}</h2>
            <div className="bg-white rounded-[10px] mt-5 p-10 shadow">
                <OffersActions onAdd={() => {
                    setSelectedOffer(null);
                    setIsModalOpen(true);
                }} />
                <div className="mt-5">
                    <Table columns={columns} data={data} />
                </div>
            </div>
            <AddOfferModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Page;

'use client';

import React, { useState } from 'react';
import { FaPlus, FaPrint } from 'react-icons/fa';
import AddOfferModal from './AddOfferModal';
import { useTranslations } from 'next-intl';

const OffersActions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations('offers');

    return (
        <>
            <div className="flex items-center justify-between w-full gap-2">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-[#198754] text-white py-2 px-5 h-[40px] rounded-[10px]"
                >
                    <span>{t('actions.addOffer')}</span>
                    <FaPlus />
                </button>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-[#ffc107] text-white py-2 px-2 h-[40px] rounded-[10px]"
                >
                    <FaPrint title={t('actions.print')} />
                </button>
            </div>

            <AddOfferModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default OffersActions;

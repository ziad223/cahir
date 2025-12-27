'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import AddPaymentMethodModal from './AddPaymentMethodModal';
import { useTranslations } from 'next-intl';

const AddPaymentMethodClientWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('payment_methods');

    return (
        <>
            <div className="flex justify-end">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 bg-[#7451ab] text-white py-2 px-5 h-[40px] rounded-[10px]"
                >
                    <span>{t('add')}</span>
                    <FaPlus />
                </button>
            </div>
            <AddPaymentMethodModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default AddPaymentMethodClientWrapper;

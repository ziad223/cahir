'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const AddOfferModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const t = useTranslations('offers');
    const [hasDiscount, setHasDiscount] = useState('لا');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                >
                    <FaTimes />
                </button>
                <h3 className="text-lg font-bold mb-4">{t('actions.addOffer')}</h3>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">{t('columns.productName')}</label>
                        <input className="border w-full p-2 rounded outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">{t('form.startDate')}</label>
                        <input type="date" className="border w-full p-2 rounded outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">{t('form.endDate')}</label>
                        <input type="date" className="border w-full p-2 rounded outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">{t('form.service')}</label>
                        <select className="border w-full p-2 rounded outline-none">
                            <option value="">{t('form.selectService')}</option>
                            <option value="service1">{t('form.service1')}</option>
                            <option value="service2">{t('form.service2')}</option>
                            <option value="service3">{t('form.service3')}</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">{t('form.hasDiscount')}</label>
                        <select
                            className="border w-full p-2 rounded outline-none"
                            value={hasDiscount}
                            onChange={(e) => setHasDiscount(e.target.value)}
                        >
                            <option value="لا">{t('form.no')}</option>
                            <option value="نعم">{t('form.yes')}</option>
                        </select>
                    </div>

                    {hasDiscount === 'نعم' && (
                        <div>
                            <label className="block text-sm font-medium mb-1">{t('form.discountValue')}</label>
                            <input
                                type="text"
                                className="border w-full p-2 rounded outline-none"
                                placeholder={t('form.discountExample')}
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        {t('actions.save')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddOfferModal;

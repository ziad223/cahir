'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const AddServiceModal = () => {
    const t = useTranslations('managment');
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Service submitted');
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="flex items-center gap-2 bg-[#7451ab] text-white py-2 px-5 h-[40px] rounded-[10px]"
            >
                <span>{t('actions.addService')}</span>
                <FaPlus />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative">
                        <h3 className="text-xl font-bold mb-4">{t('modal.addTitle')}</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder={t('form.serviceName')}
                                className="border rounded px-4 py-2"
                                required
                            />
                            <input
                                type="number"
                                placeholder={t('form.price')}
                                className="border rounded px-4 py-2"
                                required
                            />
                            <select className="border rounded px-4 py-2" required>
                                <option value="">{t('form.selectClinic')}</option>
                                <option>{t('clinics.smile')}</option>
                                <option>{t('clinics.care')}</option>
                                <option>{t('clinics.future')}</option>
                            </select>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                                >
                                    {t('actions.cancel')}
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded bg-[#7451ab] text-white hover:bg-[#0babc4]"
                                >
                                    {t('actions.save')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddServiceModal;

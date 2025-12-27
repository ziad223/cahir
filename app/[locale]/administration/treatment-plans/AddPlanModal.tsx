'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaPlus } from 'react-icons/fa';

const AddPlanModal = () => {
    const t = useTranslations('treatmentPlans');
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Plan submitted');
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="flex items-center gap-2 bg-[#7451ab] text-white py-2 px-5 h-[40px] rounded-[10px]"
            >
                <span>{t('actions.addPlan')}</span>
                <FaPlus />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative">
                        <h3 className="text-xl font-bold mb-4">{t('modal.addTitle')}</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder={t('form.planName')}
                                className="border rounded px-4 py-2 outline-none"
                                required
                            />
                            <input
                                type="number"
                                placeholder={t('form.duration')}
                                className="border rounded px-4 py-2 outline-none"
                                required
                            />
                            <input
                                type="number"
                                placeholder={t('form.sessionsPerDay')}
                                className="border rounded px-4 py-2 outline-none"
                                required
                            />
                            <input
                                type="number"
                                placeholder={t('form.totalSessions')}
                                className="border rounded px-4 py-2 outline-none"
                                required
                            />
                            <input
                                type="number"
                                placeholder={t('form.price')}
                                className="border rounded px-4 py-2 outline-none"
                                required
                            />
                            <select className="border rounded px-4 py-2 outline-none" required>
                                <option value="">{t('form.selectClinic')}</option>
                                <option>{t('clinics.hope')}</option>
                                <option>{t('clinics.joy')}</option>
                                <option>{t('clinics.happiness')}</option>
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

export default AddPlanModal;

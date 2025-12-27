'use client';
import { useTranslations } from 'next-intl';
import React from 'react';

const Page = () => {
    const t = useTranslations('patients');

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-center text-[#7451ab] mb-6">
                {t('formTitle')}
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t('name')}</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t('phone')}</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t('nationality')}</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t('gender')}</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t('age')}</label>
                    <input
                        type="number"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t('civilNumber')}</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t('paidBills')}</label>
                    <input
                        type="text"
                        className="w-full border border-green-300 rounded-md outline-none text-black px-4 py-2 bg-green-50"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t('unpaidBills')}</label>
                    <input
                        type="text"
                        className="w-full border border-red-300 rounded-md outline-none text-black px-4 py-2 bg-red-50"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">{t('lastVisit')}</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md outline-none text-black px-4 py-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1 opacity-0">{t('lastVisit')}</label>
                    <button
                        className="bg-[#7451ab] text-white px-6 py-2 rounded-md hover:bg-blue-400 w-full"
                    >
                        {t('addPatient')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;

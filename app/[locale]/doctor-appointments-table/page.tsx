import { getTranslations } from 'next-intl/server';
import React from 'react';

const Page = async () => {
    const t = await getTranslations('appointments');

    return (
        <div className="w-full max-w-[90%] mx-auto px-4 sm:px-6 lg:px-0">
            <h2 className="text-xl font-bold mt-5">{t('specialistSchedule')}</h2>

            <div className="bg-white rounded-[10px] p-5 sm:p-8 md:p-10 mt-5">
                <div className="bg-[#cff4fc] rounded-[10px] p-4 sm:p-5">
                    <h3>{t('dateRangeNote')}</h3>
                </div>

                <div className="bg-[#cff4fc] rounded-[10px] p-4 sm:p-5 mt-8">
                    <h3>{t('specialistNote')}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    {/* من تاريخ */}
                    <div className="flex flex-col">
                        <label htmlFor="fromDate" className="mb-1 text-sm font-medium text-gray-700">
                            {t('fromDate')}
                        </label>
                        <input
                            type="date"
                            id="fromDate"
                            name="fromDate"
                            className="border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    {/* إلى تاريخ */}
                    <div className="flex flex-col">
                        <label htmlFor="toDate" className="mb-1 text-sm font-medium text-gray-700">
                            {t('toDate')}
                        </label>
                        <input
                            type="date"
                            id="toDate"
                            name="toDate"
                            className="border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    {/* العيادة */}
                    <div className="flex flex-col">
                        <label htmlFor="clinic" className="mb-1 text-sm font-medium text-gray-700">
                            {t('clinic')}
                        </label>
                        <select
                            id="clinic"
                            name="clinic"
                            className="border border-gray-300 rounded px-3 py-2"
                        >
                            <option value="">{t('selectClinic')}</option>
                            <option value="clinic1">{t('clinic1')}</option>
                            <option value="clinic2">{t('clinic2')}</option>
                        </select>
                    </div>

                    {/* الأخصائي */}
                    <div className="flex flex-col">
                        <label htmlFor="specialist" className="mb-1 text-sm font-medium text-gray-700">
                            {t('specialist')}
                        </label>
                        <select
                            id="specialist"
                            name="specialist"
                            className="border border-gray-300 rounded px-3 py-2"
                        >
                            <option value="">{t('selectSpecialist')}</option>
                            <option value="specialist1">{t('specialist1')}</option>
                            <option value="specialist2">{t('specialist2')}</option>
                        </select>
                    </div>
                </div>

                <div className="bg-[#fff3cd] rounded-[10px] p-4 sm:p-5 mt-10">
                    <h3>
                        <span className="font-extrabold">{t('warning')}:</span> {t('fillAllFields')}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Page;

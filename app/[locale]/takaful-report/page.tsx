import React from 'react';
import Container from '@/components/shared/formcomponents/Container';
import { getTranslations } from 'next-intl/server';

const Page = async () => {
    const t = await getTranslations('accounting');

    return (
        <Container>
            <div>
                <h2 className="font-bold text-2xl">{t('takaful')}</h2>
                <div className="mt-5 p-10 bg-white rounded-[10px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700" htmlFor="fromDate">{t('from')}</label>
                            <input
                                type="date"
                                id="fromDate"
                                name="fromDate"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700" htmlFor="toDate">{t('to')}</label>
                            <input
                                type="date"
                                id="toDate"
                                name="toDate"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Page;

import React from 'react';
import Container from '@/components/shared/formcomponents/Container';
import { getTranslations } from 'next-intl/server';
const Page = async () => {
    const t = await getTranslations('accounting');

    return (
        <Container>
            <div>
           
                <h2 className="font-bold text-2xl">{t('header')}</h2>
                <div className="mt-5 bg-white rounded-[10px]">
                    <div className="text-white p-10 text-2xl  bg-[#0d6efd]">{t('sectionTitle')}</div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
                        {/* التاريخ */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700" htmlFor="date">{t('date')}</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* الحساب المصروف إليه */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700" htmlFor="account">{t('accountLabel')}</label>
                            <select
                                id="account"
                                name="account"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">{t('accountPlaceholder')}</option>
                                <option value="salary">{t('accountSalary')}</option>
                                <option value="rent">{t('accountRent')}</option>
                                <option value="services">{t('accountServices')}</option>
                            </select>
                        </div>

                        {/* المبلغ */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700" htmlFor="amount">{t('amount')}</label>
                            <input
                                type="text"
                                id="amount"
                                name="amount"
                                placeholder="0.00"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* طريقة الصرف */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700" htmlFor="paymentMethod">{t('paymentMethod')}</label>
                            <select
                                id="paymentMethod"
                                name="paymentMethod"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">{t('paymentMethodPlaceholder')}</option>
                                <option value="cash">{t('methodCash')}</option>
                                <option value="bank">{t('methodBank')}</option>
                                <option value="card">{t('methodCard')}</option>
                            </select>
                        </div>
                    </div>

                    {/* الوصف */}
                    <div className="p-5">
                        <label className="block mb-1 font-medium text-gray-700" htmlFor="message">{t('description')}</label>
                        <input
                            type="textarea"
                            id="message"
                            name="message"
                            className="w-full border border-gray-300 h-[109px] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* زر الحفظ */}
                    <button className="mx-auto bg-blue-600 p-3 rounded-[10px] w-1/2 cursor-pointer border-none flex items-center justify-center text-white">
                        {t('save')}
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Page;

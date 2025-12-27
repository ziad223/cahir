import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { getTranslations } from 'next-intl/server';

const page = async () => {
    const t = await getTranslations('patients');

    return (
        <div className='w-[90%] mx-auto mt-20'>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-0">
                <h2 className="text-base sm:text-xl font-semibold">{t('sessionDates')}</h2>
                <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto'>
                    <div className='flex items-center justify-center gap-1 w-full sm:w-[100px] bg-transparent border border-blue-700 text-blue-700 hover:bg-blue-700 cursor-pointer hover:text-white transition duration-300 h-[40px] rounded-[10px]'>
                        <FaFilter />
                        <span className='text-sm'>{t('filters')}</span>
                    </div>
                    <div className='flex items-center justify-center gap-1 w-full sm:w-[100px] bg-transparent border border-[#ffc107] text-[#ffc107] hover:bg-[#ffc107] cursor-pointer hover:text-white transition duration-300 h-[40px] rounded-[10px]'>
                        <FaFilter />
                        <span className='text-sm'>{t('print')}</span>
                    </div>
                    <div className='flex items-center justify-center gap-1 w-full sm:w-[100px] bg-transparent border border-[#6c757d] text-[#6c757d] hover:bg-[#6c757d] cursor-pointer hover:text-white transition duration-300 h-[40px] rounded-[10px]'>
                        <span className='flex items-center gap-1 text-sm'>{t('back')} <ChevronLeft /></span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mt-4'>
                <h2 className='bg-blue-600 text-white px-3 py-2 rounded-[5px] text-sm sm:text-base'>
                    {t('scheduleSubscription', { number: 8, name: 'طارق الملا' })}
                </h2>
                <h2 className='bg-yellow-500 text-white px-3 py-2 rounded-[5px] text-sm sm:text-base'>
                    {t('remainingAppointments', { count: 21 })}
                </h2>
            </div>

            <div className="bg-white mt-3 p-3 rounded-[5px]">
                <h3 className='bg-[#cff4fc] rounded-[5px] p-3 text-gray-600 text-sm sm:text-lg'>
                    {t('searchInfo')}
                </h3>

                <h3 className='bg-[#fff3cd] text-[#664d03] rounded-[5px] p-3 text-sm sm:text-lg mt-5'>
                    {t('subscriptionInfo', {
                        type: 'تحليل سلوك تطبيقي',
                        start: '2025-06-05',
                        end: '2025-06-12',
                    })}
                </h3>

                <div className='mt-5 p-3 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-5'>
                    <div className='flex flex-col w-full sm:w-auto'>
                        <label className='text-sm'>{t('period')}</label>
                        <select className='border border-gray-200 p-2 outline-none w-full sm:w-[300px] text-sm'>
                            <option hidden>{t('choosePeriod')}</option>
                            <option>{t('morning')}</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full sm:w-auto'>
                        <label className='text-sm'>{t('startDate')}</label>
                        <input className='border border-gray-200 p-2 outline-none text-sm' disabled value='06/05/2025' />
                    </div>
                    <div className='flex flex-col w-full sm:w-auto'>
                        <label className='text-sm'>{t('endDate')}</label>
                        <input className='border border-gray-200 p-2 outline-none text-sm' disabled value='06/12/2025' />
                    </div>
                </div>

                <h3 className='bg-[#fff3cd] text-[#664d03] rounded-[5px] p-3 text-sm sm:text-lg mt-5'>
                    {t('choosePeriodNotice')}
                </h3>
            </div>
        </div>
    );
}

export default page;

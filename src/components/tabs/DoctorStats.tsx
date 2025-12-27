'use client';

import { useTranslations } from 'next-intl';

const DoctorStats = () => {
    const t = useTranslations('home');

    return (
        <div className="mt-5">
            <h2 className="text-gray-600 font-bold">{t('doctorStats')}</h2>

            <div className="mt-5 flex flex-col sm:flex-row items-center gap-5">
                <input
                    type="date"
                    className="bg-white border border-gray-300 h-[40px] px-5 rounded-[5px] outline-none w-full sm:w-auto"
                />
                <input
                    type="date"
                    className="bg-white border border-gray-300 h-[40px] px-5 rounded-[5px] outline-none w-full sm:w-auto"
                />
            </div>

            <div className="mt-10 flex flex-col lg:flex-row items-center gap-5">
                <DoctorCard title="دكتور 1" t={t} />
                <DoctorCard title="نورة الخاطر" t={t} />
            </div>
        </div>
    );
};

const DoctorCard = ({ title, t }: { title: string; t: any }) => {
    return (
        <div className="w-full lg:w-[400px]">
            <div className="h-[30px] bg-[#7451ab] flex items-center justify-center text-white text-center">
                {title}
            </div>
            <div className="shadow-xl p-10 bg-white">
                <h2 className="text-center text-[#dc3545]">{t('section')} :</h2>
                <div className="flex flex-col sm:flex-row justify-around mt-5 gap-2">
                    <h3 className="font-bold text-[#0d6efd]">
                        {t('todayAppointments')} : <span className="text-black">0</span>
                    </h3>
                    <h3 className="font-bold text-[#ffaf10]">
                        {t('waitingRoom')} : <span className="text-black">0</span>
                    </h3>
                </div>
                <div className="flex flex-col sm:flex-row justify-around mt-3 gap-2">
                    <h3 className="font-bold text-black">
                        {t('followUpAppointments')} : <span className="text-black">0</span>
                    </h3>
                    <h3 className="font-bold text-[#dc3545]">
                        {t('consulted')} : <span className="text-black">0</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default DoctorStats;

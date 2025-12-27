'use client';
import { useTranslations } from 'next-intl';
import React from 'react';

interface ModalComponentProps {
    onClose: () => void;
}

const TransferModal: React.FC<ModalComponentProps> = ({ onClose }) => {
    const  t  = useTranslations('patients');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
            <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg lg:max-w-[50%] relative">

                <h2 className="lg:text-xl font-bold mb-4 text-left">
                    {t('transferTitle')} طارق الملا {t('toDoctor')}
                </h2>
                <hr />
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-10 my-5">
                    <p className="text-sm">
                        {t('date')} : <span className="text-[#27b7d4]">2025-06-09</span>
                    </p>
                    <p className="text-sm">
                        {t('day')} : <span className="text-[#27b7d4]">Mon</span>
                    </p>
                    <p className="text-sm">
                        {t('hour')} : <span className="text-[#27b7d4]">14:48</span>
                    </p>
                </div>
                <hr />
                <div className=" bg-[#fff3cd] mt-5">
                    <h3 className="text-[#956c09] text-left text-sm lg:w-[70%] p-2">
                        {t('transferNote')}
                        <span className='block lg:inline-block'>{t('workSessionNote')}</span>
                    </h3>
                </div>
                <div className="my-5 flex flex-col sm:flex-row sm:items-center sm:gap-5">
                    <div className="flex flex-col items-start gap-1 w-full sm:w-[30%]">
                        <label>{t('clinic')}</label>
                        <select className="h-[40px] px-2 outline-none w-full rounded-[5px] bg-[#efefef]">
                            <option value="#">{t('clinic')}</option>
                            <option value="#">تحليل سلوك تطبيقي</option>
                            <option value="#">دراسة الحالة</option>
                            <option value="#">تخاطب</option>
                            <option value="#">تنمية مهارات</option>
                            <option value="#">عيادة التقييم</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full sm:w-[30%] mt-3 sm:mt-0">
                        <label>{t('doctor')}</label>
                        <select className="h-[40px] px-2 outline-none w-full rounded-[5px] bg-[#efefef]">
                            <option value="#">{t('doctor')}</option>
                            <option value="#">تحليل سلوك تطبيقي</option>
                            <option value="#">دراسة الحالة</option>
                            <option value="#">تخاطب</option>
                            <option value="#">تنمية مهارات</option>
                            <option value="#">عيادة التقييم</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full sm:w-[30%] mt-3 sm:mt-0">
                        <label>{t('waitingNumber')}</label>
                        <input
                            className="h-[40px] px-2 outline-none w-full rounded-[5px] bg-[#efefef]"
                            type="text"
                            value="1"
                            disabled
                        />
                    </div>
                </div>
                <hr />
                <div className="mt-5 flex flex-col sm:flex-row justify-end gap-0 lg:gap-3">
                    <button onClick={onClose} className="cursor-pointer bg-[#dc3545] flex items-center justify-center py-5 px-7 h-[40px] text-white rounded-[10px] text-sm">
                        {t('back')}
                    </button>
                    <button className="cursor-pointer bg-[#7451ab] flex items-center justify-center py-5 lg:px-20 h-[40px] text-white rounded-[10px] text-sm mt-3 sm:mt-0">
                        {t('transfer')}
                    </button>
                </div>
            </div>
        </div>
    );
};


export default TransferModal;

'use client';

import Table from '@/components/shared/reusableComponents/Table';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

interface Service {
    id: number;
    name: string;
    description: string;
}

const services: Service[] = [
    {
        id: 1,
        name: 'خدمة استشارية',
        description: 'وصف الخدمة الأولى بشكل تفصيلي.',
    },
    {
        id: 2,
        name: 'تحليل بيانات',
        description: 'وصف الخدمة الثانية بالتفصيل.',
    },
];

const OurServicesPage = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations('services');

    const columns = [
        { label: '#', key: 'id' },
        { label: t('service'), key: 'name' },
        { label: t('service_description'), key: 'description' },
        { label: t('request_service'), key: 'action' },
    ];

    const openModal = (service: Service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    const tableData = services.map((service, index) => ({
        id: index + 1,
        name: service.name,
        description: (
            <button
                className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                onClick={() => openModal(service)}
            >
                <FaEye />
            </button>
        ),
        action: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+966506499275"
                className="bg-green-500 text-white px-3 py-1 rounded text-sm"
            >
                {t('request_service')}
            </a>
        ),
    }));

    return (
        <section className="py-8 px-4 md:px-8 bg-gray-50 min-h-screen ">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-bold text-gray-800">{t('services')}</h4>
                    <a
                        href="/"
                        className="bg-gray-800 text-white px-3 py-1 rounded text-sm"
                    >
                        {t('back')}
                    </a>
                </div>

                <div className="bg-blue-100 text-blue-800 p-3 rounded mb-4 text-sm">
                    {t('add_service_message')}{' '}
                    <a href="tel:0506499275" className="underline ms-1">
                        0506499275
                    </a>
                </div>

                <Table columns={columns} data={tableData} />

                <div className="mt-4 bg-blue-100 text-blue-800 p-3 rounded text-sm">
                    {t('know_all_programs')}{' '}
                    <a
                        href="https://www.const-tech.org/products"
                        target="_blank"
                        className="text-blue-600 underline ms-2"
                    >
                        {t('right_this_way')}
                    </a>
                </div>
            </div>

            {isModalOpen && selectedService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md  p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 left-2 text-red-500 font-bold text-sm"
                        >
                            {t('close')}
                        </button>
                        <div className="text-gray-800 whitespace-pre-wrap mt-4">
                            {selectedService.description}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default OurServicesPage;

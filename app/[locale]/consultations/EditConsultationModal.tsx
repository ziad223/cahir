'use client';

import React, { useState } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

interface EditConsultationModalProps {
    consultation: {
        id: string;
        name: string;
        phone: string;
        city: string;
        address: string;
        message: string;
    };
}

const EditConsultationModal: React.FC<EditConsultationModalProps> = ({ consultation }) => {
    const t = useTranslations('consultations');
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ ...consultation });

    const toggleModal = () => setIsOpen(!isOpen);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Edited data:', formData);
        toggleModal();
    };

    return (
        <>
            <button onClick={toggleModal} className="text-white text-lg p-1 rounded bg-[#7451ab]">
                <FaEdit />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md w-[90%] max-w-md relative">
                        <button
                            onClick={toggleModal}
                            className="absolute top-3 left-3 text-gray-600 hover:text-black"
                        >
                            <FaTimes />
                        </button>
                        <h2 className="text-lg font-bold mb-4 text-center">
                            {t('editTitle')}
                        </h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder={t('form.name')}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded px-3 py-2 outline-none"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder={t('form.phone')}
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded px-3 py-2 outline-none"
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder={t('form.city')}
                                value={formData.city}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-3 py-2 outline-none"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder={t('form.address')}
                                value={formData.address}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-3 py-2 outline-none"
                            />
                            <textarea
                                name="message"
                                placeholder={t('form.message')}
                                value={formData.message}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-3 py-2 outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-[#7451ab] text-white py-2 rounded hover:bg-[#079bb3]"
                            >
                                {t('form.save')}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditConsultationModal;

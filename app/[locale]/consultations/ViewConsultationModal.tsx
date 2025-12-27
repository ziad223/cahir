'use client';

import React, { useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';

interface Props {
    consultation: {
        id: string;
        name: string;
        phone: string;
        city: string;
        address: string;
        message: string;
        status: string;
    };
}

const ViewConsultationModal: React.FC<Props> = ({ consultation }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="text-white text-lg p-1 rounded bg-[#8e44ad]"
                onClick={() => setIsOpen(true)}
            >
                <FaEye />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md w-[90%] max-w-[600PX] relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 left-3 text-gray-600 hover:text-black"
                        >
                            <FaTimes />
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-center">عرض بيانات الاستشارة</h2>
                        <div className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 ">
                            <p><strong>الاسم:</strong> {consultation.name}</p>
                            <p><strong>رقم الهاتف:</strong> {consultation.phone}</p>
                            <p><strong>المدينة:</strong> {consultation.city}</p>
                            <p><strong>العنوان:</strong> {consultation.address}</p>
                            <p><strong>الرسالة:</strong> {consultation.message}</p>
                            <p><strong>الحالة:</strong> {consultation.status}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ViewConsultationModal;

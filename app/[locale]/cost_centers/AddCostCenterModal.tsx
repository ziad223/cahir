// components/modals/AddCostCenterModal.tsx
'use client';

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface AddCostCenterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: { name: string }) => void;
}

const AddCostCenterModal: React.FC<AddCostCenterModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
}) => {
    const [name, setName] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onSubmit({ name });
            setName('');
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
                    <FaTimes />
                </button>
                <h2 className="text-lg font-bold mb-4">إضافة مركز تكلفة</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="اسم مركز التكلفة"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    <button
                        type="submit"
                        className="bg-[#7451ab] text-white py-2 px-4 rounded hover:bg-[#0b90aa]"
                    >
                        إضافة
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCostCenterModal;

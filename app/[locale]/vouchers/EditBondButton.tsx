'use client';

import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
interface BondData {
    id: string;
    description: string;
    date: string;
    debit: string;
    credit: string;
}
interface EditBondModalProps {
    isOpen: boolean;
    onClose: () => void;
    bondData: BondData;
    onSave: (updatedData: BondData) => void;
}

const EditBondModal: React.FC<EditBondModalProps> = ({ isOpen, onClose, bondData, onSave }) => {
    const [formData, setFormData] = useState<BondData>(bondData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">تعديل السند</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">البيان</label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-500 mb-1">التاريخ</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full border rounded p-2"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">مدين</label>
                                <input
                                    type="text"
                                    name="debit"
                                    value={formData.debit}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">دائن</label>
                                <input
                                    type="text"
                                    name="credit"
                                    value={formData.credit}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            إلغاء
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#7451ab] text-white rounded hover:bg-[#078ba5]"
                        >
                            حفظ التعديلات
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const EditBondButton = ({ bondData }: { bondData: BondData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSave = (updatedData: BondData) => {
        // هنا يمكنك إضافة منطق حفظ البيانات إلى الخادم
        console.log('تم تحديث البيانات:', updatedData);
        // يمكنك إضافة API call هنا
    };

    return (
        <>
            <button
                className="bg-[#7451ab] text-white p-2 rounded"
                onClick={() => setIsModalOpen(true)}
            >
                <FaEdit size={16} />
            </button>

            <EditBondModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bondData={bondData}
                onSave={handleSave}
            />
        </>
    );
};

export default EditBondButton;
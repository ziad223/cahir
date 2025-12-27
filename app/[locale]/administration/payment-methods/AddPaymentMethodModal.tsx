'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const AddPaymentMethodModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const t = useTranslations('payment_methods');
    const [name, setName] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [isCash, setIsCash] = useState(false);
    const [account, setAccount] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, isActive, isCash, account });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] md:w-[400px]">
                <h3 className="text-lg font-bold mb-4">{t('addTitle')}</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">{t('name')}</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border p-2 rounded outline-none"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">{t('options')}</label>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="active"
                                checked={isActive}
                                onChange={(e) => setIsActive(e.target.checked)}
                            />
                            <label htmlFor="active">{t('active')}</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="cash"
                                checked={isCash}
                                onChange={(e) => setIsCash(e.target.checked)}
                            />
                            <label htmlFor="cash">{t('cash')}</label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">{t('account')}</label>
                        <select
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                            className="w-full border p-2 rounded outline-none"
                            required
                        >
                            <option value="">{t('selectAccount')}</option>
                            <option value="bank">{t('bank')}</option>
                            <option value="cashbox">{t('cashbox')}</option>
                        </select>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#7451ab] text-white rounded hover:bg-[#0b9ab3]"
                        >
                            {t('save')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPaymentMethodModal;

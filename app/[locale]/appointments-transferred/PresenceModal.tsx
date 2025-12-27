'use client'
import React from 'react';
import { useTranslations } from 'next-intl';

interface PresenceModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

const PresenceModal: React.FC<PresenceModalProps> = ({ onClose, onConfirm }) => {
    const t = useTranslations('appointments');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">{t('presence_confirmation')}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>
                <div className="mb-4">
                    <p>{t('presence_message')}</p>
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                        {t('cancel')}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        {t('confirm')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PresenceModal;
'use client'
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

interface AbsenceModalProps {
    onClose: () => void;
    onSave: (reason: string) => void;
}

const AbsenceModal: React.FC<AbsenceModalProps> = ({ onClose, onSave }) => {
    const t = useTranslations('appointments');
    const [reason, setReason] = useState('');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">{t('absence_reason')}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>
                <div className="mb-4">
                    <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        rows={4}
                        placeholder={t('enter_reason')}
                    ></textarea>
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                        {t('cancel')}
                    </button>
                    <button
                        onClick={() => onSave(reason)}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        {t('save')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AbsenceModal;
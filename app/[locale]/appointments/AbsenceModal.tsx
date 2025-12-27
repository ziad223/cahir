'use client'
import React, { useState } from 'react';

const AbsenceModal = ({ onClose, onSave, translations }: { onClose: () => void, onSave: (reason: string) => void, translations: any }) => {
  const [reason, setReason] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h3 className="text-lg font-medium mb-4">{translations('confirm_absence')}</h3>
        <p className="mb-2">{translations('absence_reason')}</p>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4"
          rows={3}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded text-sm"
          >
            {translations('cancel')}
          </button>
          <button
            onClick={() => onSave(reason)}
            className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
          >
            {translations('save')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AbsenceModal;
'use client'
import React from 'react';

const PresenceModal = ({ onClose, onConfirm, translations }: { onClose: () => void, onConfirm: () => void, translations: any }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h3 className="text-lg font-medium mb-4">{translations('confirm_presence')}</h3>
        <p className="mb-6">{translations('confirm_presence_message')}</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded text-sm"
          >
            {translations('cancel')}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
          >
            {translations('confirm')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresenceModal;
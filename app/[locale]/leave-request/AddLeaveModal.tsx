'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const AddLeaveModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('leaveRequests');

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-[#7451ab] text-white py-2 px-5 h-[40px] rounded-[10px]"
      >
        <span>{t('actions.add')}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-5">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h4 className="text-lg font-semibold">{t('modal.addRequestTitle')}</h4>
              <button onClick={() => setIsOpen(false)} className="text-red-500">{t('actions.close')}</button>
            </div>

            <div className="grid grid-cols-1 gap-4 text-sm">
              <input type="text" placeholder={t('placeholders.from')} className="border p-2 rounded" />
              <input type="text" placeholder={t('placeholders.to')} className="border p-2 rounded" />
              <input type="text" placeholder={t('placeholders.reason')} className="border p-2 rounded" />
              <select className="border p-2 rounded">
                <option value="">{t('placeholders.status')}</option>
                <option value="pending">{t('statuses.pending')}</option>
                <option value="approved">{t('statuses.approved')}</option>
                <option value="rejected">{t('statuses.rejected')}</option>
              </select>
              <input type="text" placeholder={t('placeholders.rejectionReason')} className="border p-2 rounded" />
              <input type="file" className="border p-2 rounded" />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-200 rounded">{t('actions.cancel')}</button>
              <button className="px-4 py-2  bg-[#7451ab] text-white rounded">{t('actions.save')}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddLeaveModal;

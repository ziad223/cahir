'use client';
import React, { useState } from 'react';
import { BiTransfer } from 'react-icons/bi';
import TransferModal from './TransferModal';

const TransferBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                title='transferred patient'
                onClick={() => setIsModalOpen(true)}
                className="bg-[#0d6efd] hover:bg-blue-700 w-8 h-8 flex items-center justify-center text-white p-2 rounded-[5px] shadow-md"
            >
                <BiTransfer size={16} />
            </button>

            {isModalOpen && (
                <TransferModal onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
};

export default TransferBtn;
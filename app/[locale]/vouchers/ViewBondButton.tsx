'use client';

import React from 'react';
import { FaEye } from 'react-icons/fa';
import ViewBondModal from './ViewBondModal';
interface BondData {
    id: string;
    description: string;
    date: string;
    debit: string;
    credit: string;
}

const ViewBondButton = ({ bondData }: { bondData: BondData }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <>
            <button
                className="bg-[#8e44ad] text-white p-2 rounded"
                onClick={() => setIsModalOpen(true)}
            >
                <FaEye size={16} />
            </button>

            <ViewBondModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bondData={bondData}
            />
        </>
    );
};

export default ViewBondButton;
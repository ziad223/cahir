'use client';

import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import EditPatientModal from './EditPatientModal'; // المودال المنفصل

const EditPatientButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[#7451ab] cursor-pointer"
      >
        <FaEdit className="text-white text-lg" title="Edit" />
      </div>
      <EditPatientModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default EditPatientButton;

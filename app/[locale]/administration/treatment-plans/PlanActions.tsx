'use client';

import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import EditPlanModal from './EditPlanModal';

interface Props {
  row: {
    service_number: number;
    name: string;
    duration: number;
    sessions_per_day: number;
    total_sessions: number;
    price: string;
    clinic: string;
    subscribers: number;
  };
  locale: string;
}

const PlanActions: React.FC<Props> = ({ row, locale }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <a
          href={`/${locale}/packages_report`}
          className="text-white bg-[#0d6efd] h-[30px] text-sm px-3 py-1 rounded hover:bg-blue-700"
        >
          تقرير مالي
        </a>

        <div
          className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] bg-[#7451ab] cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <FaEdit className="text-white text-lg" />
        </div>

        <div className="w-[30px] h-[30px] flex items-center justify-center rounded bg-red-600 cursor-pointer">
          <FaTrash className="text-white text-sm" />
        </div>
      </div>

      {open && <EditPlanModal row={row} onClose={() => setOpen(false)} />}
    </>
  );
};

export default PlanActions;

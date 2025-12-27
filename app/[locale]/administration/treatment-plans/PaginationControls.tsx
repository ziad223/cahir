'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

interface Props {
  totalPages: number;
  currentPage: number;
  basePath: string;
}

const PaginationControls = ({ totalPages, currentPage, basePath }: Props) => {
  const router = useRouter();
  const locale = useLocale()

  const handleChangePage = (page: number) => {
    router.push(`/${locale}/${basePath}?page=${page}`);
  };

  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handleChangePage(i + 1)}
          className={`px-3 py-1 rounded border ${
            currentPage === i + 1
              ? 'bg-[#7451ab] text-white'
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationControls;

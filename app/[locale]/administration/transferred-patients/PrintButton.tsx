'use client';
import { FaPrint } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const PrintButton = () => {
    const t = useTranslations('managment');
    const handlePrint = () => window.print();

    return (
        <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-[#ffc107] text-white py-2 px-2 h-[40px] rounded-[10px]"
        >
            <FaPrint title={t('actions.print')} />
        </button>
    );
};

export default PrintButton;

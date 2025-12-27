'use client'
import React from 'react';
import { FiPrinter, FiEye, FiHelpCircle } from 'react-icons/fi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';
import Table from '@/components/shared/reusableComponents/Table';
import { useTranslations } from 'next-intl';

interface Invoice {
    id: number;
    patient: {
        name: string;
    };
    dr?: {
        name: string;
    };
    employee: {
        name: string;
    };
    created_at: string;
    amount: number;
    tax: number;
    total: number;
    status: 'Paid' | 'Unpaid';
}

const page: React.FC = () => {
    const t = useTranslations('admin');
    const tStatus = useTranslations('status');

    // بيانات الفواتير الثابتة
    const invoices: Invoice[] = [
        {
            id: 1,
            patient: { name: 'محمد أحمد' },
            dr: { name: 'د. علي محمد' },
            employee: { name: 'أحمد خالد' },
            created_at: '2023-05-15',
            amount: 500,
            tax: 50,
            total: 550,
            status: 'Paid'
        },
        {
            id: 2,
            patient: { name: 'سارة عبدالله' },
            dr: { name: 'د. مريم سالم' },
            employee: { name: 'فاطمة ناصر' },
            created_at: '2023-05-16',
            amount: 700,
            tax: 70,
            total: 770,
            status: 'Unpaid'
        },
        {
            id: 3,
            patient: { name: 'خالد سعيد' },
            employee: { name: 'نورا محمد' },
            created_at: '2023-05-17',
            amount: 300,
            tax: 30,
            total: 330,
            status: 'Unpaid'
        }
    ];

    const handlePrint = () => {
        window.print();
    };

    const columns = [
        { label: t('Invoice_no'), key: 'id' },
        { label: t('patient'), key: 'patient' },
        { label: t('dr'), key: 'doctor' },
        { label: t('employee'), key: 'employee' },
        { label: t('Date'), key: 'date' },
        { label: t('amount'), key: 'amount' },
        { label: t('tax'), key: 'tax' },
        { label: t('Total with tax'), key: 'total' },
        { label: t('Status'), key: 'status' },
        { label: t('actions'), key: 'actions' },
    ];

    const tableData = invoices.map(invoice => ({
        id: invoice.id,
        patient: invoice.patient.name,
        doctor: invoice.dr ? invoice.dr.name : 'لا يوجد',
        employee: invoice.employee.name,
        date: new Date(invoice.created_at).toLocaleDateString(),
        amount: invoice.amount.toFixed(2),
        tax: invoice.tax.toFixed(2),
        total: invoice.total.toFixed(2),
        status: (
            <span className={`px-2 py-1 rounded text-white ${invoice.status === 'Paid' ? 'bg-green-500' : 'bg-red-500'
                }`}>
                {tStatus(invoice.status)}
            </span>
        ),
        actions: (
            <div className="flex items-center justify-center gap-2">
                <a
                    href={`/invoices/${invoice.id}`}
                    className="p-2 text-white  rounded-sm bg-[#8e44ad]"
                    title={t('actions')}
                >
                    <FiEye size={18} />
                </a>
                <a
                    href={`/invoices/${invoice.id}/edit?tasdeed=tasdeed`}
                    className="p-2 px-5 text-white rounded-sm  bg-[#7451ab]"
                    title={t('payment')}
                >
                    {t('payment')}
                </a>
                <button className="p-2 text-white rounded-sm  bg-[#dc3545]"
                    title={t('actions')}
                >
                    <AiOutlineDelete size={18} />
                </button>
            </div>
        )
    }));

    return (
        <section className="bg-gray-50 p-4">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-xl font-semibold">{t('Pay a visit')}</h4>
                    <div className="mx-auto bg-yellow-100 text-yellow-800 px-4 py-2 rounded">
                        {t('It is only one visit or session, and the bills are followed up if issued by the doctor')}
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                    <div className="mb-2 text-start flex items-center gap-2">
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-700"
                            title={t('It is only one visit or session, and the bills are followed up if issued by the doctor')}
                        >
                            <FiHelpCircle size={20} />
                        </button>
                        <button
                            className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
                            onClick={handlePrint}
                        >
                            <FiPrinter size={16} />
                            <span>{t('actions')}</span>
                        </button>
                    </div>

                    <Table columns={columns} data={tableData} />
                </div>
            </div>
        </section>
    );
};

export default page;
'use client'

import { useTranslations, useLocale } from 'next-intl'
import { FaAngleRight, FaPrint } from 'react-icons/fa6'

const TaxReportPage = () => {
    const t = useTranslations('accounting.taxReport')
    const locale = useLocale()

    // بيانات الأرباع
    const quarters = [
        {
            id: 1,
            statement: t('quarters.q1'),
            months: 'يناير / فبراير / مارس',
            fromDate: '2025-01-01',
            toDate: '2025-03-31',
            purchases: { beforeTax: 0, afterTax: 0 },
            sales: { beforeTax: 0, afterTax: 0 }
        },
        {
            id: 2,
            statement: t('quarters.q2'),
            months: 'أبريل / مايو / يونيو',
            fromDate: '2025-04-01',
            toDate: '2025-06-30',
            purchases: { beforeTax: 0, afterTax: 0 },
            sales: { beforeTax: 5800, afterTax: 6670 }
        },
        {
            id: 3,
            statement: t('quarters.q3'),
            months: 'يوليو / أغسطس / سبتمبر',
            fromDate: '2025-07-01',
            toDate: '2025-09-30',
            purchases: { beforeTax: 0, afterTax: 0 },
            sales: { beforeTax: 0, afterTax: 0 }
        },
        {
            id: 4,
            statement: t('quarters.q4'),
            months: 'أكتوبر / نوفمبر / ديسمبر',
            fromDate: '2025-10-01',
            toDate: '2025-12-31',
            purchases: { beforeTax: 0, afterTax: 0 },
            sales: { beforeTax: 0, afterTax: 0 }
        }
    ]

    // حساب المجاميع
    const totalBeforeTax = quarters.reduce((sum, q) => sum + q.sales.beforeTax, 0)
    const totalAfterTax = quarters.reduce((sum, q) => sum + q.sales.afterTax, 0)
    const taxAmount = totalAfterTax - totalBeforeTax

    return (
        <section className="py-4">
            <div className="container mx-auto px-4">
                <div className="flex mb-3">
                    <a href={`/${locale}/accounting`} className="bg-[#0d6efd] text-white p-2 rounded-sm">
                        <FaAngleRight size={20} />
                    </a>
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-4">{t('title')}</h4>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-end mb-4">
                        <button className="bg-gray-200 px-4 py-2 rounded">
                            <FaPrint />
                        </button>
                    </div>

                    {quarters.map(quarter => (
                        <div key={quarter.id} className="mb-8">
                            {/* جدول الربع */}
                            <table className="w-full mb-4">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-3 text-right">{t('columns.id')}</th>
                                        <th className="p-3 text-right">{t('columns.statement')}</th>
                                        <th className="p-3 text-right">{t('columns.months')}</th>
                                        <th className="p-3 text-right">{t('columns.fromDate')}</th>
                                        <th className="p-3 text-right">{t('columns.toDate')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3">{quarter.id}</td>
                                        <td className="p-3">{quarter.statement}</td>
                                        <td className="p-3">{quarter.months}</td>
                                        <td className="p-3">{quarter.fromDate}</td>
                                        <td className="p-3">{quarter.toDate}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* المشتريات */}
                            <h5 className="font-bold my-2">{t('columns.purchases')}</h5>
                            <table className="w-full mb-4">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-3 text-right">{t('columns.statement')}</th>
                                        <th className="p-3 text-right">{t('columns.totalBeforeTax')}</th>
                                        <th className="p-3 text-right">{t('columns.totalAfterTax')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3">قيمة المشتريات</td>
                                        <td className="p-3">{quarter.purchases.beforeTax}</td>
                                        <td className="p-3">{quarter.purchases.afterTax}</td>
                                    </tr>
                                    <tr className="border-b font-bold">
                                        <td className="p-3">إجمالي المشتريات</td>
                                        <td className="p-3">{quarter.purchases.beforeTax}</td>
                                        <td className="p-3">{quarter.purchases.afterTax}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* المبيعات */}
                            <h5 className="font-bold my-2">{t('columns.sales')}</h5>
                            <table className="w-full mb-6">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-3 text-right">{t('columns.statement')}</th>
                                        <th className="p-3 text-right">{t('columns.totalBeforeTax')}</th>
                                        <th className="p-3 text-right">{t('columns.totalAfterTax')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3">قيمة المبيعات</td>
                                        <td className="p-3">{quarter.sales.beforeTax}</td>
                                        <td className="p-3">{quarter.sales.afterTax}</td>
                                    </tr>
                                    <tr className="border-b font-bold">
                                        <td className="p-3">إجمالي المبيعات</td>
                                        <td className="p-3">{quarter.sales.beforeTax}</td>
                                        <td className="p-3">{quarter.sales.afterTax}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}

                    {/* المجاميع النهائية */}
                    <div className="mt-6 pt-4 border-t">
                        <table className="w-full">
                            <tbody>
                                <tr className="font-bold">
                                    <td className="p-3">{t('columns.totalBeforeTax')}</td>
                                    <td className="p-3">{totalBeforeTax}</td>
                                </tr>
                                <tr className="font-bold">
                                    <td className="p-3">{t('columns.totalAfterTax')}</td>
                                    <td className="p-3">{totalAfterTax}</td>
                                </tr>
                                <tr className="font-bold">
                                    <td className="p-3">{t('columns.taxAmount')}</td>
                                    <td className="p-3">{taxAmount}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TaxReportPage
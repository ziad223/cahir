import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server';

import accounting1 from '@/public/images/accountig-1.png'
import accounting2 from '@/public/images/accountig-2.png'
import accounting3 from '@/public/images/accountig-3.png'
import accounting4 from '@/public/images/accountig-4.png'
import accounting5 from '@/public/images/accountig-5.png'
import accounting6 from '@/public/images/accountig-6.png'
import accounting7 from '@/public/images/accountig-7.png'
import accounting8 from '@/public/images/accountig-8.png'
import accounting9 from '@/public/images/accountig-9.png'


interface LayoutProps {
    params: Promise<{ locale: string | any }>; 
  }
const AccountingPage = async ({ params }: LayoutProps) => {
    const t = await getTranslations('accounting');
      const { locale } = await params;
    

    const isAccountTreeActive = true

    const accountingLinks = [
        isAccountTreeActive && {
            title: t('AccountingTree'),
            href: `/${locale}/accounts-tree`,
            image: accounting1,
        },
        {
            title: t('AccountStatement'),
            href: `/${locale}/account-statement`,
            image: accounting2,
        },
        {
            title: t('Entries'),
            href: `/${locale}/vouchers`,
            image: accounting3,
        },
        {
            title: t('CostCenter'),
            href: `/${locale}/cost_centers`,
            image: accounting4,
        },
        {
            title: t('IncomeStatement'),
            href: `/${locale}/income-statement`,
            image: accounting5,
        },
        {
            title: t('PaymentVoucher'),
            href: `/${locale}/proof-of-exchange`,
            image: accounting6,
        },
        {
            title: t('Takaful'),
            href: `/${locale}/takaful-report`,
            image: accounting7,
        },
        {
            title: t('Expenses'),
            href: `/${locale}/expenses`,
            image: accounting8,
        },
        {
            title: t('TaxDeclaration'),
            href: `/${locale}/tax`,
            image: accounting9,
        },
    ].filter(Boolean)

    return (
        <section className="py-6 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                    <h4 className="text-2xl font-bold">{t('Accounting')}</h4>
                    <div className="flex gap-2">
                        <Link
                            href="/reports"
                            className="px-4 py-2 bg-[#7451ab] text-white rounded  transition text-sm"
                        >
                            <i className="fas fa-link me-1"></i> {t('Reports')}
                        </Link>
                        <Link
                            href="/purchases"
                            className="px-4 py-2 bg-[#7451ab] text-white rounded  transition text-sm"
                        >
                            <i className="fas fa-link me-1"></i> {t('adminPurchases')}
                        </Link>
                        <Link
                            href="/purchases"
                            className="px-4 py-2 bg-[#7451ab] text-white rounded  transition text-sm"
                        >
                            <i className="fas fa-link me-1"></i> {t('accoutSettings')}
                        </Link>
                    </div>
                </div>

                <div className="bg-white p-6 rounded shadow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                        {accountingLinks.map((item, index) => (
                            <Link href={item.href} key={index} className="group block ">
                                <div className="p-4 flex items-center justify-between min-h-[100px] hover:bg-[#7451ab] hover:text-white w-full rounded-lg border shadow hover:shadow-md transition border-[#7451ab]">
                                    <p className="mb-0 font-bold">{item.title}</p>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={60}
                                        height={70}
                                        className="mx-auto"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccountingPage

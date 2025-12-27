import Table from '@/components/shared/reusableComponents/Table'
import { useTranslations, useLocale } from 'next-intl'
import { FaAngleRight, FaPlus, FaPrint } from 'react-icons/fa6'
import ExpensesManagement from './ExpensesManagement'

interface Expense {
    id: number
    name: string
    created_at: string
    category: {
        id: number
        name: string
    }
    amount: number
    notes: string
}

interface Category {
    id: number
    name: string
}

const initialExpenses: Expense[] = [
    {
        id: 1,
        name: "Office Supplies",
        created_at: "2023-05-15",
        category: { id: 1, name: "Supplies" },
        amount: 150.75,
        notes: "Paper, pens, and notebooks"
    },
    {
        id: 2,
        name: "Internet Bill",
        created_at: "2023-05-10",
        category: { id: 2, name: "Utilities" },
        amount: 89.99,
        notes: "Monthly internet service"
    }
]

const initialCategories: Category[] = [
    { id: 1, name: "Supplies" },
    { id: 2, name: "Utilities" },
    { id: 3, name: "Salaries" },
    { id: 4, name: "Marketing" },
    { id: 5, name: "Travel" }
]

const ExpensesPage = () => {
    const t = useTranslations('accounting.expenses')
    const locale = useLocale()

    return (
        <section className="users py-4">
            <div className="container mx-auto px-4">
                <div className="flex mb-3">
                    <a
                        href={`/${locale}/accounting`}
                        className="btn bg-main-color text-white px-4 py-2 rounded"
                    >
                        <FaAngleRight />
                    </a>
                </div>

                <h4 className="main-heading text-xl font-bold text-gray-800 mb-4">{t('title')}</h4>

                <ExpensesManagement
                    initialExpenses={initialExpenses}
                    initialCategories={initialCategories}
                />
            </div>


        </section>
    )
}

export default ExpensesPage
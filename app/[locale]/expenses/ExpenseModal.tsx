'use client'

import { useTranslations } from 'next-intl'
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6'

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

interface ExpenseModalProps {
    mode: 'add' | 'edit' | 'delete'
    expense: Expense | null
    categories: Category[]
    onClose: () => void
    onSubmit: (e: React.FormEvent) => void
    onDelete?: () => void
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    formData: Omit<Expense, 'id' | 'created_at'> & { id?: number }
}

export const ExpenseModal = ({
    mode,
    expense,
    categories,
    onClose,
    onSubmit,
    onDelete,
    onInputChange,
    formData
}: ExpenseModalProps) => {
    const t = useTranslations('accounting.expenses')

    if (mode === 'delete' && expense) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h3 className="text-lg font-semibold mb-4">{t('deleteExpense')}</h3>
                    <p>{t('deleteConfirm', { name: expense.name })}</p>
                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            onClick={onDelete}
                            className="px-4 py-2 bg-red-600 text-white rounded"
                        >
                            {t('deleteExpense')}
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-lg font-semibold mb-4">
                    {mode === 'add' ? t('addExpense') : t('editExpense')}
                </h3>

                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            {t('name')}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={onInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            {t('category')}
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category.id}
                            onChange={onInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option value="">{t('selectCategory')}</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                            {t('amount')}
                        </label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={onInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            min="0"
                            step="0.01"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
                            {t('notes')}
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={onInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={3}
                        />
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#0d6efd] text-white rounded"
                        >
                            {mode === 'add' ? t('save') : t('update')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
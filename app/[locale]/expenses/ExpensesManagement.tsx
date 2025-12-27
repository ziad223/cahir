'use client'

import { useTranslations , useLocale} from 'next-intl'
import { FaPenToSquare, FaPlus, FaPrint, FaTrashCan } from 'react-icons/fa6'
import { ExpenseModal } from './ExpenseModal'
import Table from '@/components/shared/reusableComponents/Table'
import { useState } from 'react'
import Link from 'next/link'

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

interface ExpensesManagementProps {
    initialExpenses: Expense[]
    initialCategories: Category[]
}

const ExpensesManagement = ({ initialExpenses, initialCategories }: ExpensesManagementProps) => {
    const t = useTranslations('accounting.expenses');
    const locale = useLocale();
    const [expenses, setExpenses] = useState<Expense[]>(initialExpenses)
    const [categories, setCategories] = useState<Category[]>(initialCategories)
    const [modalMode, setModalMode] = useState<'add' | 'edit' | 'delete' | null>(null)
    const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null)
    const [formData, setFormData] = useState<Omit<Expense, 'id' | 'created_at'> & { id?: number }>({
        name: '',
        category: { id: 0, name: '' },
        amount: 0,
        notes: ''
    })

    const handlePrint = () => {
        window.print()
    }

    const handleEdit = (expense: Expense) => {
        setSelectedExpense(expense)
        setFormData({
            name: expense.name,
            category: expense.category,
            amount: expense.amount,
            notes: expense.notes,
            id: expense.id
        })
        setModalMode('edit')
    }

    const handleDelete = (expense: Expense) => {
        setSelectedExpense(expense)
        setModalMode('delete')
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        if (name === 'category') {
            const selectedCategory = categories.find(cat => cat.id === Number(value))
            if (selectedCategory) {
                setFormData(prev => ({
                    ...prev,
                    category: { id: selectedCategory.id, name: selectedCategory.name }
                }))
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: name === 'amount' ? Number(value) : value
            }))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (formData.id) {
            // Update existing expense
            setExpenses(prev => prev.map(exp =>
                exp.id === formData.id ? {
                    ...exp,
                    ...formData,
                    created_at: new Date().toISOString()
                } : exp
            ))
        } else {
            // Add new expense
            const newExpense: Expense = {
                id: Math.max(...expenses.map(e => e.id), 0) + 1,
                name: formData.name,
                category: formData.category,
                amount: formData.amount,
                notes: formData.notes,
                created_at: new Date().toISOString()
            }
            setExpenses(prev => [...prev, newExpense])
        }

        setModalMode(null)
        resetForm()
    }

    const handleDeleteConfirm = () => {
        if (selectedExpense) {
            setExpenses(prev => prev.filter(exp => exp.id !== selectedExpense.id))
            setModalMode(null)
        }
    }

    const resetForm = () => {
        setFormData({
            name: '',
            category: { id: 0, name: '' },
            amount: 0,
            notes: ''
        })
    }

    const columns = [
        { label: t('columns.id'), key: "id" },
        { label: t('columns.name'), key: "name" },
        { label: t('columns.date'), key: "date" },
        { label: t('columns.category'), key: "category" },
        { label: t('columns.amount'), key: "amount" },
        { label: t('columns.notes'), key: "notes" },
        { label: t('columns.actions'), key: "actions" }
    ]

    const tableData = expenses.map(expense => ({
        id: expense.id,
        name: expense.name,
        date: new Date(expense.created_at).toISOString().split('T')[0],
        category: expense.category.name,
        amount: expense.amount.toFixed(2),
        notes: expense.notes,
        actions: (
            <div className="flex items-center justify-center gap-1">
                <div className="inline-flex items-center gap-2 p-2 rounded-lg ">
                    <button
                        onClick={() => handleEdit(expense)}
                        className="bg-blue-500 hover:bg-blue-600 rounded-sm text-white p-2 transition"
                    >
                        <FaPenToSquare size={16} />
                    </button>
                    <button
                        onClick={() => handleDelete(expense)}
                        className="bg-red-500 hover:bg-red-600 rounded-sm text-white p-2 transition"
                    >
                        <FaTrashCan size={16} />
                    </button>
                </div>

            </div>
        )
    }))

    return (
        <>
            {modalMode && (
                <ExpenseModal
                    mode={modalMode}
                    expense={selectedExpense}
                    categories={categories}
                    onClose={() => {
                        setModalMode(null)
                        resetForm()
                    }}
                    onSubmit={handleSubmit}
                    onDelete={handleDeleteConfirm}
                    onInputChange={handleInputChange}
                    formData={formData}
                />
            )}

            <div className="section-content bg-white rounded-lg  p-6">
                <div className="flex flex-wrap items-center gap-2 mt-3 justify-between mb-4">
                    <Link
                        href={`/${locale}/expenses  /categories`}
                        className="btn btn-sm btn-primary px-4 py-2 bg-blue-600 text-white rounded text-sm"
                    >
                        {t('categories')}
                    </Link>

                    <div className="flex flex-wrap items-center gap-2 justify-end">
                        <button
                            onClick={() => {
                                setSelectedExpense(null)
                                resetForm()
                                setModalMode('add')
                            }}
                            className="bg-[#0d6efd] text-white   px-2 py-2 rounded text-sm gap-1 flex items-center"
                        >
                            {t('addExpense')}
                            <FaPlus className="ml-2" />
                        </button>
                        <button
                            onClick={handlePrint}
                            className="print-btn btn btn-sm btn-warning px-4 py-2 bg-yellow-500 text-white rounded text-sm"
                        >
                            <FaPrint />
                        </button>   
                    </div>
                </div>

                <Table columns={columns} data={tableData} />
            </div>
        </>
    )
}

export default ExpensesManagement
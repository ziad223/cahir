'use client'

import Table from '@/components/shared/reusableComponents/Table'
import { useTranslations, useLocale } from 'next-intl'
import { FaAngleRight, FaPlus, FaPrint, FaPenToSquare, FaTrashCan } from 'react-icons/fa6'
import { useState } from 'react'
import CategoryModal from './CategoryModal'

interface Category {
    id: number
    name: string
    parent?: string
}

const CategoriesPage = () => {
    const t = useTranslations('accounting.categories')
    const locale = useLocale()
    const [categories, setCategories] = useState<Category[]>([
        { id: 1, name: "لوازم مكتبية", parent: "مصاريف تشغيلية" },
        { id: 2, name: "إنترنت", parent: "مرافق" },
        { id: 3, name: "رواتب", parent: "موظفين" }
    ])

    const [modalMode, setModalMode] = useState<'add' | 'edit' | 'delete' | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
    const [formData, setFormData] = useState<Omit<Category, 'id'> & { id?: number }>({
        name: '',
        parent: ''
    })

    const handleAdd = () => {
        setSelectedCategory(null)
        setFormData({ name: '', parent: '' })
        setModalMode('add')
    }

    const handleEdit = (category: Category) => {
        setSelectedCategory(category)
        setFormData({
            name: category.name,
            parent: category.parent || '',
            id: category.id
        })
        setModalMode('edit')
    }

    const handleDelete = (category: Category) => {
        setSelectedCategory(category)
        setModalMode('delete')
    }

    const handleSubmit = (formData: any) => {
        if (formData.id) {
            // Update existing
            setCategories(categories.map(c =>
                c.id === formData.id ? { ...c, ...formData } : c
            ))
        } else {
            // Add new
            const newCategory = {
                id: Math.max(...categories.map(c => c.id), 0) + 1,
                ...formData
            }
            setCategories([...categories, newCategory])
        }
        setModalMode(null)
    }

    const handleDeleteConfirm = () => {
        if (selectedCategory) {
            setCategories(categories.filter(c => c.id !== selectedCategory.id))
            setModalMode(null)
        }
    }

    const columns = [
        { label: t('columns.id'), key: "id" },
        { label: t('columns.name'), key: "name" },
        { label: t('columns.parent'), key: "parent" },
        { label: t('columns.actions'), key: "actions" }
    ]

    const tableData = categories.map(category => ({
        id: category.id,
        name: category.name,
        parent: category.parent || "-",
        actions: (
            <div className="flex items-center justify-center gap-1">
                <div className="inline-flex items-center gap-2 p-2 rounded-lg shadow">
                    <button
                        onClick={() => handleEdit(category)}
                        className="bg-blue-500 hover:bg-blue-600 rounded-sm text-white p-2 transition"
                    >
                        <FaPenToSquare size={16} />
                    </button>
                    <button
                        onClick={() => handleDelete(category)}
                        className="bg-red-500 hover:bg-red-600 rounded-sm text-white p-2 transition"
                    >
                        <FaTrashCan size={16} />
                    </button>
                </div>

            </div>
        )
    }))

    return (
        <section className="py-4">
            <div className="container mx-auto px-4">
                <div className="flex mb-3">
                    <a href={`/${locale}/expenses`} className="bg-[#0d6efd] p-2 rounded-sm text-white">
                        <FaAngleRight size={20} />
                    </a>
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-4">{t('title')}</h4>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={handleAdd}
                            className="bg-[#0d6efd] text-white px-4 py-2 rounded flex items-center"
                        >
                            <FaPlus className="ml-2" />
                            {t('addCategory')}
                        </button>
                        <button className="bg-gray-200 px-4 py-2 rounded">
                            <FaPrint />
                        </button>
                    </div>

                    <Table
                        columns={columns}
                        data={tableData}
                    />

                    {modalMode && (
                        <CategoryModal
                            mode={modalMode}
                            initialData={formData}
                            onClose={() => setModalMode(null)}
                            onSubmit={handleSubmit}
                            onDelete={handleDeleteConfirm}
                            categories={categories}
                            translations={{
                                title: modalMode === 'add' ? t('addCategory') :
                                    modalMode === 'edit' ? t('editCategory') : t('deleteCategory'),
                                name: t('name'),
                                parent: t('parent'),
                                selectParent: t('selectParent'),
                                cancel: t('cancel'),
                                save: t('save'),
                                deleteConfirm: t('deleteConfirm', { name: selectedCategory?.name || '' })
                            }}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default CategoriesPage
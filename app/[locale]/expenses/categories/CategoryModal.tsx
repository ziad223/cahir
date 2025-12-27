'use client'

import { useState, useEffect } from 'react'

interface CategoryModalProps {
    mode: 'add' | 'edit' | 'delete'
    initialData: any
    onClose: () => void
    onSubmit: (data: any) => void
    onDelete?: () => void
    categories: any[]
    translations: {
        title: string
        name: string
        parent: string
        selectParent: string
        cancel: string
        save: string
        deleteConfirm: string
    }
}

const CategoryModal = ({
    mode,
    initialData,
    onClose,
    onSubmit,
    onDelete,
    categories,
    translations
}: CategoryModalProps) => {
    const [formData, setFormData] = useState(initialData)

    useEffect(() => {
        setFormData(initialData)
    }, [initialData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-lg font-semibold mb-4">{translations.title}</h3>

                {mode === 'delete' ? (
                    <div>
                        <p>{translations.deleteConfirm}</p>
                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                {translations.cancel}
                            </button>
                            <button
                                onClick={onDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded"
                            >
                                {translations.delete}
                            </button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                {translations.name}
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                {translations.parent}
                            </label>
                            <select
                                name="parent"
                                value={formData.parent || ''}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="">{translations.selectParent}</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                {translations.cancel}
                            </button>
                            <button
                                type="submit"
                                    className="px-4 py-2 bg-[#0d6efd] text-white rounded"
                            >
                                {translations.save}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default CategoryModal
'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import TextInput from '@/components/shared/reusableComponents/TextInput';
import RadioGroup from '@/components/shared/reusableComponents/GenderRadio';

const EditPatientPage = () => {
    const t = useTranslations('patients');
    const [formData, setFormData] = useState({
        civil: '',
        first_name: '',
        phone: '',
        phone_two: '',
        gender: '',
        city_name: '',
        age: '',
        country_id: '',
        image: null as File | null,
        patient_group_id: '',
        sugar: false,
        pressure: false,
        birthdate: '',
        insurance: false,
        insurance_id: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData(prev => ({
                ...prev,
                image: e.target.files![0]
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 mt-20">
            <h2 className="text-xl mb-5 font-bold">{t('edit_patient')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-10">
                <TextInput placeholder={t('civil_placeholder')} name="civil" defaultValue={formData.civil} />
                <TextInput placeholder={t('first_name')} name="first_name" defaultValue={formData.first_name} />
                <TextInput placeholder={t('phone')} name="phone" defaultValue={formData.phone} />
                <TextInput placeholder={t('phone_two')} name="phone_two" defaultValue={formData.phone_two} />
                <TextInput placeholder={t('city_name')} name="city_name" defaultValue={formData.city_name} />
                <TextInput label={t('age')} name="age" defaultValue={formData.age} />
                <TextInput label={t('birthdate')} name="birthdate" defaultValue={formData.birthdate} />

                <RadioGroup
                    label={t('gender')}
                    name="gender"
                    options={[
                        { label: t('male'), value: 'male' },
                        { label: t('female'), value: 'female' },
                    ]}
                />
                <RadioGroup
                    label={t('nationality')}
                    name="nationality"
                    options={[
                        { label: t('saudi'), value: 'سعودي' },
                        { label: t('non_saudi'), value: 'غير سعودي' },
                    ]}
                />

                <div className="col-span-1">
                    <label className="block text-sm font-bold mb-1 text-black">{t('upload_image')}</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>

                <div className="flex gap-1 items-center">
                    <label>{t('suffer_allergy')}</label>
                    <input type="checkbox" name="sugar" onChange={handleChange} />
                </div>
                <div className="flex gap-1 items-center">
                    <label>{t('suffer_pressure')}</label>
                    <input type="checkbox" name="pressure" onChange={handleChange} />
                </div>
                <div className="flex gap-1 items-center">
                    <label>{t('has_insurance')}</label>
                    <input type="checkbox" name="insurance" onChange={handleChange} />
                </div>

                <button
                    type="submit"
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    {t('save_data')}
                </button>
            </div>
        </form>
    );
};

export default EditPatientPage;

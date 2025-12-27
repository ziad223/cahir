'use client'
import RadioGroup from '@/components/shared/reusableComponents/GenderRadio';
import TextInput from '@/components/shared/reusableComponents/TextInput';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const AddPatientForm = () => {
    const t = useTranslations('home');
    const [formData, setFormData] = useState({
        first_name: '',
        civil: '',
        phone_two: '',
        gender: '',
        age: '',
        city_name: '',
        patient_group_id: '',
        sugar: false,
        pressure: false,
        country_id: '',
        phone: '',
        birthdate: '',
        hijri_birthdate: '',
        image: null,
        insurance: false,
        insurance_id: '',
        other_diseases: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ];

    return (
        <section className="py-5 bg-gray-100">
            <div className="container mx-auto px-4">
                <h4 className="text-xl font-bold text-gray-800">{t('addPatient')}</h4>
            </div>

            <div className="container mx-auto px-4 pt-0 p-3 bg-white min-h-screen rounded-lg shadow-md">
                <div className="p-4">
                    <h4 className="bg-gray-100 p-3 rounded-lg mb-4 text-center font-medium">
                        {t('personalInfo')}
                    </h4>

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap gap-5 mb-4">
                            <div className="w-full md:w-[48%] pr-0 md:pr-4">
                                <div className="space-y-3">
                                    <TextInput
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        placeholder={t('name')}
                                        className="w-full p-2 border rounded"
                                    />

                                    <TextInput
                                        name="civil"
                                        value={formData.civil}
                                        onChange={handleChange}
                                        placeholder={t('civilNumber')}
                                        className="w-full p-2 border rounded"
                                    />

                                    <TextInput
                                        name="phone_two"
                                        value={formData.phone_two}
                                        onChange={handleChange}
                                        placeholder={t('otherPhone')}
                                       
                                        className="w-full p-2 border rounded "
                                    />

                                    <RadioGroup
                                        label={t('gender')}
                                        name="gender"
                                        options={genderOptions}
                                        className="mb-3"
                                    />

                                    <TextInput
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder={t('age')}
                                        type="number"
                                        className="w-full p-2 border rounded"
                                    />

                                    <TextInput
                                        name="city_name"
                                        value={formData.city_name}
                                        onChange={handleChange}
                                        placeholder={t('enterCity')}
                                        className="w-full p-2 border rounded"
                                    />

                                    <div className="mb-3">
                                        <label className="block text-xs text-gray-500 mb-1">
                                            {t('managementPreset')}
                                            <br />
                                            {t('managementPresetDesc')}
                                        </label>
                                        <select
                                            name="patient_group_id"
                                            value={formData.patient_group_id}
                                            onChange={handleChange}
                                            className="w-full border rounded"
                                        >
                                            <option value="">{t('selectGroup')}</option>
                                            <option value="1">Group 1</option>
                                            <option value="2">Group 2</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-3 mb-3">
                                        <input
                                            type="checkbox"
                                            name="sugar"
                                            checked={formData.sugar}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        <label>{t('allergiesQuestion')}</label>
                                    </div>

                                    <div className="flex items-center gap-3 mb-3">
                                        <input
                                            type="checkbox"
                                            name="pressure"
                                            checked={formData.pressure}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        <label>{t('bloodPressureQuestion')}</label>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-[48%] pl-0 md:pl-4">
                                <div className="space-y-3">
                                    <div className="mb-3">
                                        <select
                                            name="country_id"
                                            value={formData.country_id}
                                            onChange={handleChange}
                                            className="w-full p-[2px] border rounded outline-none"
                                        >
                                            <option value="">{t('nationality')}</option>
                                            <option value="1">سعودي</option>
                                            <option value="2">غير سعودي</option>
                                        </select>
                                    </div>

                                    <TextInput
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder={t('phone')}
                                       
                                        className="w-full p-2 border rounded "
                                    />

                               
                                    <div className="mb-3">
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>

                                    <div className="flex items-center mt-4 mb-3">
                                        <input
                                            type="checkbox"
                                            name="insurance"
                                            checked={formData.insurance}
                                            onChange={handleChange}
                                            className="mx-2"
                                        />
                                        <label>{t('insuranceQuestion')}</label>
                                    </div>

                                    {formData.insurance && (
                                        <div className="mb-3">
                                            <select
                                                name="insurance_id"
                                                value={formData.insurance_id}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded"
                                            >
                                                <option value="">{t('insurance')}</option>
                                                <option value="1">Insurance 1</option>
                                                <option value="2">Insurance 2</option>
                                            </select>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2">{t('otherDiseases')}</label>
                                <textarea
                                    name="other_diseases"
                                    value={formData.other_diseases}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded outline-none"
                                    rows={4}
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                            >
                                {t('saveData')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddPatientForm;
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function AppointmentPage() {
    const t = useTranslations('patients');
    const [patientKey, setPatientKey] = useState('');
    const [clinicId, setClinicId] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [appointmentStatus, setAppointmentStatus] = useState('');
    const [appointmentDuration, setAppointmentDuration] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [review, setReview] = useState(false);

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="mb-5 text-xl  ">{t('addAppointment')}</h2>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
                {/* Left Form */}
                <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-md shadow">
                    <div className="flex justify-center lg:justify-end mb-3">
                        <Link href="/appointments" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm ">
                            {t('appointments')}
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm mb-1">{t('searchByKey')}</label>
                            <input
                                type="text"
                                value={patientKey}
                                onChange={(e) => setPatientKey(e.target.value)}
                                className="form-input w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">{t('patientName')}</label>
                            <input
                                type="text"
                                value="طارق الملا"
                                disabled
                                readOnly
                                className="form-input w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">{t('phone')}</label>
                            <input
                                type="tel"
                                value="123456789"
                                disabled
                                readOnly
                                className="form-input w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">{t('clinic')}</label>
                            <select
                                value={clinicId}
                                onChange={(e) => setClinicId(e.target.value)}
                                className="form-select w-full border border-gray-300 rounded px-3 py-2"
                            >
                                <option value="">{t('chooseClinic')}</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-1">{t('doctor')}</label>
                            <select
                                value={doctorId}
                                onChange={(e) => setDoctorId(e.target.value)}
                                className="form-select w-full border border-gray-300 rounded px-3 py-2"
                            >
                                <option value="">{t('chooseDoctor')}</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-1">{t('appointmentStatus')}</label>
                            <select
                                value={appointmentStatus}
                                onChange={(e) => setAppointmentStatus(e.target.value)}
                                className="form-select w-full border border-gray-300 rounded px-3 py-2"
                            >
                                <option value="confirmed">{t('confirmed')}</option>
                                <option value="pending">{t('pending')}</option>
                                <option value="cancelled">{t('cancelled')}</option>
                                <option value="transferred">{t('transferred')}</option>
                                <option value="examined">{t('examined')}</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-1">{t('period')}</label>
                            <select
                                value={appointmentDuration}
                                onChange={(e) => setAppointmentDuration(e.target.value)}
                                className="form-select w-full border border-gray-300 rounded px-3 py-2"
                            >
                                <option value="">{t('choosePeriod')}</option>
                                <option value="morning">{t('morning')}</option>
                                <option value="evening">{t('evening')}</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-1">{t('appointmentDate')}</label>
                            <input
                                type="date"
                                value={appointmentDate}
                                onChange={(e) => setAppointmentDate(e.target.value)}
                                className="form-input w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <div className="flex items-center space-x-2 sm:col-span-2 md:col-span-1">
                            <input
                                type="checkbox"
                                id="review"
                                checked={review}
                                onChange={() => setReview(!review)}
                            />
                            <label htmlFor="review" className="text-sm">{t('review')}</label>
                        </div>

                        <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center mt-4">
                            <button className="bg-green-600 text-white px-6 py-2 rounded-md text-sm w-full sm:w-auto">
                                {t('save')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Appointment Time */}
                <div className="bg-white p-4 sm:p-6 rounded-md shadow">
                    <h3 className="text-lg font-semibold mb-4  ">
                        {t('appointmentTime')}
                    </h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        <label className="btn-item">
                            <input
                                type="radio"
                                name="appointment_time"
                                value="08:00"
                                onChange={() => setAppointmentTime('08:00')}
                                className="hidden"
                            />
                            <span
                                className={`px-4 py-2 border rounded block text-center ${appointmentTime === '08:00' ? 'bg-blue-500 text-white' : ''
                                    }`}
                            >
                                08:00 AM
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client'
import Table from '@/components/shared/reusableComponents/Table';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface Patient {
    id: number;
    name: string;
    first_name: string;
    age: number;
    civil_id: string;
    phone: string;
}

interface CaseStudy {
    id: number;
    patient_id: number;
    patient: Patient;
    created_at: string;
    employee: {
        name: string;
    };
    status: 'pending' | 'done';
    file_path: string | null;
}

interface CaseStudyFaq {
    id: number;
    question: string;
    answer_type: 'yes_or_no' | 'text';
}

const CaseStudyPage = () => {
    const [screen, setScreen] = useState<'index' | 'create' | 'edit'>('index');
    const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'done'>('all');
    const [filterEmployee, setFilterEmployee] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [filterCivil, setFilterCivil] = useState('');
    const [filterPhone, setFilterPhone] = useState('');
    const [filterId, setFilterId] = useState('');
    const [filterName, setFilterName] = useState('');
    const t = useTranslations('caseStudyPage');

    const [studies, setStudies] = useState<CaseStudy[]>([
        {
            id: 1,
            patient_id: 101,
            patient: {
                id: 101,
                name: 'John Doe',
                first_name: 'John',
                age: 35,
                civil_id: '123456789',
                phone: '0501234567'
            },
            created_at: '2023-05-15',
            employee: { name: 'Dr. Smith' },
            status: 'pending',
            file_path: '/files/report1.pdf'
        },
        {
            id: 2,
            patient_id: 102,
            patient: {
                id: 102,
                name: 'Jane Smith',
                first_name: 'Jane',
                age: 28,
                civil_id: '987654321',
                phone: '0507654321'
            },
            created_at: '2023-06-20',
            employee: { name: 'Dr. Johnson' },
            status: 'done',
            file_path: null
        }
    ]);

    const [employees] = useState([
        { id: 1, name: 'Dr. Smith' },
        { id: 2, name: 'Dr. Johnson' },
        { id: 3, name: 'Dr. Williams' }
    ]);

    const [caseStudyFaqs] = useState<CaseStudyFaq[]>([
        { id: 1, question: t('faq.allergies'), answer_type: 'yes_or_no' },
        { id: 2, question: t('faq.chronicDiseases'), answer_type: 'yes_or_no' },
        { id: 3, question: t('faq.patientCondition'), answer_type: 'text' }
    ]);

    // Form state for create/edit
    const [formData, setFormData] = useState({
        file: null as File | null,
        status: '',
        patient_id: '',
        patient_first_name: '',
        patient_civil: '',
        content: '',
        main_complaints: '',
        behaviors: '',
        deal_with: '',
        questions: [] as { answer: string }[]
    });

    const filteredStudies = studies.filter(study => {
        if (filterStatus === 'pending' && study.status !== 'pending') return false;
        if (filterStatus === 'done' && study.status !== 'done') return false;
        if (filterEmployee && study.employee.name !== filterEmployee) return false;
        if (filterCivil && !study.patient.civil_id.includes(filterCivil)) return false;
        if (filterPhone && !study.patient.phone.includes(filterPhone)) return false;
        if (filterId && !study.patient.id.toString().includes(filterId)) return false;
        if (filterName && !study.patient.first_name.toLowerCase().includes(filterName.toLowerCase())) return false;

        if (fromDate && new Date(study.created_at) < new Date(fromDate)) return false;
        if (toDate && new Date(study.created_at) > new Date(toDate)) return false;

        return true;
    });

    const pendingCount = studies.filter(s => s.status === 'pending').length;
    const doneCount = studies.filter(s => s.status === 'done').length;

    const tableColumns = [
        { label: '#', key: 'index' },
        { label: t('table.patient'), key: 'patient' },
        { label: t('table.age'), key: 'age' },
        { label: t('table.date'), key: 'date' },
        { label: t('table.employee'), key: 'employee' },
        { label: t('table.studyCase'), key: 'status' },
        { label: t('table.file'), key: 'file' },
        { label: t('table.actions'), key: 'actions' }
    ];

    const tableData = filteredStudies.map((study, index) => ({
        index: index + 1,
        patient: study.patient.first_name,
        age: study.patient.age,
        date: new Date(study.created_at).toLocaleDateString(),
        employee: study.employee.name,
        status: (
            <span className={`badge ${study.status === 'pending' ? 'bg-warning' : 'bg-primary'} text-white px-2 py-1 rounded`}>
                {study.status === 'pending' ? t('status.waiting') : t('status.done')}
            </span>
        ),
        file: study.file_path ? (
            <a
                target="_blank"
                href={study.file_path}
                className="btn btn-dark btn-sm bg-gray-800 text-white px-3 py-1 rounded text-sm"
            >
                {t('actions.viewFile')}
            </a>
        ) : (
            t('general.noFile')
        ),
        actions: (
            <div className="flex items-center justify-center gap-3">
                
                <a
                    href={`/case-studies/${study.id}`}
                    className="btn btn-sm btn-purple bg-purple-600 text-white px-2 py-1 rounded text-sm"
                    title={t('actions.view')}
                >
                    <i className="fa fa-eye"></i>
                </a>
                <button
                    className="btn btn-sm btn-info bg-blue-500 text-white px-2 py-1 rounded text-sm"
                    title={t('actions.edit')}
                    onClick={() => handleEdit(study.id)}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                    className="btn btn-sm btn-danger bg-red-600 text-white px-2 py-1 rounded text-sm"
                    onClick={() => handleDelete(study.id)}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        )
    }));

    const handleEdit = (id: number) => {
        const study = studies.find(s => s.id === id);
        if (study) {
            setFormData({
                ...formData,
                status: study.status,
                patient_id: study.patient_id.toString(),
                patient_first_name: study.patient.first_name,
                patient_civil: study.patient.civil_id,
            });
            setScreen('edit');
        }
    };

    const handleDelete = (id: number) => {
        if (confirm(t('messages.deleteConfirm'))) {
            setStudies(studies.filter(s => s.id !== id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setScreen('index');
    };

    return (
        <section className="container mx-auto px-4 py-6">
            {screen === 'index' ? (
                <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                        <h4 className="text-xl font-bold mb-0">
                            {t('title')}
                        </h4>
                    </div>

                    {pendingCount > 0 && (
                        <div className="alert alert-warning bg-yellow-100 text-yellow-800 p-3 rounded mb-4">
                            {t('messages.incompleteStudies')}
                        </div>
                    )}

                    <div className="bg-white shadow p-6 rounded-lg">
                        <div className="flex flex-wrap justify-between items-end mb-4">
                            <div className="flex flex-col md:flex-row flex-wrap gap-2 mb-3 md:mb-0">
                                <button
                                    type="button"
                                    onClick={() => setScreen('create')}
                                    className="py-2 px-4 bg-blue-600 rounded text-white mx-0"
                                >
                                    {t('actions.add')}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFilterStatus('all')}
                                    className="py-2 px-4 bg-blue-500 rounded text-white mx-0"
                                >
                                    {t('filters.allOrders')}: {studies.length}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFilterStatus('pending')}
                                    className="py-2 px-4 bg-blue-500 rounded text-white mx-0"
                                >
                                    {t('filters.newOrders')}: {pendingCount}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFilterStatus('done')}
                                    className="py-2 px-4 bg-blue-500 rounded text-white mx-0"
                                >
                                    {t('filters.previousOrders')}: {doneCount}
                                </button>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <div className="info-data">
                                    <label htmlFor="doctor-name" className="block text-sm mb-2">{t('filters.admin')}</label>
                                    <select
                                        id="doctor-name"
                                        className="border rounded p-2 w-full"
                                        value={filterEmployee}
                                        onChange={(e) => setFilterEmployee(e.target.value)}
                                    >
                                        <option value="">{t('filters.chooseAdmin')}</option>
                                        {employees.map(emp => (
                                            <option key={emp.id} value={emp.name}>{emp.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="box-info">
                                    <label htmlFor="date-from" className="block text-sm mb-2">{t('filters.from')}</label>
                                    <input
                                        type="date"
                                        id="date-from"
                                        className="border rounded p-2"
                                        value={fromDate}
                                        onChange={(e) => setFromDate(e.target.value)}
                                    />
                                </div>
                                <div className="box-info">
                                    <label htmlFor="date-to" className="block text-sm mb-2">{t('filters.to')}</label>
                                    <input
                                        type="date"
                                        id="date-to"
                                        className="border rounded p-2"
                                        value={toDate}
                                        onChange={(e) => setToDate(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="flex flex-col lg:flex-row w-full gap-2 px-0">
                                {/* رقم الهوية */}
                                <div className="flex  lg:w-1/4 w-full ">
                                    <input
                                        type="text"
                                        className="border rounded-r px-2 lg:w-3/4 py-1 text-xs w-full min-h-[40px] outline-none"
                                        placeholder={t('search.idNumber')}
                                        value={filterCivil}
                                        onChange={(e) => setFilterCivil(e.target.value)}
                                    />
                                    <button className="bg-green-600 text-white px-2 py-1 text-lg rounded-l">
                                        {t('actions.search')}
                                    </button>
                                </div>

                                {/* رقم الجوال */}
                                <div className="flex lg:w-1/4 w-full">
                                    <input
                                        type="text"
                                        className="border rounded-r lg:w-3/4 px-2 py-1 text-xs w-full outline-none"
                                        placeholder={t('search.mobileNumber')}
                                        value={filterPhone}
                                        onChange={(e) => setFilterPhone(e.target.value)}
                                    />
                                    <button className="bg-green-600 text-white px-2 py-1 text-lg rounded-l">
                                        {t('actions.search')}
                                    </button>
                                </div>

                                {/* الرقم الطبي */}
                                <div className="flex lg:w-1/4 w-full">
                                    <input
                                        type="text"
                                        className="border rounded-r lg:w-3/4 px-2 py-1 text-xs w-full outline-none"
                                        placeholder={t('search.medicalNumber')}
                                        value={filterId}
                                        onChange={(e) => setFilterId(e.target.value)}
                                    />
                                    <button className="bg-green-600 text-white px-2 py-1 text-lg rounded-l">
                                        {t('actions.search')}
                                    </button>
                                </div>

                                {/* الاسم الأول */}
                                <div className="flex lg:w-1/4 w-full">
                                    <input
                                        type="text"
                                        className="border rounded-r px-2 lg:w-3/4 py-1 text-xs w-full outline-none"
                                        placeholder={t('search.firstName')}
                                        value={filterName}
                                        onChange={(e) => setFilterName(e.target.value)}
                                    />
                                    <button className="bg-green-600 text-white px-2 py-1 text-lg rounded-l">
                                        {t('actions.search')}
                                    </button>
                                </div>
                            </div>
                        </div>



                        <Table columns={tableColumns} data={tableData} />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                        <h4 className="text-xl font-bold mb-0">
                            {screen === 'create' ? t('actions.add') : t('actions.edit')} {t('title')}
                        </h4>
                    </div>

                    <div className="bg-white shadow p-6 rounded-lg">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex flex-col md:flex-row">
                                <button
                                    type="button"
                                    onClick={() => setScreen('index')}
                                    className="py-2 px-4 bg-blue-600 rounded text-white my-2 md:my-0 md:mx-2"
                                >
                                    {t('actions.allStudies')}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="form-group col-span-1">
                                <label htmlFor="file">{t('form.file')}</label>
                                <input
                                    type="file"
                                    id="file"
                                    className="border rounded p-2 w-full"
                                    onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                                />
                            </div>

                            <div className="form-group col-span-1">
                                <label htmlFor="status">{t('form.status')}</label>
                                <select
                                    id="status"
                                    className="border rounded p-2 w-full"
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                >
                                    <option value="">{t('form.chooseStatus')}</option>
                                    <option value="pending">{t('status.waiting')}</option>
                                    <option value="done">{t('status.done')}</option>
                                </select>
                            </div>

                            <div className="form-group col-span-1">
                                <label htmlFor="patient_id">{t('form.patientFileNumber')}</label>
                                <input
                                    type="number"
                                    id="patient_id"
                                    className="border rounded p-2 w-full"
                                    value={formData.patient_id}
                                    onChange={(e) => setFormData({ ...formData, patient_id: e.target.value })}
                                    disabled={screen === 'edit'}
                                />
                            </div>

                            <div className="form-group col-span-1">
                                <label htmlFor="patient_first_name">{t('form.patientName')}</label>
                                <input
                                    type="text"
                                    id="patient_first_name"
                                    className="border rounded p-2 w-full"
                                    value={formData.patient_first_name}
                                    onChange={(e) => setFormData({ ...formData, patient_first_name: e.target.value })}
                                    disabled={screen === 'edit'}
                                />
                            </div>

                            <div className="form-group col-span-1">
                                <label htmlFor="patient_civil">{t('form.civilNumber')}</label>
                                <input
                                    type="text"
                                    id="patient_civil"
                                    className="border rounded p-2 w-full"
                                    value={formData.patient_civil}
                                    onChange={(e) => setFormData({ ...formData, patient_civil: e.target.value })}
                                    disabled={screen === 'edit'}
                                />
                            </div>

                            <div className="form-group col-span-3">
                                <label htmlFor="content">{t('form.initialEvaluation')}</label>
                                <textarea
                                    id="content"
                                    className="border rounded p-2 w-full"
                                    rows={3}
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                ></textarea>
                            </div>

                            {caseStudyFaqs.map((faq, index) => (
                                <div key={faq.id} className="form-group col-span-1">
                                    <label className="mb-2">{faq.question}</label>
                                    <div className="border p-2 w-full">
                                        {faq.answer_type === 'yes_or_no' ? (
                                            <div className="flex gap-4 items-center">
                                                <label className="flex items-center gap-1">
                                                    <input
                                                        type="radio"
                                                        name={`faq-${faq.id}`}
                                                        value="yes"
                                                        checked={formData.questions[index]?.answer === 'yes'}
                                                        onChange={() => {
                                                            const newQuestions = [...formData.questions];
                                                            newQuestions[index] = { answer: 'yes' };
                                                            setFormData({ ...formData, questions: newQuestions });
                                                        }}
                                                    />
                                                    {t('general.yes')}
                                                </label>
                                                <label className="flex items-center gap-1">
                                                    <input
                                                        type="radio"
                                                        name={`faq-${faq.id}`}
                                                        value="no"
                                                        checked={formData.questions[index]?.answer === 'no'}
                                                        onChange={() => {
                                                            const newQuestions = [...formData.questions];
                                                            newQuestions[index] = { answer: 'no' };
                                                            setFormData({ ...formData, questions: newQuestions });
                                                        }}
                                                    />
                                                    {t('general.no')}
                                                </label>
                                            </div>
                                        ) : (
                                            <input
                                                type="text"
                                                className="border rounded p-2 w-full"
                                                value={formData.questions[index]?.answer || ''}
                                                onChange={(e) => {
                                                    const newQuestions = [...formData.questions];
                                                    newQuestions[index] = { answer: e.target.value };
                                                    setFormData({ ...formData, questions: newQuestions });
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}

                            <div className="form-group col-span-1">
                                <label htmlFor="main_complaints">{t('form.takesMedication')}</label>
                                <textarea
                                    id="main_complaints"
                                    className="border rounded p-2 w-full"
                                    rows={3}
                                    value={formData.main_complaints}
                                    onChange={(e) => setFormData({ ...formData, main_complaints: e.target.value })}
                                ></textarea>
                            </div>

                            <div className="form-group col-span-1">
                                <label htmlFor="behaviors">{t('form.problemBehaviors')}</label>
                                <textarea
                                    id="behaviors"
                                    className="border rounded p-2 w-full"
                                    rows={3}
                                    value={formData.behaviors}
                                    onChange={(e) => setFormData({ ...formData, behaviors: e.target.value })}
                                ></textarea>
                            </div>

                            <div className="form-group col-span-1">
                                <label htmlFor="deal_with">{t('form.howDealtWith')}</label>
                                <textarea
                                    id="deal_with"
                                    className="border rounded p-2 w-full"
                                    rows={3}
                                    value={formData.deal_with}
                                    onChange={(e) => setFormData({ ...formData, deal_with: e.target.value })}
                                ></textarea>
                            </div>

                            <div className="form-group col-span-3">
                                <button
                                    className="bg-green-600 text-white px-4 py-2 rounded"
                                    onClick={handleSubmit}
                                >
                                    {t('actions.save')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CaseStudyPage;
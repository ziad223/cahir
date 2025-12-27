'use client'
import { FaFileInvoiceDollar, FaTrash, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

export default function CreateInvoice() {
    const locale = useLocale();
    const [installments, setInstallments] = useState(3);
    const [cashPayment, setCashPayment] = useState(100);
    const [medicalExamPrice, setMedicalExamPrice] = useState(100);
    const [xrayPrice, setXrayPrice] = useState(200);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow rounded-lg p-6">
                <h4 className="text-xl font-bold mb-6">
                    {locale === 'ar' ? 'إضافة فاتورة' : 'Add Invoice'}
                </h4>

                <div className="alert bg-blue-50 p-4 rounded-lg mb-6 flex items-start">
                    <FaInfoCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                        {locale === 'ar'
                            ? 'في حال اصدار فاتورة دراسة الحالة سيظهر الطلب للمشرف التعليمي في طلبات دراسة الحالة'
                            : 'If a case study invoice is issued, the request will appear to the educational supervisor in the case study requests.'}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-3/4">
                        {/* Patient information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    {locale === 'ar' ? 'رقم الملف أو الهوية' : 'Patient file number or ID'}
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder={locale === 'ar' ? 'أدخل رقم الملف' : 'Enter file number'}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    {locale === 'ar' ? 'المريض' : 'Patient'}
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="w-full p-2 border rounded bg-gray-50"
                                    placeholder={locale === 'ar' ? 'اسم المريض' : 'Patient name'}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    {locale === 'ar' ? 'الهاتف' : 'Phone'}
                                </label>
                                <input
                                    type="tel"
                                    readOnly
                                    className="w-full p-2 border rounded bg-gray-50"
                                    placeholder="0501234567"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    {locale === 'ar' ? 'التاريخ' : 'Date'}
                                </label>
                                <input
                                    type="date"
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>

                        {/* Payment and clinic information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    {locale === 'ar' ? 'طريقة الدفع' : 'Payment Method'}
                                </label>
                                <select className="w-full p-2 border rounded">
                                    <option value="">{locale === 'ar' ? 'اختر طريقة' : 'Select method'}</option>
                                    <option value="cash">{locale === 'ar' ? 'نقدي' : 'Cash'}</option>
                                    <option value="card">{locale === 'ar' ? 'بطاقة' : 'Card'}</option>
                                    <option value="bank">{locale === 'ar' ? 'تحويل بنكي' : 'Bank Transfer'}</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    {locale === 'ar' ? 'القسم' : 'Department'}
                                </label>
                                <select className="w-full p-2 border rounded">
                                    <option value="">{locale === 'ar' ? 'اختر قسم' : 'Select department'}</option>
                                    <option value="1">{locale === 'ar' ? 'الأسنان' : 'Dentistry'}</option>
                                    <option value="2">{locale === 'ar' ? 'الباطنة' : 'Internal Medicine'}</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    {locale === 'ar' ? 'الطبيب' : 'Doctor'}
                                </label>
                                <select className="w-full p-2 border rounded">
                                    <option value="">{locale === 'ar' ? 'اختر طبيب' : 'Select doctor'}</option>
                                    <option value="1">Dr. Ahmed</option>
                                    <option value="2">Dr. Mohammed</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    {locale === 'ar' ? 'العيادة' : 'Clinic'}
                                </label>
                                <select className="w-full p-2 border rounded">
                                    <option value="">{locale === 'ar' ? 'اختر عيادة' : 'Select clinic'}</option>
                                    <option value="1">{locale === 'ar' ? 'عيادة الرياض' : 'Riyadh Clinic'}</option>
                                    <option value="2">{locale === 'ar' ? 'عيادة جدة' : 'Jeddah Clinic'}</option>
                                </select>
                            </div>
                        </div>

                        {/* Patient group alert */}
                        <div className="bg-yellow-50 p-4 rounded-lg mb-6 border border-yellow-200">
                            <div className="flex items-start">
                                <FaExclamationTriangle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                                <div>
                                    <p className="font-medium">
                                        {locale === 'ar'
                                            ? 'في حال كانت الفاتورة دراسة للحالة يجب تحديد الخيار هنا'
                                            : 'If the invoice is a case study, the option must be selected here.'}
                                    </p>
                                 
                               
                                </div>
                            </div>
                        </div>

                        {/* Service selection */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    {locale === 'ar' ? 'الخدمة' : 'Service'}
                                </label>
                                <select className="w-full p-2 border rounded">
                                    <option value="">{locale === 'ar' ? 'اختر خدمة' : 'Select service'}</option>
                                    <option value="1">{locale === 'ar' ? 'كشف طبي' : 'Medical Examination'} - 100 SAR</option>
                                    <option value="2">{locale === 'ar' ? 'أشعة' : 'X-Ray'} - 200 SAR</option>
                                </select>
                            </div>

                            <div className="flex items-end">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                                    {locale === 'ar' ? 'إضافة' : 'Add'}
                                </button>
                            </div>

                            <div className="flex items-end">
                                <Link
                                    href={`/${locale}/products`}
                                    className="bg-gray-500 text-white px-4 py-2 rounded flex items-center justify-center w-full"
                                    target="_blank"
                                >
                                    <FaFileInvoiceDollar className="mr-2" />
                                    {locale === 'ar' ? 'الخدمات' : 'Services'}
                                </Link>
                            </div>
                        </div>

                        {/* Case study section */}
                        <div className="bg-yellow-50 p-4 rounded-lg mb-6 border border-yellow-200">
                            <div className="flex items-center mb-3">
                                <FaExclamationTriangle className="text-yellow-500 mr-2" />
                                <p className="font-medium">
                                    {locale === 'ar'
                                        ? 'إذا كانت الفاتورة لدراسة حالة، يجب اختيار الخيار هنا'
                                        : 'If the invoice is a case study, select the option here'}
                                </p>
                            </div>

                            <div className="flex items-center mb-3">
                                <input
                                    type="checkbox"
                                    className="mr-2 h-4 w-4"
                                />
                                <label className="font-medium">
                                    {locale === 'ar' ? 'دراسة حالة' : 'Case Study'}
                                </label>
                            </div>

                           
                        </div>

                      

                        {/* Items table */}
                        <div className="overflow-x-auto mb-6 border rounded-lg">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-3 px-4 border text-right">
                                            {locale === 'ar' ? 'الخدمة' : 'Service'}
                                        </th>
                                        <th className="py-3 px-4 border text-right">
                                            {locale === 'ar' ? 'السعر' : 'Price'}
                                        </th>
                                        <th className="py-3 px-4 border text-center">
                                            {locale === 'ar' ? 'إجراءات' : 'Actions'}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b hover:bg-gray-50">
                                        <td className="py-3 px-4 border text-right">
                                            {locale === 'ar' ? 'كشف طبي' : 'Medical Examination'}
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                                                {locale === 'ar' ? 'دراسة حالة' : 'Case Study'}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 border">
                                            <input
                                                type="number"
                                                value={medicalExamPrice}
                                                onChange={(e) => setMedicalExamPrice(Number(e.target.value))}
                                                className="w-full p-1 border rounded text-right"
                                            />
                                        </td>
                                        <td className="py-3 px-4 border text-center">
                                            <button className="text-red-500 hover:text-red-700 p-1">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="border-b hover:bg-gray-50">
                                        <td className="py-3 px-4 border text-right">
                                            {locale === 'ar' ? 'أشعة' : 'X-Ray'}
                                        </td>
                                        <td className="py-3 px-4 border">
                                            <input
                                                type="number"
                                                value={xrayPrice}
                                                onChange={(e) => setXrayPrice(Number(e.target.value))}
                                                className="w-full p-1 border rounded text-right"
                                            />
                                        </td>
                                        <td className="py-3 px-4 border text-center">
                                            <button className="text-red-500 hover:text-red-700 p-1">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Notes */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1">
                                {locale === 'ar' ? 'ملاحظات' : 'Notes'}
                            </label>
                            <textarea
                                className="w-full p-3 border rounded"
                                placeholder={locale === 'ar' ? 'أدخل أي ملاحظات هنا...' : 'Enter any notes here...'}
                            ></textarea>
                        </div>
                    </div>

                    {/* Calculations sidebar */}
                    <div className="lg:w-1/4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h5 className="font-bold mb-4 text-center">
                            {locale === 'ar' ? 'تفاصيل الفاتورة' : 'Invoice Details'}
                        </h5>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>{locale === 'ar' ? 'المبلغ الإجمالي:' : 'Total Amount:'}</span>
                                <span className="font-medium">300.00 SAR</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span>{locale === 'ar' ? 'الخصم:' : 'Discount:'}</span>
                                <span className="text-red-500 font-medium">-30.00 SAR</span>
                            </div>

                            <div className="flex justify-between items-center border-b pb-2">
                                <span>{locale === 'ar' ? 'المبلغ بعد الخصم:' : 'Amount After Discount:'}</span>
                                <span className="font-medium">270.00 SAR</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span>{locale === 'ar' ? 'الضريبة (15%):' : 'Tax (15%):'}</span>
                                <span className="font-medium">+40.50 SAR</span>
                            </div>

                            <div className="flex justify-between items-center border-t pt-2 border-b pb-2">
                                <span className="font-bold">{locale === 'ar' ? 'الإجمالي النهائي:' : 'Final Total:'}</span>
                                <span className="font-bold text-lg">310.50 SAR</span>
                            </div>

                            <div className="flex justify-between items-center bg-yellow-50 p-2 rounded border border-yellow-100">
                                <span>{locale === 'ar' ? 'كل قسط:' : 'Each Installment:'}</span>
                                <span className="font-medium">103.50 SAR</span>
                            </div>

                            <div className="space-y-2 mt-4">
                                <h6 className="font-medium">{locale === 'ar' ? 'تفاصيل الدفع:' : 'Payment Details:'}</h6>

                                <div className="flex justify-between items-center">
                                    <span>{locale === 'ar' ? 'نقدي:' : 'Cash:'}</span>
                                    <input
                                        type="number"
                                        value={cashPayment}
                                        onChange={(e) => setCashPayment(Number(e.target.value))}
                                        className="w-24 p-1 border rounded text-right"
                                    />
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>{locale === 'ar' ? 'بطاقة:' : 'Card:'}</span>
                                    <input
                                        type="number"
                                        defaultValue="0"
                                        className="w-24 p-1 border rounded text-right bg-gray-100"
                                        disabled
                                    />
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>{locale === 'ar' ? 'تحويل بنكي:' : 'Bank Transfer:'}</span>
                                    <input
                                        type="number"
                                        defaultValue="0"
                                        className="w-24 p-1 border rounded text-right bg-gray-100"
                                        disabled
                                    />
                                </div>

                                <div className="flex justify-between items-center pt-2 border-t">
                                    <span>{locale === 'ar' ? 'المدفوع:' : 'Paid:'}</span>
                                    <span className="font-medium">100.00 SAR</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>{locale === 'ar' ? 'المتبقي:' : 'Remaining:'}</span>
                                    <span className="font-bold text-red-500">210.50 SAR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit button */}
                <div className="mt-6 text-center">
                    <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium">
                        {locale === 'ar' ? 'حفظ الفاتورة' : 'Save Invoice'}
                    </button>
                </div>
            </div>
        </div>
    );
}
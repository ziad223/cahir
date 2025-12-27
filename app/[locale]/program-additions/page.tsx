'use client';
import React from 'react';
import Container from '@/components/shared/formcomponents/Container';
import Table, { Column } from '@/components/shared/reusableComponents/Table'; // ← استدعاء الجدول

const Page = () => {
    // الأعمدة
    const columns: Column[] = [
        { label: '#', key: 'id' },
        { label: 'اضافات البرنامج', key: 'feature' },
        { label: 'المميزات', key: 'description' },
        { label: 'السعر', key: 'price' },
        { label: 'الاضافات المفعله', key: 'status' },
        { label: 'طلب الاضافة', key: 'action' },
    ];

    // البيانات
    const data = [
        {
            id: '1',
            feature: 'إدارة الحجوزات',
            description: 'تنظيم وحجز المواعيد بسهولة',
            price: '50 ج/شهريًا',
            status: 'مفعّلة',
            action: <button className="text-blue-600 underline">إلغاء</button>,
        },
        {
            id: '2',
            feature: 'تقارير تفصيلية',
            description: 'عرض وتحليل شامل للبيانات',
            price: '70 ج/شهريًا',
            status: 'غير مفعّلة',
            action: <button className="text-blue-600 underline">طلب الآن</button>,
        },
        {
            id: '3',
            feature: 'إشعارات العملاء',
            description: 'تنبيه المستخدمين تلقائيًا',
            price: '30 ج/شهريًا',
            status: 'مفعّلة',
            action: <button className="text-blue-600 underline">تعطيل</button>,
        },
    ];

    return (
        <Container>
            <div className="pt-10">
                <h2 className="text-2xl font-bold text-right text-gray-800 border-b border-gray-200 pb-4">
                    اضافات البرنامج
                </h2>

                <Table columns={columns} data={data} />
            </div>
        </Container>
    );
};

export default Page;

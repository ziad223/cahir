'use client';
import Container from '@/components/shared/formcomponents/Container';
import React, { useState, FC } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: 'كيف يمكنني تسجيل الدخول؟',
        answer: 'يمكنك تسجيل الدخول من خلال الضغط على زر تسجيل الدخول أعلى الصفحة وإدخال بياناتك بشكل صحيح.',
    },
    {
        question: 'كيف أتابع حالة طفلي؟',
        answer: 'عند الدخول إلى صفحة الطفل، ستجد كل التفاصيل الخاصة بالحالة والتقارير بشكل محدث.',
    },
    {
        question: 'هل يمكن لأفراد العائلة الدخول؟',
        answer: 'نعم، يمكنهم استخدام بيانات تسجيل الدخول الخاصة بهم للوصول إلى صفحة الطفل ومتابعة التفاصيل.',
    },
];

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-right py-4 px-5 hover:bg-gray-50 transition duration-200"
        >
            <span className="text-gray-700 font-medium text-base">{question}</span>
            {isOpen ? (
                <FiChevronUp className="text-gray-500 text-lg" />
            ) : (
                <FiChevronDown className="text-gray-500 text-lg" />
            )}
        </button>
        {isOpen && (
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-gray-50">
                {answer}
            </div>
        )}
    </div>
);

const Page: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col gap-2 items-start justify-center py-12 px-4">
             
            <Container className="w-full  bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-right text-gray-800 pb-4">
                    دليل الاستخدام
                </h2>

                <div className="mt-4 border border-gray-300 rounded-md overflow-hidden">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggle(index)}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Page;

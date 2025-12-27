// components/study-case-form/FormSection.tsx
import React from 'react';

interface FormSectionProps {
    title: string;
    children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold text-center bg-yellow-400 text-black w-full p-2 inline-block mx-auto">
                {title}
            </h2>
            {children}
        </div>
    );
};

export default FormSection;
// components/study-case-form/DateInput.tsx
import React from 'react';

interface DateInputProps {
    label: string;
    name: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, name }) => {
    return (
        <div className="col-span-1">
            <label className="block text-sm font-bold mb-1 text-black">{label}</label>
            <input
                type="date"
                name={name}
                className="w-full p-2 border rounded text-black"
            />
        </div>
    );
};

export default DateInput;
// components/study-case-form/RadioGroup.tsx
import React from 'react';

interface RadioGroupProps {
    label: string;
    name: string;
    options: { label: string; value: string }[];
    withAdditionalField?: boolean;
    additionalFieldLabel?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
    label,
    name,
    options,
    withAdditionalField = false,
    additionalFieldLabel = ''
}) => {
    return (
        <div className={options.length > 2 ? 'md:col-span-2' : 'col-span-1'}>
            <label className="block text-sm font-bold mb-1 text-black">{label}</label>
            <div className={`flex ${options.length > 2 ? 'flex-wrap gap-2' : 'space-x-4'} mb-2`}>
                {options.map((option) => (
                    <label key={option.value} className="inline-flex text-sm items-center text-black">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            className="form-radio mx-2"
                        />
                        <span className="ml-2">{option.label}</span>
                    </label>
                ))}
            </div>
            {withAdditionalField && (
                <>
                    <label className="block text-sm font-bold mb-1 text-black">{additionalFieldLabel}</label>
                    <input type="text" className="w-full p-2 border rounded text-black outline-none" />
                </>
            )}
        </div>
    );
};

export default RadioGroup;
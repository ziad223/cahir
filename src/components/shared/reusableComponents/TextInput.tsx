// components/study-case-form/TextInput.tsx
import React from 'react';

interface TextInputProps {
    label?: string;
    name: string;
    defaultValue?: string;
    value?: string; // ← Added optional value prop
    disabled?: boolean;
    placeholder?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    defaultValue = '',
    value, // ← Added value prop
    disabled = false,
    placeholder = '',
    type = 'text',
    onChange,
}) => {
    return (
        <div className="col-span-1">
            {label && (
                <label className="block text-sm font-bold mb-1 text-black">{label}</label>
            )}
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                value={value} // ← Added value attribute
                disabled={disabled}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full p-2 border rounded text-black outline-none text-sm"
            />
        </div>
    );
};

export default TextInput;
// components/study-case-form/TextArea.tsx
import React from 'react';

interface TextAreaProps {
  label: string;
  name?: string;
  rows?: number;
  defaultValue?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ 
  label, 
  name, 
  rows = 3, 
  defaultValue = '' 
}) => {
  return (
    <div className="col-span-1 md:col-span-2">
      <label className="block text-sm font-bold mb-1">{label}</label>
      <textarea
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        className="w-full p-2 border rounded outline-none"
      />
    </div>
  );
};

export default TextArea;
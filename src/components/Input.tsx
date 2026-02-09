import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export function Input({ label, value, onChange, type = 'text' }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} className="border rounded-md px-3 py-2" />
    </div>
  );
}

import React from 'react';
import Select, { ValueType, OptionTypeBase } from 'react-select';

interface Option {
  name: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  value: ValueType<Option>;
  onChange: (value: ValueType<Option>) => void;
  placeholder?: string;
}

const CustomSelect2 = ({
  options,
  value,
  onChange,
  placeholder,
}: CustomSelectProps) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      styles={{
        control: (provided) => ({
          ...provided,
          borderColor: '#ccc',
          borderRadius: '4px',
        }),
        placeholder: (provided) => ({
          ...provided,
          color: '#999',
        }),
      }}
    />
  );
};

export default CustomSelect2;
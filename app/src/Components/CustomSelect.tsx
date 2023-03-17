import React, { FC, useState } from 'react';

type SelectProps = {
  items: string[];
  onSelect: (selectedItem: string) => void;
};

const CustomSelect: FC<SelectProps> = ({ items, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedItem(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <select value={selectedItem} onChange={handleSelect}>
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};


  );

 
export default CustomSelect;
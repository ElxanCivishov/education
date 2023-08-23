import React from "react";

interface CheckboxProps {
  label: string;
  isPresent: boolean;
  handleChange: (newValue: boolean) => void;
}

const InputWithPresentCheckbox: React.FC<CheckboxProps> = ({
  label,
  isPresent,
  handleChange,
}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.checked);
  };

  return (
    <div className="flex items-center mb-2">
      <label
        htmlFor="dateIsPresent"
        className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
      >
        {label}
      </label>
      <input
        id="dateIsPresent"
        type="checkbox"
        value=""
        checked={isPresent}
        onChange={handleCheckboxChange}
        className="w-4 h-4 accent-[#038477]"
      />
    </div>
  );
};

export default InputWithPresentCheckbox;

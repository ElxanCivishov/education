interface inputProps {
  value: string | number;
  type: string;
  name: string;
  checkValidate?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<inputProps> = ({
  value,
  type,
  handleChange,
  placeholder,
  checkValidate,
  name,
  min,
  max,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      min={min}
      max={max}
      onChange={(e) => handleChange(e)}
      className={`date-input w-full px-3 py-2 bg-LightColor rounded-full border placeholder:text-slate-400 text-gray-600 ${
        checkValidate && (value === "" || (max && max < +value))
          ? "outline-none  border-red-300 border-2"
          : "border-transparent outline-[#d9d9d9]"
      }`}
      placeholder={placeholder}
    />
  );
};

export default FormInput;

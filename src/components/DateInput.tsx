interface dateProps {
  startDate: string;
  checkValidate: boolean;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: React.FC<dateProps> = ({
  startDate,
  checkValidate,
  handleChange,
  name,
}) => {
  return (
    <div
      className={`flex gap-2 items-center w-full px-3 py-2   rounded-full border bg-LightColor ${
        checkValidate && startDate === ""
          ? "outline-none  border-red-300 border-2"
          : "border "
      }`}
    >
      <input
        name={name}
        type="date"
        autoComplete="off"
        value={startDate}
        onChange={handleChange}
        className="date-input w-full outline-none placeholder:text-slate-400 text-gray-600 bg-transparent"
      />
    </div>
  );
};

export default DateInput;

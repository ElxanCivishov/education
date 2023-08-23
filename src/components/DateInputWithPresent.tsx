import dateIcon from "../assets/images/date-icon.svg";

interface dateProps {
  endDate: string;
  name: string;
  checkValidate: boolean;
  isPresent: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInputWithPresent: React.FC<dateProps> = ({
  endDate,
  name,
  checkValidate,
  handleChange,
  isPresent,
}) => {
  return (
    <div
      className={`flex gap-2 items-center w-full px-3 py-2   rounded-full border  ${
        isPresent ? "bg-gray-300" : "bg-LightColor"
      } ${
        checkValidate && endDate === "" ? " border-red-300 border-2" : "border"
      }`}
    >
      <input
        id={name}
        name={name}
        type="date"
        autoComplete="off"
        value={endDate}
        onChange={handleChange}
        disabled={isPresent}
        className="date-input w-full placeholder:text-slate-400 text-gray-600 bg-transparent outline-none "
      />
      {isPresent && <img src={dateIcon} alt="" />}
    </div>
  );
};

export default DateInputWithPresent;

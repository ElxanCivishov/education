import downIcon from "../assets/images/down.svg";

interface DropdownProps {
  data: string[];
  placeholder: string;
  open: boolean;
  checkValidate: boolean;
  handleClick: () => void;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({
  data,
  placeholder,
  handleClick,
  checkValidate,
  open,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <div className="dropdown relative w-full">
      <div
        className={`relative w-full flex items-center justify-between px-3 py-2 bg-LightColor rounded-full cursor-pointer ${
          checkValidate && !selectedItem
            ? "border-2 border-red-300"
            : "border-none"
        }`}
        onClick={handleClick}
      >
        <span
          className={`${selectedItem ? "text-PrimaryColor" : "text-slate-400"}`}
        >
          {selectedItem || placeholder}
        </span>
        <span className="pr-2">
          <img
            src={downIcon}
            alt=""
            className={`${open ? "rotate-180" : ""}`}
          />
        </span>
      </div>
      {open && (
        <div className="absolute top-10 left-0 mx-4 z-10 bg-LightColor  shadow-md overflow-y-auto w-auto max-h-[150px] min-w-[235px]">
          <ul className="space-y-2  text-sm w-full" onClick={handleClick}>
            {data.map((item, i) => (
              <li
                key={i}
                className={`flex items-center justify-between w-full cursor-pointer hover:bg-LightHoverColor hover:text-PrimaryColor px-4 py-2 group hover:font-medium ${
                  item === selectedItem ? "font-medium" : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <span>{item}</span>
                <span
                  className={`w-3 h-3 opacity-0 rounded-full mx-3 group-hover:opacity-100 border border-BorderColor ${
                    item === selectedItem
                      ? "bg-PrimaryColor opacity-100"
                      : "bg-white"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

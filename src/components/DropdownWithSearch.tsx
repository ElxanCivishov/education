import React, { useState } from "react";
import downIcon from "../assets/images/down.svg";
import searchIcon from "../assets/images/search.svg";

interface DropdownProps {
  data: string[];
  open: boolean;
  checkValidate: boolean;
  placeholder: string;
  handleClick: () => void;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownWithSearch: React.FC<DropdownProps> = ({
  data,
  handleClick,
  open,
  checkValidate,
  placeholder,
  selectedItem,
  setSelectedItem,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  };

  const filteredCountrys = data.filter((country: string) =>
    country.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <label
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
      </label>
      {open && (
        <div className="absolute top-10 left-0 mx-4 z-10 bg-LightColor  shadow-md overflow-y-auto w-auto max-h-[150px]">
          <div className="flex items-center">
            <img src={searchIcon} alt="icon" className="w-6 ms-2" />
            <input
              type="text"
              className="w-full bg-transparent px-2 border border-none outline-none rounded-md text-slate-400"
              placeholder="Axtarın..."
              onChange={handleInputChange}
              value={searchInput}
            />
          </div>
          <ul className="space-y-2  text-sm" onClick={handleClick}>
            {filteredCountrys.map((item, i) => (
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

export default DropdownWithSearch;

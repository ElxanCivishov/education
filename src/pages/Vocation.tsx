import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownWithSearch from "../components/DropdownWithSearch";
import DateInput from "../components/DateInput";
import DateInputWithPresent from "../components/DateInputWithPresent";
import NextBtn from "../components/NextBtn";

import { countries, professions } from "../assets/data";

import Level from "../components/Level";
import FormInput from "../components/FormInput";
import BackLink from "../components/BackLink";
import { DateRange, localExam } from "../types";
import InputWithPresentCheckbox from "../components/InputWithPresentCheckbox";
import Criteria from "../components/Criteria";
import SaveButton from "../components/SaveButton";

const initialDateRange: DateRange = {
  startDate: "",
  endDate: "",
};

const initialLocalExam: localExam = {
  title: "Local imtahan",
  exam: "",
  examScore: 0,
  totalScore: 0,
};

const Vocation: React.FC = () => {
  const navigate = useNavigate();
  const [checkValidate, setCheckValidate] = useState<boolean>(false);

  const [openCountry, setOpenCountry] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const [openPrefession, setOpenPrefession] = useState<boolean>(false);
  const [selectedPrefession, setSelectedPrefession] = useState<string>("");
  const [collageName, setCollageName] = useState<string>("");

  const [dateRange, setDateRange] = useState<DateRange>(initialDateRange);
  const [dateIsPresent, setDateIsPresent] = useState<boolean>(false);

  const [localExamScore, setLocalExamScore] =
    useState<localExam>(initialLocalExam);

  const [openApplicationCriteria, setOpenApplicationCriteria] =
    useState<boolean>(false);

  const handleChangeLocalExam = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalExamScore({ ...localExamScore, [name]: value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDateRange({ ...dateRange, [name]: value });
  };

  const handleChangeCollageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCollageName(e.target.value);
  };

  const handleChangeDateInputCheckbox = () => {
    setDateIsPresent(!dateIsPresent);
    if (!dateIsPresent) {
      setDateRange({ ...dateRange, endDate: "present" });
    } else {
      setDateRange({ ...dateRange, endDate: "" });
    }
  };

  const handleCountry = () => {
    setOpenCountry(!openCountry);
    setOpenPrefession(false);
    setOpenApplicationCriteria(false);
  };

  const handlePrefession = () => {
    setOpenCountry(false);
    setOpenPrefession(!openPrefession);
    setOpenApplicationCriteria(false);
  };

  const handleApplicationCriteriaChange = () => {
    setOpenCountry(false);
    setOpenPrefession(false);
    setOpenApplicationCriteria(!openApplicationCriteria);
  };

  const handleSaveButton = () => {
    alert("save");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedCountry) {
      navigate("/remember");
    } else {
      setCheckValidate(true);
    }
  };

  return (
    <>
      <form
        action=""
        className="flex flex-col gap-5 mb-10 "
        onSubmit={handleSubmit}
      >
        <div className=" min-w-[550px] w-full z-10 rounded-xl bg-transparent  py-8 px-8 h-[610px] overflow-y-auto shadow max-w-lg flex flex-col gap-4">
          <h1 className="text-PrimaryColor text-[18px]">
            Orta texniki və ali təhsil usulları
          </h1>
          <div className="h-[22px] w-full rounded-lg flex">
            <Level level={1} active={true} />
            <Level level={2} active={true} />
            <Level level={3} active={false} />
          </div>

          <div className="w-full">
            <p className="mb-2 text-PrimaryColor">
              Peşə təhsili-
              <span className="text-black ms-1">
                təhsilinizlə bağlı detalları qeyd edin:
              </span>
            </p>

            <DropdownWithSearch
              data={countries}
              open={openCountry}
              checkValidate={checkValidate}
              placeholder="Ölkə..."
              handleClick={handleCountry}
              selectedItem={selectedCountry}
              setSelectedItem={setSelectedCountry}
            />
          </div>
          <div className="w-full">
            <p className="mb-2">Kollecin adı:</p>
            <FormInput
              value={collageName}
              name="collageName"
              checkValidate={checkValidate}
              handleChange={handleChangeCollageName}
              placeholder="ADNSU"
            />
          </div>
          <div className="w-full">
            <p className="mb-2">Ixtisas:</p>
            <DropdownWithSearch
              checkValidate={checkValidate}
              data={professions}
              open={openPrefession}
              placeholder="Informasiya Texnologiyaları..."
              handleClick={handlePrefession}
              selectedItem={selectedPrefession}
              setSelectedItem={setSelectedPrefession}
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <div className="flex flex-col w-full">
              <p className="mb-2">Kollecə qəbul olma tarixi:</p>
              <DateInput
                name="startDate"
                checkValidate={checkValidate}
                startDate={dateRange.startDate}
                handleChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="mb-2">Kolleci bitirmə tarixi:</p>
              <DateInputWithPresent
                name="endDate"
                checkValidate={checkValidate}
                endDate={dateRange.endDate}
                isPresent={dateIsPresent}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-end items-center w-full">
            <InputWithPresentCheckbox
              label="Hal hazırda oxuyuram"
              isPresent={dateIsPresent}
              handleChange={handleChangeDateInputCheckbox}
            />
          </div>
          <Criteria
            handleApplicationCriteriaChange={handleApplicationCriteriaChange}
            openApplicationCriteria={openApplicationCriteria}
            checkValidate={checkValidate}
            localExamScore={localExamScore}
            handleChangeLocalExam={handleChangeLocalExam}
          />
          <div className="flex items-center justify-center w-full mt-5 mb-10">
            <SaveButton handleClick={handleSaveButton} text="Yadda saxla" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <BackLink path="/" text="Geri" />
          <NextBtn text="Növbəti" />
        </div>
      </form>
    </>
  );
};

export default Vocation;

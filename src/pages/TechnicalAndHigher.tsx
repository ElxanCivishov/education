import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { DateRange, appealExamProps, localExam } from "../uitils/types";
import { countries, eduLevels, professions } from "../assets/data";
import { initialDateRange, initialLocalExam } from "../uitils/initialValues";

import {
  addEducation,
  appealExam,
} from "../features/education/educationLevelSlice";

import { RootState } from "../app/store";
import {
  BackLink,
  Criteria,
  DateInputWithPresent,
  Dropdown,
  FormInput,
  InputWithPresentCheckbox,
  Level,
  NextBtn,
  SaveButton,
  DropdownWithSearch,
  DateInput,
} from "../components";
import { closeDropdown } from "../uitils/closeDropdown";

const TechnicalAndHigher: React.FC = () => {
  const { educationSecondLevel, educationFirstLevel } = useSelector(
    (state: RootState) => state.educationLevel
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [appealItems, setAppealItems] = useState<appealExamProps[]>([]);

  const [checkValidate, setCheckValidate] = useState<boolean>(false);

  const [openCountry, setOpenCountry] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const [openEdu, setOpenEdu] = useState<boolean>(false);
  const [selectedEdu, setSelectedEdu] = useState<string>("");

  const [openPrefession, setOpenPrefession] = useState<boolean>(false);
  const [selectedPrefession, setSelectedPrefession] = useState<string>("");
  const [collageName, setCollageName] = useState<string>("");

  const [dateRange, setDateRange] = useState<DateRange>(initialDateRange);
  const [dateIsPresent, setDateIsPresent] = useState<boolean>(false);

  const [localExamScore, setLocalExamScore] =
    useState<localExam>(initialLocalExam);

  useEffect(() => {
    if (
      !educationFirstLevel.edu ||
      !educationFirstLevel.employment ||
      !educationFirstLevel.schollResult
    ) {
      navigate("/");
    }

    const removeClickListener = closeDropdown({
      handleClose: handleCloseClickOutside,
    });

    return () => {
      removeClickListener();
    };
  }, []);

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

  const handleSelectEdu = () => {
    setOpenCountry(false);
    setOpenPrefession(false);
    setOpenApplicationCriteria(false);
    setOpenEdu(!openEdu);
  };

  const handleCountry = () => {
    setOpenCountry(!openCountry);
    setOpenPrefession(false);
    setOpenEdu(false);
    setOpenApplicationCriteria(false);
  };

  const handlePrefession = () => {
    setOpenCountry(false);
    setOpenEdu(false);
    setOpenPrefession(!openPrefession);
    setOpenApplicationCriteria(false);
  };

  const handleApplicationCriteriaChange = () => {
    setOpenCountry(false);
    setOpenPrefession(false);
    setOpenEdu(false);
    setOpenApplicationCriteria(!openApplicationCriteria);
  };

  const handleCloseClickOutside = () => {
    setOpenCountry(false);
    setOpenPrefession(false);
    setOpenEdu(false);
    setOpenApplicationCriteria(false);
  };

  // ! appeal
  const [openApplicationCriteria, setOpenApplicationCriteria] =
    useState<boolean>(false);

  const [selectedApplicationCriteria, setSelectedApplicationCriteria] =
    useState<appealExam[]>([]);

  const toggleItemApplicationCriteria = (item: appealExam) => {
    const existingIndex = selectedApplicationCriteria.findIndex(
      (el) => el.title === item.title
    );

    if (existingIndex !== -1) {
      setSelectedApplicationCriteria((prevSelectedItems) => {
        const updatedItems = [...prevSelectedItems];
        updatedItems.splice(existingIndex, 1);
        const updatedAppealItems = appealItems.filter(
          (appeal) => appeal.title !== item.title
        );
        setAppealItems(updatedAppealItems);
        console.log(updatedAppealItems);
        return updatedItems;
      });
    } else {
      setSelectedApplicationCriteria((prevSelectedItems) => [
        ...prevSelectedItems,
        item,
      ]);
      setAppealItems((appealItems) => [...appealItems, item]);
      console.log(appealItems);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string,
    field: "resultOne" | "resultTwo"
  ) => {
    const updatedItems = [...appealItems];
    updatedItems.map((item) => {
      if (item.title === title) {
        return (item.results[field] = e.target.value);
      }
    });
    setAppealItems(updatedItems);
    console.log(appealItems);
  };

  const handleSaveButton = () => {
    if (
      selectedCountry &&
      collageName &&
      selectedPrefession &&
      dateRange.startDate &&
      dateRange.endDate
    ) {
      const updatedVocationData = {
        educationType: selectedEdu ? selectedEdu : educationFirstLevel.edu,
        country: selectedCountry,
        companyName: collageName,
        profession: selectedPrefession,
        dateRange,
        localExam: localExamScore.exam ? localExamScore : undefined,
        appealExam: appealItems,
      };

      dispatch(addEducation(updatedVocationData));
      navigate("/remember");
    } else {
      setCheckValidate(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (educationSecondLevel.length > 0) {
      navigate("/olympics");
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

          {educationSecondLevel.length > 0 && (
            <div className="w-full">
              <p className="mb-2 text-PrimaryColor">
                {educationFirstLevel.edu === "Peşə təhsili" &&
                educationSecondLevel.length === 0
                  ? "Peşə təhsili - "
                  : educationFirstLevel.edu !== "Peşə təhsili" &&
                    educationSecondLevel.length === 0
                  ? "Bakalavr - "
                  : educationSecondLevel.length + 1 + "-ci"}

                <span className="text-black ms-1">təhsilinizi qeyd edin</span>
              </p>
              <Dropdown
                data={eduLevels}
                placeholder="Seçin..."
                open={openEdu}
                checkValidate={checkValidate}
                handleClick={handleSelectEdu}
                selectedItem={selectedEdu}
                setSelectedItem={setSelectedEdu}
              />
            </div>
          )}
          <div className="w-full">
            <p className="mb-2 text-PrimaryColor">
              {selectedEdu
                ? selectedEdu
                : educationFirstLevel.edu === "Peşə təhsili" &&
                  educationSecondLevel.length === 0
                ? "Peşə təhsili - "
                : educationSecondLevel.length >= 0
                ? educationSecondLevel.length + 1 + "-ci"
                : educationFirstLevel.edu}
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
            <p className="mb-2">
              {educationSecondLevel.length === 0 &&
              educationFirstLevel.edu === "Peşə təhsili"
                ? "Kollecin "
                : selectedEdu === "Peşə təhsili"
                ? "Kollecin "
                : "Universitet "}
              adı:
            </p>
            <FormInput
              type="text"
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
              <p className="mb-2">
                {educationSecondLevel.length === 0 &&
                educationFirstLevel.edu === "Peşə təhsili"
                  ? "Kollecə "
                  : selectedEdu === "Peşə təhsili"
                  ? "Kollecə "
                  : "Universitetə "}
                qəbul olma tarixi:
              </p>
              <DateInput
                name="startDate"
                checkValidate={checkValidate}
                startDate={dateRange.startDate}
                handleChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="mb-2">
                {educationSecondLevel.length === 0 &&
                educationFirstLevel.edu === "Peşə təhsili"
                  ? "Kolleci "
                  : selectedEdu === "Peşə təhsili"
                  ? "Kolleci "
                  : "Universiteti "}
                bitirmə tarixi:
              </p>
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
            toggleItemApplicationCriteria={toggleItemApplicationCriteria}
            selectedApplicationCriteria={selectedApplicationCriteria}
            handleInputChange={handleInputChange}
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

export default TechnicalAndHigher;

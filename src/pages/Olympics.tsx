import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Level, BackLink, NextBtn, Dropdown } from "../components";

import { subjects, olympicsPlaces, olympicsStages } from "../assets/data";
import {
  resetEducationOlympicsLevel,
  updateEducationOlympicsLevel,
} from "../features/education/educationLevelSlice";
import { closeDropdown } from "../uitils/closeDropdown";
import { RootState } from "../app/store";

const olymipcsStatus: string[] = ["Bəli", "Xeyr"];

const Olympics: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { educationOlympicsLevel, educationFirstLevel } = useSelector(
    (state: RootState) => state.educationLevel
  );

  const [checkValidate, setCheckValidate] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<number>();

  const [openSubject, setOpenSubject] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string>(
    educationOlympicsLevel.subject
  );

  const [openOlympicsStages, setOpenOlympicsStages] = useState<boolean>(false);
  const [selectedOlympicsStages, setSelectedOlympicsStages] = useState<string>(
    educationOlympicsLevel.stage
  );

  const [openOlympicsPlace, setOpenOlympicsPlace] = useState<boolean>(false);

  const [selectedOlympicsPlace, setSelectedOlympicsPlace] = useState<string>(
    educationOlympicsLevel.place
  );

  useEffect(() => {
    if (!educationFirstLevel.edu) {
      navigate("/");
    }

    const removeClickListener = closeDropdown({
      handleClose: handleCloseClickOutside,
    });

    return () => {
      removeClickListener();
    };
  }, [selectedStatus]);

  const handleCloseClickOutside = () => {
    setOpenSubject(false);
    setOpenOlympicsPlace(false);
    setOpenOlympicsStages(false);
  };

  const handleSubject = () => {
    setOpenSubject(!openSubject);
    setOpenOlympicsPlace(false);
    setOpenOlympicsStages(false);
  };

  const handleOlympicsStages = () => {
    setOpenSubject(false);
    setOpenOlympicsPlace(false);
    setOpenOlympicsStages(!openOlympicsStages);
  };

  const handleOlympicsPlace = () => {
    setOpenSubject(false);
    setOpenOlympicsStages(false);
    setOpenOlympicsPlace(!openOlympicsPlace);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCheckValidate(true);
    if (selectedStatus === 0) {
      if (selectedSubject && selectedOlympicsPlace && selectedOlympicsStages) {
        dispatch(
          updateEducationOlympicsLevel({
            subject: selectedSubject,
            place: selectedOlympicsPlace,
            stage: selectedOlympicsStages,
          })
        );
        navigate("/");
      }
    } else {
      dispatch(resetEducationOlympicsLevel());
      navigate("/");
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
            <Level level={3} active={true} />
          </div>
          <div className="w-full items-center ">
            <p className="mb-2">Olimpiyada qalibi olmusunuzmu?</p>
            <ul className="items-center flex w-full text-sm font-medium text-gray-900 bg-white gap-2 ">
              {olymipcsStatus &&
                olymipcsStatus.map((status, i) => (
                  <li
                    key={i}
                    className="w-full max-w-[150px] border-none bg-LightColor flex items-center justify-center gap-1 px-4 py-2 rounded-full cursor-pointer relative"
                    onClick={() => setSelectedStatus(i)}
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      {status}
                    </span>
                    <span className="border-2 border-BorderDarkColor bg-LightHoverColor rounded-full p-[1px] flex items-center justify-center absolute right-3 top-2.5">
                      <div
                        className={`w-2.5 h-2.5 block rounded-full ${
                          selectedStatus === i
                            ? "bg-PrimaryColor"
                            : "bg-LightColor"
                        }  `}
                      ></div>
                    </span>
                  </li>
                ))}
            </ul>
          </div>
          {selectedStatus === 0 && (
            <>
              <div className="w-full">
                <p className="mb-2">
                  Hansı fənn üzrə olimpiyada qalibi olmusunuz?
                  <span className="me-1 text-red-500">*</span>
                </p>
                <Dropdown
                  data={subjects}
                  placeholder="Seçin..."
                  open={openSubject}
                  checkValidate={checkValidate}
                  handleClick={handleSubject}
                  selectedItem={selectedSubject}
                  setSelectedItem={setSelectedSubject}
                />
              </div>
              <div className="w-full">
                <p className="mb-2">
                  Ən yüksək hansı mərhələ üzrə olimpiada qalibi olmusunuz?
                  <span className="me-1 text-red-500">*</span>
                </p>
                <Dropdown
                  data={olympicsStages}
                  placeholder="Seçin..."
                  open={openOlympicsStages}
                  checkValidate={checkValidate}
                  handleClick={handleOlympicsStages}
                  selectedItem={selectedOlympicsStages}
                  setSelectedItem={setSelectedOlympicsStages}
                />
              </div>
              <div className="w-full">
                <p className="mb-2">
                  Neçənci yer əldə etmisiniz?
                  <span className="me-1 text-red-500">*</span>
                </p>
                <Dropdown
                  data={olympicsPlaces}
                  placeholder="Seçin..."
                  open={openOlympicsPlace}
                  checkValidate={checkValidate}
                  handleClick={handleOlympicsPlace}
                  selectedItem={selectedOlympicsPlace}
                  setSelectedItem={setSelectedOlympicsPlace}
                />
              </div>
            </>
          )}
        </div>

        <div className="w-full flex items-center justify-between">
          <BackLink text="Geri" path="/technical-and-higher" />
          <NextBtn text="Növbəti" />
        </div>
      </form>
    </>
  );
};

export default Olympics;

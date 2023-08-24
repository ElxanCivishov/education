import { useState } from "react";
import downIcon from "../assets/images/down.svg";

import { applicationCriteria, criteria } from "../assets/data";
import FormInput from "./FormInput";
import { localExam } from "../uitils/types";
import { appealExam } from "../features/education/educationLevelSlice";

interface criteriaProps {
  checkValidate: boolean;
  localExamScore: localExam;
  handleChangeLocalExam: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleApplicationCriteriaChange: () => void;
  openApplicationCriteria: boolean;
  toggleItemApplicationCriteria: any;
  selectedApplicationCriteria: appealExam[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string,
    field: "resultOne" | "resultTwo"
  ) => void;
}

const Criteria: React.FC<criteriaProps> = ({
  handleChangeLocalExam,
  localExamScore,
  handleApplicationCriteriaChange,
  checkValidate,
  openApplicationCriteria,
  toggleItemApplicationCriteria,
  selectedApplicationCriteria,
  handleInputChange,
}) => {
  const [selectedCriterion, setSelectedCriterion] = useState<
    number | undefined
  >();

  return (
    <div>
      <div className="w-full items-center ">
        <p className="mb-2">Hansı meyyarlarla qəbul olmusunuz:</p>
        <ul className="items-center flex w-full text-sm font-medium text-gray-900 bg-white gap-2 ">
          {criteria &&
            criteria.map((criterion, i) => (
              <li
                key={i}
                className="w-full border-none bg-LightColor flex items-center justify-center gap-1 px-4 py-2 rounded-full cursor-pointer"
                onClick={() => setSelectedCriterion(i)}
              >
                <p className="w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                  {criterion}
                </p>
                <span className="border-2 border-BorderDarkColor bg-LightHoverColor rounded-full p-[1px] flex items-center justify-center">
                  <div
                    className={`w-2.5 h-2.5 block rounded-full ${
                      selectedCriterion === i
                        ? "bg-PrimaryColor"
                        : "bg-LightColor"
                    }  `}
                  ></div>
                </span>
              </li>
            ))}
        </ul>
      </div>

      {(selectedCriterion === 0 || selectedCriterion === 2) && (
        <div className="w-full items-center mt-3 ">
          <p className="mb-2">
            Lokal imtahanın adını, topladığınız bal və maksimal bal qeyd edin:
          </p>
          <div className="items-center flex w-full text-sm font-medium text-gray-900 bg-white gap-2 ">
            <FormInput
              type="text"
              value={localExamScore.exam}
              handleChange={handleChangeLocalExam}
              placeholder="imtahan"
              checkValidate={checkValidate}
              name="exam"
            />
            <FormInput
              type="text"
              value={localExamScore.examScore}
              handleChange={handleChangeLocalExam}
              placeholder="balınız"
              checkValidate={checkValidate}
              name="examScore"
            />
            <FormInput
              type="text"
              value={localExamScore.totalScore}
              handleChange={handleChangeLocalExam}
              placeholder="max bal"
              checkValidate={checkValidate}
              name="totalScore"
            />
          </div>
        </div>
      )}

      {(selectedCriterion === 1 || selectedCriterion === 2) && (
        <div className="w-full mt-3">
          <p className="mb-2 mt-3">
            Müraciət zamanı hansı kriteriyalarla müraciətinizin
            qiymətləndirildiyini qeyd edin:
          </p>
          <label className="relative w-full flex items-center justify-between ">
            <div className="flex items-center justify-between gap-3 w-full">
              <div
                className="flex items-center justify-between px-3 py-2  bg-LightColor rounded-full w-full"
                onClick={() => handleApplicationCriteriaChange()}
              >
                <span
                  className={`min-h-[25px] ${
                    selectedApplicationCriteria.length > 0
                      ? "text-PrimaryColor"
                      : "text-slate-400"
                  }`}
                >
                  {selectedApplicationCriteria.length > 0
                    ? selectedApplicationCriteria[
                        selectedApplicationCriteria.length - 1
                      ].title
                    : "Seçin..."}
                </span>
                <span className="pr-2">
                  <img
                    src={downIcon}
                    alt=""
                    className={`${openApplicationCriteria && "rotate-180"}`}
                  ></img>
                </span>
              </div>
              <button
                type="button"
                className="flex items-center justify-between px-3 py-2  bg-LightColor text-black rounded-full hover:text-PrimaryColor min-w-[100px]"
              >
                Əlavə et
                <span>+</span>
              </button>
            </div>

            {openApplicationCriteria && (
              <div className="flex items-center gap-3 z-10">
                <div className="absolute top-10 left-0 px-4 w-full max-w-[320px]">
                  <ul className="space-y-2 bg-LightColor shadow-md  overflow-y-auto w-full max-h-[150px] text-sm">
                    {applicationCriteria &&
                      applicationCriteria.map((appCriteria, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-between w-full cursor-pointer hover:bg-LightHoverColor hover:text-PrimaryColor px-4 py-2 group hover:font-medium"
                          onClick={() => {
                            handleApplicationCriteriaChange();
                            toggleItemApplicationCriteria(appCriteria);
                          }}
                        >
                          <span className="text-[14px]">
                            {appCriteria.title}
                          </span>
                          <span
                            className={`w-3 h-3 opacity-0 rounded-full mx-3 group-hover:opacity-100 border border-BorderColor ${
                              selectedApplicationCriteria.includes(appCriteria)
                                ? "bg-PrimaryColor opacity-100"
                                : "bg-white"
                            }`}
                          ></span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </label>
          {selectedApplicationCriteria.map((selAppCri, index) => {
            if (selAppCri.title === "Language test (IELTS TOEFL)") {
              return (
                <div
                  className="border rounded-lg p-5 mt-5 relative"
                  key={selAppCri.title}
                >
                  <p>
                    <span className="text-PrimaryColor me-1">
                      {selAppCri.title}
                    </span>
                    üzrə, nəticəni qeyd edin
                  </p>
                  <span
                    className="absolute right-4 top-5"
                    onClick={() => toggleItemApplicationCriteria(selAppCri)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="cursor-pointer text-2xl text-[#EE4A4A]/75 hover:text-[#EE4A4A]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9s9-4.038 9-9s-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7s7 3.14 7 7s-3.141 7-7 7zm.707-7l2.646-2.646a.502.502 0 0 0 0-.707a.502.502 0 0 0-.707 0L12 11.293L9.354 8.646a.5.5 0 0 0-.707.707L11.293 12l-2.646 2.646a.5.5 0 0 0 .707.708L12 12.707l2.646 2.646a.5.5 0 1 0 .708-.706L12.707 12z"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex gap-3 w-full items-center">
                    <input
                      type="text"
                      placeholder="IELTS nəticə"
                      className="mt-3 w-full px-4 py-2 bg-LightColor rounded-full border outline-[#d9d9d9] placeholder:text-slate-400"
                      onChange={(e) =>
                        handleInputChange(e, selAppCri.title, "resultOne")
                      }
                    />
                    <input
                      type="text"
                      placeholder="TOEFL nəticə"
                      className="mt-3 w-full px-4 py-2 bg-LightColor rounded-full border outline-[#d9d9d9] placeholder:text-slate-400"
                      onChange={(e) =>
                        handleInputChange(e, selAppCri.title, "resultTwo")
                      }
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="border rounded-lg p-5 mt-5 relative"
                  key={selAppCri.title}
                >
                  <p>
                    <span className="text-PrimaryColor me-1">
                      {selAppCri.title}
                    </span>
                    üzrə, nəticəni qeyd edin
                  </p>
                  <span
                    className="absolute right-4 top-5"
                    onClick={() => toggleItemApplicationCriteria(selAppCri)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="cursor-pointer text-2xl text-[#EE4A4A]/75 hover:text-[#EE4A4A]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9s9-4.038 9-9s-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7s7 3.14 7 7s-3.141 7-7 7zm.707-7l2.646-2.646a.502.502 0 0 0 0-.707a.502.502 0 0 0-.707 0L12 11.293L9.354 8.646a.5.5 0 0 0-.707.707L11.293 12l-2.646 2.646a.5.5 0 0 0 .707.708L12 12.707l2.646 2.646a.5.5 0 1 0 .708-.706L12.707 12z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Nəticə"
                    className="mt-3 w-full px-4 py-2 bg-LightColor rounded-full border outline-[#d9d9d9] placeholder:text-slate-400 text-gray-600"
                    onChange={(e) =>
                      handleInputChange(e, selAppCri.title, "resultOne")
                    }
                  />
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Criteria;

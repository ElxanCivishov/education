import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Level from "../components/Level";
import BackLink from "../components/BackLink";
import NextBtn from "../components/NextBtn";
import Dropdown from "../components/Dropdown";

const subjects: string[] = [
  "Riyaziyyat",
  "Tarix",
  "Coğrafiya",
  "Ana dili",
  "İnformatika",
  "Kimiya",
  "Fizika",
  "Rus dili",
  "İngilis dili",
];

const olympicsPlaces: string[] = [
  "1-ci yer (Qızıl medal)",
  "2-ci yer (Gümüş medal)",
  "3-ci yer (Bürünc medal)",
  "4-cü yer",
];

const olympicsStages: string[] = ["Respublika", "Rayon", "Region", "Dünya"];

const olymipcsStatus: string[] = ["Bəli", "Xeyr"];

const Olympics: React.FC = () => {
  const [checkValidate, setCheckValidate] = useState<boolean>(false);
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState<number>();

  const [openSubject, setOpenSubject] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  const [openOlympicsStages, setOpenOlympicsStages] = useState<boolean>(false);
  const [selectedOlympicsStages, setSelectedOlympicsStages] =
    useState<string>();

  const [dateIsPresent, setDateIsPresent] = useState<boolean>(true);

  const [openApplicationCriteria, setOpenApplicationCriteria] =
    useState<boolean>(false);

  const [selectedApplicationCriteria, setSelectedApplicationCriteria] =
    useState<string[]>([]);

  const handleSubject = () => {
    setOpenSubject(!openSubject);
    setOpenApplicationCriteria(false);
    setOpenOlympicsStages(false);
  };

  const handleOlympicsStages = () => {
    setOpenSubject(false);
    setOpenApplicationCriteria(false);
    setOpenOlympicsStages(!openOlympicsStages);
  };

  const handleApplicationCriteria = () => {
    setOpenSubject(false);
    setOpenOlympicsStages(false);
    setOpenApplicationCriteria(!openApplicationCriteria);
  };

  const handleRemember = () => {
    navigate("/remember");
  };

  return (
    <>
      <form action="" className="flex flex-col gap-5 mb-10 ">
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
            <div className="w-full items-center ">
              <p className="mb-2">
                Lokal imtahanın adını, topladığınız bal və maksimal bal qeyd
                edin:
              </p>
              <div className="items-center flex w-full text-sm font-medium text-gray-900 bg-white gap-2 ">
                <input
                  className="date-input w-full px-4 py-2 bg-LightColor rounded-full border outline-[#d9d9d9] placeholder:text-slate-400 text-gray-600"
                  placeholder="imtahan"
                />
                <input
                  className="date-input w-full px-4 py-2 bg-LightColor rounded-full border outline-[#d9d9d9] placeholder:text-slate-400 text-gray-600"
                  placeholder="bal"
                />
                <input
                  className="date-input w-full px-4 py-2 bg-LightColor rounded-full border outline-[#d9d9d9] placeholder:text-slate-400 text-gray-600"
                  placeholder="max bal"
                />
              </div>
            </div>
          )}
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
              selectedItem={selectedSubject}
              setSelectedItem={setSelectedSubject}
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
              open={openSubject}
              checkValidate={checkValidate}
              handleClick={handleSubject}
              selectedItem={selectedSubject}
              setSelectedItem={setSelectedSubject}
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <BackLink text="Geri" path="/" />
          <NextBtn text="Növbəti" />
        </div>
      </form>
    </>
  );
};

export default Olympics;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import NextBtn from "../components/NextBtn";
import Level from "../components/Level";

const employments: string[] = [
  "Təhsil alıram",
  "Çalışıram",
  "İşsiz",
  "Təhsil alıram və çalışıram",
  "Təhsil almıram",
];

const educationLevels: string[] = [
  "Orta təhsil",
  "Peşə təhsili",
  "Bakalavr",
  "Magistr",
  "PhD",
];

const mediumSchoolResults: string[] = ["Zərbəçi", "Əlaçı", "Heç biri"];

const EducationLevel: React.FC = () => {
  const navigate = useNavigate();

  const [openEmployment, setOpenEmployment] = useState<boolean>(false);
  const [selectedEmployment, setSelectedEmployment] = useState<string>("");

  const [openEdu, setOpenEdu] = useState<boolean>(false);
  const [selectedEdu, setSelectedEdu] = useState<string>("");

  const [openSchoolResult, setOpenSchoolResult] = useState<boolean>(false);
  const [selectedSchoolResult, setSelectedSchoolResult] = useState<string>("");

  const [checkValidate, setCheckValidate] = useState<boolean>(false);

  const handleSelectEmploye = () => {
    setOpenEmployment(!openEmployment);
    setOpenSchoolResult(false);
    setOpenEdu(false);
  };

  const handleSelectEdu = () => {
    setOpenEmployment(false);
    setOpenSchoolResult(false);
    setOpenEdu(!openEdu);
  };

  const handleSelectSchool = () => {
    setOpenEmployment(false);
    setOpenSchoolResult(!openSchoolResult);
    setOpenEdu(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedEdu && selectedEmployment && selectedSchoolResult) {
      if (selectedEdu === "Orta təhsil") {
        navigate("/olympics");
      } else if (selectedEdu === "Peşə təhsili") {
        navigate("/vocation");
      } else {
        navigate("/technical-and-higher");
      }
    } else {
      setCheckValidate(true);
    }
  };

  return (
    <>
      <form
        action=""
        className="flex flex-col gap-5 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className=" min-w-[500px] w-full z-10 rounded-xl bg-transparent  py-8 px-11 h-[610px] overflow-y-auto shadow max-w-lg flex flex-col gap-4">
          <h1 className="text-PrimaryColor text-[18px]">Ümumi suallar</h1>
          <div className="h-[22px] w-full rounded-lg flex">
            <Level level={1} active={true} />
            <Level level={2} active={false} />
            <Level level={3} active={false} />
          </div>

          <div className="w-full">
            <p className="mb-2">
              Hazırda məşğuliyyətiniz:
              <span className="text-red-500 ms-1">*</span>
            </p>

            <Dropdown
              data={employments}
              placeholder="Seçin..."
              open={openEmployment}
              checkValidate={checkValidate}
              handleClick={handleSelectEmploye}
              selectedItem={selectedEmployment}
              setSelectedItem={setSelectedEmployment}
            />
          </div>
          <div className="w-full">
            <p className="mb-2">
              Təhsiliniz:<span className="text-red-500 ms-1">*</span>
            </p>

            <Dropdown
              data={educationLevels}
              placeholder="Seçin..."
              open={openEdu}
              checkValidate={checkValidate}
              handleClick={handleSelectEdu}
              selectedItem={selectedEdu}
              setSelectedItem={setSelectedEdu}
            />
          </div>
          <div className="w-full">
            <p className="mb-2">
              Orta məktəb göstəriciləriniz aşağıdakılardan hansına uyğun gəlir?:
              <span className="text-red-500 ms-1">*</span>
            </p>

            <Dropdown
              data={mediumSchoolResults}
              placeholder="Seçin..."
              open={openSchoolResult}
              checkValidate={checkValidate}
              handleClick={handleSelectSchool}
              selectedItem={selectedSchoolResult}
              setSelectedItem={setSelectedSchoolResult}
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <NextBtn text="Növbəti" />
        </div>
      </form>
    </>
  );
};

export default EducationLevel;

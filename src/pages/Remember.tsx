import React, { useState } from "react";
import { Link } from "react-router-dom";
import eduFrame from "../assets/images/EduFrame.svg";
import arrowRight from "../assets/images/arrow-right.svg";
import arrowLeft from "../assets/images/arrow-left.svg";

const countries: string[] = [
  "Albaniya",
  "Almaniya",
  "Amerika Birləşmiş Ştatları",
  "Andorra",
  "Angola",
  "Barbados",
  "Baham Adaları",
  "Belarus",
  "Çili",
  "Çin",
  "Çad",
  "Estoniya",
  "Əfganıstan",
  "Fransa",
  "Hindistan",
  "Xorvatiya",
];

const professions: string[] = [
  "Orta təhsil",
  "Peşə təhsili",
  "Bakalavr",
  "Magistr",
  "PhD",
];

const criteria: string[] = ["Local imtahan", "Müraciyyət", "Hər ikisi"];

const applicationCriteria: string[] = [
  "Attestat - GPA",
  "Language test (IELTS TOEFL)",
  "GRE/GMAT",
  "SAT",
];

const Remember: React.FC = () => {
  const [openCountry, setOpenCountry] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("Ölkə...");

  const [openPrefession, setOpenPrefession] = useState<boolean>(false);
  const [selectedPrefession, setSelectedPrefession] = useState<string>(
    "Informasiya Texnologiyaları..."
  );

  const [dateIsPresent, setDateIsPresent] = useState<boolean>(true);

  const [selectedCriterion, setSelectedCriterion] = useState<number>();

  const [openApplicationCriteria, setOpenApplicationCriteria] =
    useState<boolean>(false);

  const [selectedApplicationCriteria, setSelectedApplicationCriteria] =
    useState<string[]>([]);

  const handleCountry = () => {
    setOpenCountry(!openCountry);
    setOpenApplicationCriteria(false);
    setOpenPrefession(false);
  };

  const handlePrefession = () => {
    setOpenCountry(false);
    setOpenApplicationCriteria(false);
    setOpenPrefession(!openPrefession);
  };

  const handleApplicationCriteria = () => {
    setOpenCountry(false);
    setOpenPrefession(false);
    setOpenApplicationCriteria(!openApplicationCriteria);
  };

  const toggleItemApplicationCriteria = (item: string) => {
    if (selectedApplicationCriteria.includes(item)) {
      setSelectedApplicationCriteria((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedApplicationCriteria((prevSelectedItems) => [
        ...prevSelectedItems,
        item,
      ]);
    }
  };

  return (
    <>
      <form action="" className="flex flex-col gap-5 mb-10 ">
        <div className=" min-w-[550px] w-full z-10 rounded-xl bg-transparent  py-8 px-8 h-[610px] overflow-y-auto shadow max-w-lg flex flex-col gap-4">
          <h1 className="text-PrimaryColor text-[18px]">
            Orta texniki və ali təhsil usulları
          </h1>
          <div className="h-[22px] w-full rounded-lg flex">
            <div className="h-full rounded-lg mr-2 transition-all duration-500 flex justify-center text-white w-full  bg-PrimaryColor">
              1
            </div>
            <div className="h-full  rounded-lg mr-2 transition-all duration-500 flex justify-center text-white w-full  bg-PrimaryColor">
              2
            </div>
            <div className="h-full w-full rounded-lg mr-2 transition-all duration-500 flex justify-center text-PrimaryColor  bg-LightColor">
              3
            </div>
          </div>

          <div className="w-full space-y-7 ">
            <div className="border rounded-full flex justify-between  items-center mb-5">
              <div className="w-36 rounded-l-full flex items-center bg-LightColor ">
                <div className="flex gap-5 px-5 py-1 ">
                  <span>1. </span>
                  <span> asdad</span>
                </div>
              </div>
              <div className="border-r">
                <div>
                  <span> </span>
                </div>
              </div>
              <div className="w-14 rounded-r-full flex items-center bg-LightColor ">
                <div className="flex items-center justify-center w-full  h-full">
                  <span className="cursor-pointer  py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      style={{ color: "red" }}
                    >
                      <path
                        fill="currentColor"
                        d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-5">
              <Link
                to="/technical-and-higher"
                className="border p-2 rounded-full px-5 items-center bg-LightColor"
              >
                Yeni təhsil əlavə et +
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center justify-center gap-3 w-[180px] border border-PrimaryColor text-PrimaryColor rounded-full py-4"
          >
            <img src={arrowLeft} alt="right" />
            <span>Geri</span>
          </Link>
          <button
            type="button"
            className="flex items-center justify-center gap-3 w-[180px] bg-PrimaryColor text-white rounded-full py-4"
          >
            <span>Növbəti</span>
            <img src={arrowRight} alt="right" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Remember;

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

import { BackLink, Level, NextBtn } from "../components";
import { deleteEducation } from "../features/education/educationLevelSlice";

const Remember: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { educationSecondLevel } = useSelector(
    (state: RootState) => state.educationLevel
  );

  useEffect(() => {
    if (educationSecondLevel.length < 1) {
      navigate("/technical-and-higher");
    }
  }, [navigate, educationSecondLevel]);

  const handleSubmit = () => {
    if (educationSecondLevel.length > 0) {
      navigate("/olympics");
    } else {
      navigate("/technical-and-higher");
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

          <div className="w-full space-y-7 ">
            {educationSecondLevel &&
              educationSecondLevel.map((edu, index) => (
                <div
                  key={index}
                  className="border rounded-full flex justify-between  items-center mb-5"
                >
                  <div className="w-36 rounded-l-full flex items-center bg-LightColor ">
                    <div className="flex gap-5 px-5 py-1 ">
                      <span>{index + 1}.</span>
                      <span>{edu?.companyName}</span>
                    </div>
                  </div>

                  <div>
                    <span>{edu?.profession}</span>
                  </div>
                  <div className="w-14 rounded-r-full flex items-center bg-LightColor ">
                    <div className="flex items-center justify-center w-full  h-full">
                      <span
                        className="cursor-pointer  py-2"
                        onClick={() => dispatch(deleteEducation(index))}
                      >
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
              ))}
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
          <BackLink path="/technical-and-higher" text="Geri" />
          <NextBtn text="Növbəti" />
        </div>
      </form>
    </>
  );
};

export default Remember;

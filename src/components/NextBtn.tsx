import arrowRight from "../assets/images/arrow-right.svg";

interface BtnProps {
  text: string;
}

const NextBtn: React.FC<BtnProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-3 w-[180px] bg-PrimaryColor text-white rounded-full py-4"
    >
      <span>{text}</span>
      <img src={arrowRight} alt="right" />
    </button>
  );
};

export default NextBtn;

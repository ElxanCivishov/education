interface saveBtnProps {
  text: string;
  handleClick: () => void;
}

const SaveButton: React.FC<saveBtnProps> = ({ text, handleClick }) => {
  return (
    <button
      type="button"
      className="px-12 py-2.5 flex items-center gap-1 font-medium text-white mt-5 mx-auto opacity-50 hover:opacity-100 transition duration-500 bg-SaveBtnBg rounded-full"
      onClick={handleClick}
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        className="text-white iconify iconify--tabler"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        style={{ fontSize: "25px" }}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m5 12l5 5L20 7"
        ></path>
      </svg>
    </button>
  );
};

export default SaveButton;

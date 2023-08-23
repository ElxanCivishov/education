import { Link } from "react-router-dom";
import arrowLeft from "../assets/images/arrow-left.svg";

interface backProps {
  text: string;
  path: string;
}

const BackLink: React.FC<backProps> = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="flex items-center justify-center gap-3 w-[180px] border border-PrimaryColor text-PrimaryColor rounded-full py-4"
    >
      <img src={arrowLeft} alt="back" />
      <span>{text}</span>
    </Link>
  );
};

export default BackLink;

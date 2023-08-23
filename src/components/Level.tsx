interface levelProps {
  level: number;
  active: boolean;
}

const Level: React.FC<levelProps> = ({ level, active }) => {
  return (
    <div
      className={`h-full rounded-lg mr-2 w-full transition-all duration-500 flex justify-center ${
        active
          ? "text-white   bg-PrimaryColor"
          : "text-PrimaryColor  bg-LightColor"
      } `}
    >
      {level}
    </div>
  );
};

export default Level;

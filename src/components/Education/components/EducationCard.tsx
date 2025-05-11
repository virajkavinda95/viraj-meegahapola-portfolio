interface EducationCardProps {
  date: string;
  calendar: string;
  uniLogo: string;
  title: string;
  lowerText: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  date,
  calendar,
  uniLogo,
  title,
  lowerText,
}) => {
  return (
    <div className="relative w-full sm:w-[30%] bg-[#104572] rounded-2xl p-6 flex flex-col gap-4 shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-all duration-300">
        <img
          src={uniLogo}
          alt="Background Logo"
          className="w-full object-contain opacity-20"
        />
      </div>

      {/* Top Row */}
      <div className="flex items-center justify-between w-full">
        <span className="flex items-center justify-between px-2 text-sm sm:text-base text-black bg-white rounded-full">
          <img src={calendar} alt="calendar" className="w-10 h-10" />
          <span className="pr-1 font-bold">{date}</span>
        </span>
        <img
          src={uniLogo}
          alt="uni_logo"
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-md sm:text-[15px] text-white font-bold">{title}</h3>

      {/* University Text */}
      <p className="text-white text-[14px] font-light">{lowerText}</p>
    </div>
  );
};

export default EducationCard;

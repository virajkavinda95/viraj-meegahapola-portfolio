interface ExpeirenceCardProps {
  title: string;
  text: string;
}

const ExpeirenceCard: React.FC<ExpeirenceCardProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto border-4 border-[#007EE5] rounded-[3rem] p-10 w-full sm:w-1/3 mb-6 sm:mb-0">
      <span className="text-[#007EE5] text-[4rem] font-bold">{title}</span>
      <span className="text-white capitalize text-4xl text-center">{text}</span>
    </div>
  );
};

export default ExpeirenceCard;

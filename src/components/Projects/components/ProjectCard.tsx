import Image from "next/image";
import { Eye } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  stack,
  liveUrl,
}) => {
  return (
    <div className="flex flex-col h-full bg-[#153450] rounded-2xl p-6 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md">
      {/* Image Container */}
      <div className="w-full h-52 relative mb-5 rounded-lg overflow-hidden">
        <img
          src={image}
          alt="project_img"
          // fill
          className="object-cover w-full h-full rounded-lg"
        />

        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <Eye className="text-white w-10 h-10" />
          </Link>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow">
        <h3 className="text-xl text-white font-bold mb-2">{title}</h3>
        <p className="text-sm text-white font-light text-justify mb-4 text-ellipsis overflow-hidden line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {stack.map((_v, idx) => (
            <span key={idx} className="text-[#50CAFF] text-xs font-medium">
              #{_v}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

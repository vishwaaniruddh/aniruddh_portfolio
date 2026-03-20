import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full"
    >
      <div className="relative w-full h-48 bg-[#0300145e] flex items-center justify-center overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative p-4 flex-1 flex flex-col">
        <h1 className="text-lg font-semibold text-white mb-2">{title}</h1>
        <p className="text-sm text-gray-300 line-clamp-4">{description}</p>
      </div>
    </Link>
  );
};

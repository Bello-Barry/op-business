import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
      <div className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0">
            <h1 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                <span className="mb-1 block text-sm leading-6 text-indigo-500">{title}</span>
               </h1>
            <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                <p>{description}</p>
            </div>
            </div> <Image
        src={src}
        alt={title}
        width={400}
        height={400}
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
          />
    </div>
   </div>
  );
};

export default ProjectCard;





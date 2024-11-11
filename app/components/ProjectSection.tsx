import React from "react";

interface ProjectSectionProps {
  data: {
    description: string;
    name: string;
    lastHeading: string;
    shortDetail : string
  };
}

function ProjectSection({ data }: ProjectSectionProps) {
  return (
    <div className="w-[1120px] h-[473px] bg-[#F3F3F3] mt-24 ml-28 ">
      <div className="flex">
        <div className="w-[800px]">
          <h2 className="font-semibold text-black text-xl font-[DM Sans]">{data.name}</h2>
          <p className="mt-5 font-light  text-black font-[DM Sans] text-xl">
            {data.description}
          </p>
          <p className="text-[#606060] mt-8">
           {data.shortDetail}
          </p>
          <p className="mt-52  text-[#606060] underline justify-center font-medium text-xl font-[DM Sans]">
            {data.lastHeading}
          </p>
        </div>
        <div>
          <img className="bg-[#606060] w-[640px] h-[364.68px] ml-52 mr-28" />
        </div>
      </div>
      <div className="h-0.5 w-[1350px] bg-[#606060] mt-20"></div>
    </div>
  );
}

export default ProjectSection;

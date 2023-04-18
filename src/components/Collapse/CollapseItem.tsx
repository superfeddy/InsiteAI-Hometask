//  External Depedencies
import React, { useState } from "react";

//  Types & Interface
interface ICollapseItem {
  title: string;
  content: string[];
}

const CollapseItem = ({ title, content }: ICollapseItem) => {
  const [isCollapseItemOpen, setCollapseItemOpen] = useState<boolean>(false);

  const toggleCollapseItemOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setCollapseItemOpen(!isCollapseItemOpen);
  };

  return (
    <div
      className="border-b-2 border-black py-5 px-10 h-auto select-none cursor-pointer"
      onClick={toggleCollapseItemOpen}
    >
      <div className="flex flex-row items-center justify-between py-3">
        <h1 className="text-3xl font-semi-bold">{title}</h1>
        <p className="text-3xl font-bold">{">"}</p>
      </div>
      <div className={`${isCollapseItemOpen ? "visible" : "hidden"} py-3`}>
        <hr className="border-2 border-black" />
        <div className="pt-5">
          {content.map((sentence: string, index: number) => (
            <p className="pb-3" key={`${index}-${sentence}`}>
              {sentence}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapseItem;

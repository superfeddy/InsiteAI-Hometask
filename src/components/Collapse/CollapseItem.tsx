//  External Depedencies
import React, { useState, FC, PropsWithChildren } from "react";

//  Types & Interface
interface ICollapseItem {
  title: string;
}

const CollapseItem: FC<ICollapseItem & PropsWithChildren> = ({
  title,
  children,
}) => {
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
        <div className="pt-5">{children}</div>
      </div>
    </div>
  );
};

export default CollapseItem;

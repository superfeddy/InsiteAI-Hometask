//  External Dependencies
import { FC, PropsWithChildren } from "react";

const Collapse: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="border-2 border-b-0 border-black w-full">{children}</div>
  );
};

export default Collapse;

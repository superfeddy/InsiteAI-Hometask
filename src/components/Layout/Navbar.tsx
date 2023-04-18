//  External Dependencies
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

//  Consts
import { ROUTES } from "@common/consts/routes";

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <nav className="h-20 flex bg-slate-300">
      <div className="flex mx-28">
        <h1 className="text-2xl font-bold my-auto">Insite AI</h1>
      </div>
      <div className="grow"></div>
      <div className="mx-20 my-auto">
        <Link
          href={ROUTES.Repositories}
          className={`mx-10 ${
            router.pathname.includes(ROUTES.Repositories) ? "font-bold" : ""
          }`}
        >
          Repositories
        </Link>
        <Link
          href={ROUTES.Settings}
          className={`mx-10 ${
            router.pathname.includes(ROUTES.Settings) ? "font-bold" : ""
          }`}
        >
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

//  External Dependencies
import Router from "next/router";
import { useEffect } from "react";

//  Consts
import { ROUTES } from "@/common/consts/routes";

export default function Home() {
  useEffect(() => {
    //  Redirect to "Repositories" page as a default
    Router.push(ROUTES.Repositories);
  }, []);

  return <></>;
}

import { useRouter } from "next/router";
import Navbar from "../../organisme/Navbar";
import { useEffect, useState } from "react";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/404"];
const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main className="h-screen">
      {!disableNavbar.includes(pathname) && (
        <Navbar
          className={`hidden text-lg w-full h-14 justify-between items-center px-72 sm:flex z-40 fixed `}
        />
      )}
      {children}
    </main>
  );
};
export default AppShell;

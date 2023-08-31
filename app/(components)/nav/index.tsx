"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { SiteSettingsType } from "../types";
import Burger from "./Burger";
import EmailSubscription from "../EmailSubscription";
import SocialIcons from "../SocialIcons";

const Nav = ({ siteSettings }: { siteSettings: SiteSettingsType }) => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  if (
    pathname.includes("setlist") ||
    pathname.includes("admin") ||
    pathname.includes("epk")
  )
    return null;
  return (
    <nav className="fixed z-20">
      <Burger barColor={isNavOpen ? "bg-black" : "bg-orange-200"} onClickHandler={handleBurgerClick} isNavOpen={isNavOpen} />
      <Menu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} siteSettings={siteSettings} />
    </nav>
  );
};

export default Nav;

const Menu = ({
  isNavOpen,
  siteSettings,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  siteSettings: SiteSettingsType;
  setIsNavOpen: (arg: boolean) => void;
}) => {
  const closeMenu = () => {
    setIsNavOpen(false);
  };

  
  return (
    <div
      className={`${
        !isNavOpen ? "w-0 h-0" : "w-screen h-screen"
      } transition-all z-20  fixed top-0 left-0 bg-orange-100`}
    >
      <div
        className={`${
          !isNavOpen ? "hidden" : ""
        } p-8 grid place-content-center h-screen`}
      >
        <EmailSubscription
          classNames="relative"
          subscribeContent={siteSettings.subscribe}
          // onSubscribe={closeMenu}
        />
        <SocialIcons socialIcons={siteSettings.socialLinks} />
      </div>
    </div>
  );
};
